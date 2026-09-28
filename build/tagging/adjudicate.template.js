export const meta = {
  name: 'adjudicate-disputed-tags',
  description: 'Three neutral judges with different lenses decide each disputed component tag; a change lands on two votes',
  whenToUse: 'After a tagging run, to settle the tags that only one reviewer or critic proposed changing',
  phases: [
    { title: 'Judge', detail: 'three lenses per batch: planner, literal auditor, cross-module consistency' },
  ],
}

const SB = '__SB__'
const BATCHES = __DATA__
const ORD = { absent: 0, contributing: 1, primary: 2 }

const DECISION_SCHEMA = {
  type: 'object',
  properties: {
    decisions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          n: { type: 'integer' },
          verdict: { type: 'string', enum: ['apply', 'reject'] },
          reason: { type: 'string' },
        },
        required: ['n', 'verdict', 'reason'],
      },
    },
  },
  required: ['decisions'],
}

const CONTEXT =
  'BuiltWright is a maintenance troubleshooting library. A user builds a machine as a chain of parts (for example motor, coupling, two bearings, pump, seal) ' +
  'and the app lists the possible issues for the parts they have. Each diagnostic result is tagged with the plant components it concerns, and those tags decide which issues each part shows.'

const RULES =
  'Tag meanings. primary: the component is what has failed, is worn, or is the subject of the finding; the diagnosis (the result\'s label) names it or its failure. ' +
  'contributing: the component\'s condition caused the result, or it must be inspected to confirm or rule the result out, or it is directly damaged or affected by it. ' +
  'absent: the component is at most an example or passing mention. ' +
  'A tag has a cost either way. Every tag makes the result appear on the list for every machine that has that component, so a marginal tag buries technicians in items that are not theirs. ' +
  'A missing tag hides a real risk. Judge on the merits: rejecting a proposed change is exactly as valid as applying it, and a proposal is not more likely to be right because someone made it.'

const LENSES = [
  {
    key: 'planner',
    text: 'Your lens is the maintenance planner. Imagine a machine whose chain contains this component. Reading the result as they would while planning work or chasing a fault, would they want it listed for that component, in the proposed tier? A result about a different subject that merely happens near the component is not one they want.',
  },
  {
    key: 'auditor',
    text: 'Your lens is the literal auditor. Read the result\'s label, text, sub and prevent line. Does the result itself direct action on, or blame, this component, or does it appear only as an illustration, an example, or one word in a list of possibilities? Only the first supports the tag. Where the proposal upgrades to primary, is the component named in the diagnosis itself?',
  },
  {
    key: 'consistency',
    text: 'Your lens is consistency across the library. The same failure concept appears in several modules (wrong rotation, soft foot, overgreasing, a seized idler, a leaking piston seal, oil on a friction surface). Use ' + SB + '/current-tags.json, which lists every result with its label and tags, to find how the same concept is tagged elsewhere. Does the proposed change bring this result into line with its siblings, or push it out of line? Where the siblings disagree with each other, say so and judge which pattern is right.',
  },
]

function prompt(batch, lens) {
  const list = batch.candidates.map(function (c) {
    return c.n + '. ' + c.id + ' [' + c.label + ']  ' + c.type + ': ' + c.from + ' -> ' + c.to +
      '\n     proposed by ' + c.sources.join(' and ') + ': ' + c.reasons.join(' | ')
  }).join('\n')
  return CONTEXT + '\n\n' +
    'Decide a set of disputed tags for the "' + batch.name + '" module. Each was proposed by a reviewer or a critic; none has been accepted.\n\n' +
    'Read with the Read tool. Do not modify any file.\n' +
    '1. ' + SB + '/vocab.json : the 16 component types and what each means.\n' +
    '2. ' + SB + '/' + batch.key + '.json : this module\'s results, with text, detail, prevention and the questions that lead to each.\n' +
    '3. ' + SB + '/current-tags.json : the current tags of every result in every module, with labels.\n\n' +
    RULES + '\n\n' +
    lens.text + '\n\n' +
    'The proposals (n. result id [label] component: current state -> proposed state):\n' + list + '\n\n' +
    'Give a verdict for every one of the ' + batch.candidates.length + ' proposals, numbered as above: apply or reject, with a short reason. Do not skip any.'
}

async function judgeBatch(batch) {
  const runs = await parallel(LENSES.map(function (lens) {
    return function () { return agent(prompt(batch, lens), { label: lens.key + ':' + batch.key, phase: 'Judge', schema: DECISION_SCHEMA }) }
  }))
  const judges = runs.filter(Boolean)
  if (judges.length < 3) log(batch.key + ': only ' + judges.length + ' of 3 judges returned; a change needs two votes so fewer judges can only reject')

  const out = []
  batch.candidates.forEach(function (c) {
    const votes = []
    runs.forEach(function (r, i) {
      const d = r && r.decisions.filter(function (x) { return x.n === c.n })[0]
      votes.push({ lens: LENSES[i].key, verdict: d ? d.verdict : (r ? 'missing' : 'no judge'), reason: d ? d.reason : '' })
    })
    const apply = votes.filter(function (v) { return v.verdict === 'apply' }).length
    out.push({
      module: batch.key, id: c.id, type: c.type, from: c.from, to: c.to, label: c.label,
      sources: c.sources, apply: apply, votes: votes,
      unanimous: votes.every(function (v) { return v.verdict === votes[0].verdict }),
    })
  })
  return out
}

const decided = (await pipeline(BATCHES, function (_, batch) { return judgeBatch(batch) })).filter(Boolean)
const all = decided.reduce(function (a, b) { return a.concat(b) }, [])
log(all.length + ' disputed tags judged across ' + decided.length + ' batches')

// Two accepted proposals for the same tag cannot both land. Keep the one with more votes;
// on a tie keep the one that moves the tag least.
const groups = {}
all.filter(function (d) { return d.apply >= 2 }).forEach(function (d) {
  const k = d.module + '|' + d.id + '|' + d.type
  ;(groups[k] = groups[k] || []).push(d)
})
const accepted = []
const superseded = []
Object.keys(groups).forEach(function (k) {
  const g = groups[k].slice().sort(function (a, b) {
    return (b.apply - a.apply) || (Math.abs(ORD[a.to] - ORD[a.from]) - Math.abs(ORD[b.to] - ORD[b.from]))
  })
  accepted.push(g[0])
  g.slice(1).forEach(function (d) { superseded.push(d) })
})

const lensAgree = {}
LENSES.forEach(function (l) { lensAgree[l.key] = { apply: 0, reject: 0 } })
all.forEach(function (d) { d.votes.forEach(function (v) { if (lensAgree[v.lens] && (v.verdict === 'apply' || v.verdict === 'reject')) lensAgree[v.lens][v.verdict]++ }) })

return {
  summary: {
    judged: all.length,
    accepted: accepted.length,
    rejected: all.length - accepted.length - superseded.length,
    superseded: superseded.length,
    unanimous: all.filter(function (d) { return d.unanimous }).length,
    byVotes: { three: all.filter(function (d) { return d.apply === 3 }).length, two: all.filter(function (d) { return d.apply === 2 }).length, one: all.filter(function (d) { return d.apply === 1 }).length, none: all.filter(function (d) { return d.apply === 0 }).length },
    perLens: lensAgree,
  },
  accepted: accepted,
  superseded: superseded,
  rejected: all.filter(function (d) { return d.apply < 2 }),
}
