export const meta = {
  name: 'tag-issues-by-component',
  description: 'Tag every diagnostic result with the plant components it concerns, correct by majority vote of three reviewers, and measure agreement against a blind re-tag',
  whenToUse: 'After adding or changing diagnostic results, to keep issue-level component tags current',
  phases: [
    { title: 'Tag', detail: 'one agent per module assigns component tags and roles' },
    { title: 'Verify', detail: 'three lenses vote on corrections; a blind re-tag of every fourth result measures agreement' },
    { title: 'Critique', detail: 'cross-module consistency and per-component audit; findings are reviewed, not auto-applied' },
  ],
}

const SB = '__SB__'
const TYPES = ['pump', 'bearing', 'seal', 'alignment', 'lube', 'motor', 'gearbox', 'powertrans', 'pneu', 'hydraulics', 'valve', 'fan', 'compressor', 'conveyor', 'brake', 'guard']
const MODULES = __DATA__

const TAG_SCHEMA = {
  type: 'object',
  properties: {
    tags: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          generic: { type: 'boolean' },
          applies: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: { type: 'string', enum: TYPES },
                role: { type: 'string', enum: ['primary', 'contributing'] },
              },
              required: ['type', 'role'],
            },
          },
        },
        required: ['id', 'applies'],
      },
    },
  },
  required: ['tags'],
}

const DISPUTE_SCHEMA = {
  type: 'object',
  properties: {
    reviewed: { type: 'integer' },
    disputes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          type: { type: 'string', enum: TYPES },
          to: { type: 'string', enum: ['absent', 'primary', 'contributing'] },
          reason: { type: 'string' },
        },
        required: ['id', 'type', 'to', 'reason'],
      },
    },
  },
  required: ['reviewed', 'disputes'],
}

const FINDINGS_SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          module: { type: 'string' },
          id: { type: 'string' },
          type: { type: 'string', enum: TYPES },
          to: { type: 'string', enum: ['absent', 'primary', 'contributing'] },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          reason: { type: 'string' },
        },
        required: ['module', 'id', 'type', 'to', 'confidence', 'reason'],
      },
    },
  },
  required: ['findings'],
}

const CONTEXT =
  'BuiltWright is a maintenance troubleshooting library. A user builds a machine as a chain of parts (for example motor, coupling, two bearings, pump, seal) ' +
  'and the app lists the possible issues for the parts they have. The component tags decide which issues each part shows. ' +
  'Over-tagging buries a technician in irrelevant items; under-tagging hides a real risk.'

const MEANING =
  'Tag meanings. primary: this component is what has failed, is worn, or is the subject of the finding. ' +
  'contributing: this component\'s condition caused the result, or it must be inspected to confirm or rule the result out, or it is directly damaged or affected by it. ' +
  'absent: the component is at most mentioned in passing. Several components can be primary. ' +
  'A result that concerns no plant component at all (a measurement technique, a method, a document, general safety) has no tags and is generic.'

function tagPrompt(mod, ids) {
  return CONTEXT + '\n\n' +
    'Tag the diagnostic results of the "' + mod.name + '" module with the plant components each concerns.\n\n' +
    'Read these two files with the Read tool. Do not modify any file.\n' +
    '1. ' + SB + '/vocab.json : the 16 component types, what each means, and the module that is primarily about it.\n' +
    '2. ' + SB + '/' + mod.key + '.json : the module\'s results, each with a label, text, sub (detail), prevent (what stops it recurring) and reachedBy (the questions and answers that lead to it).\n\n' +
    MEANING + '\n\n' +
    'Rules: use only the 16 keys in vocab.json. Judge each result from its own text and from what reachedBy implies about it. ' +
    'Be precise rather than generous. Return one entry for every id below, exactly once. There are ' + ids.length + '.\n\n' +
    'Result ids: ' + ids.join(', ')
}

const LENSES = [
  {
    key: 'precision',
    text: 'Your lens is precision. Assume the tagging is over-generous. Go through every result and try to refute each tag: would a technician who owns this component be right to see this result listed as a possible issue for it? Remove tags that only reflect a passing mention, and downgrade primary to contributing where the component is affected rather than at fault.',
  },
  {
    key: 'recall',
    text: 'Your lens is recall. Assume the tagging is missing things. Go through every result and ask which of the 16 components could cause it, would be found damaged because of it, or would have to be checked before the diagnosis is safe. Add those tags, and upgrade contributing to primary where the component is really the subject.',
  },
  {
    key: 'sweep',
    text: 'Your lens is a sweep by component. Work the other way round: for each of the 16 component types, imagine a machine whose chain contains only that component, and decide which of this module\'s results its owner should expect to see and in what role. Compare that with the current tagging and report every disagreement in either direction.',
  },
]

function verifyPrompt(mod, byId, lens) {
  const lines = mod.ids.map(function (id) {
    const a = byId[id] || []
    return id + ': ' + (a.length ? a.map(function (x) { return x.type + '/' + x.role }).join(', ') : 'none (generic)')
  }).join('\n')
  return CONTEXT + '\n\n' +
    'Another annotator tagged the diagnostic results of the "' + mod.name + '" module with the plant components each concerns. Your job is to correct that tagging.\n\n' +
    'Read these with the Read tool. Do not modify any file.\n' +
    '1. ' + SB + '/vocab.json : the 16 component types and what each means.\n' +
    '2. ' + SB + '/' + mod.key + '.json : the module\'s results with text, detail, prevention and the questions that lead to each.\n\n' +
    MEANING + '\n\n' +
    'The current tagging, one line per result (id: type/role, ...):\n' + lines + '\n\n' +
    lens.text + '\n\n' +
    'Report only the changes you would make, as disputes: id, type, to (absent, primary or contributing: the state you believe is correct) and a short reason. ' +
    'Do not report tags you agree with. Set reviewed to the number of results you examined; there are ' + mod.ids.length + '. ' +
    'Other reviewers are working independently and a change only takes effect if at least two of you agree on the same new state, so report changes you can defend and skip the marginal ones.'
}

const stateOf = function (list, type) {
  const hit = (list || []).filter(function (a) { return a.type === type })[0]
  return hit ? hit.role : 'absent'
}

const setState = function (list, type, to) {
  const rest = list.filter(function (a) { return a.type !== type })
  if (to !== 'absent') rest.push({ type: type, role: to })
  return rest
}

const dedupe = function (applies) {
  const seen = {}
  const out = []
  for (const a of applies) {
    if (seen[a.type]) continue
    seen[a.type] = true
    out.push({ type: a.type, role: a.role })
  }
  return out
}

async function tagModule(mod) {
  const byId = {}
  let todo = mod.ids.slice()
  for (let attempt = 0; attempt < 3 && todo.length; attempt++) {
    const res = await agent(tagPrompt(mod, todo), {
      label: 'tag:' + mod.key + (attempt ? ':retry' + attempt : ''),
      phase: 'Tag',
      schema: TAG_SCHEMA,
    })
    if (!res) { log(mod.key + ': tagger returned nothing on attempt ' + (attempt + 1)); continue }
    const want = {}
    todo.forEach(function (id) { want[id] = true })
    for (const t of res.tags) {
      if (!want[t.id] || (t.id in byId)) continue
      byId[t.id] = dedupe(t.applies)
    }
    todo = mod.ids.filter(function (id) { return !(id in byId) })
  }
  if (todo.length) {
    log(mod.key + ': ' + todo.length + ' result(s) still untagged after 3 attempts, left generic: ' + todo.slice(0, 4).join(', '))
    todo.forEach(function (id) { byId[id] = [] })
  }
  return { byId: byId, untagged: todo }
}

const jaccard = function (x, y) {
  const A = {}, B = {}
  x.forEach(function (v) { A[v] = true })
  y.forEach(function (v) { B[v] = true })
  const na = Object.keys(A).length, nb = Object.keys(B).length
  if (!na && !nb) return 1
  let inter = 0
  Object.keys(A).forEach(function (v) { if (B[v]) inter++ })
  return inter / (na + nb - inter)
}

async function verifyModule(tagged, mod) {
  if (!tagged) return null
  const sample = mod.ids.filter(function (_, i) { return i % 4 === 0 })
  const runs = await parallel(LENSES.map(function (lens) {
    return function () {
      return agent(verifyPrompt(mod, tagged.byId, lens), { label: lens.key + ':' + mod.key, phase: 'Verify', schema: DISPUTE_SCHEMA })
    }
  }).concat([
    function () { return agent(tagPrompt(mod, sample), { label: 'blind:' + mod.key, phase: 'Verify', schema: TAG_SCHEMA }) },
  ]))

  const voters = runs.slice(0, LENSES.length).filter(Boolean)
  const blind = runs[LENSES.length]
  if (voters.length < 2) log(mod.key + ': only ' + voters.length + ' reviewer(s) returned, so no correction can reach two votes')

  const idSet = {}
  mod.ids.forEach(function (id) { idSet[id] = true })

  const stated = {}
  voters.forEach(function (v) {
    const seen = {}
    for (const d of v.disputes) {
      if (!idSet[d.id]) continue
      const k = d.id + '|' + d.type
      if (seen[k]) continue
      seen[k] = true
      ;(stated[k] = stated[k] || []).push({ to: d.to, reason: d.reason })
    }
  })

  const final = {}
  mod.ids.forEach(function (id) { final[id] = tagged.byId[id].map(function (a) { return { type: a.type, role: a.role } }) })

  const changes = []
  const contested = []
  Object.keys(stated).forEach(function (k) {
    const parts = k.split('|')
    const id = parts[0], type = parts[1]
    const cur = stateOf(tagged.byId[id], type)
    const s = stated[k]
    const counts = { absent: 0, primary: 0, contributing: 0 }
    s.forEach(function (x) { counts[x.to]++ })
    counts[cur] += voters.length - s.length // a reviewer who says nothing agrees with the current tagging
    const winners = Object.keys(counts).filter(function (st) { return st !== cur && counts[st] >= 2 })
    if (winners.length === 1 && counts[cur] < 2) {
      final[id] = setState(final[id], type, winners[0])
      changes.push({ module: mod.key, id: id, type: type, from: cur, to: winners[0], votes: counts[winners[0]], reasons: s.map(function (x) { return x.to + ': ' + x.reason }) })
    } else if (s.some(function (x) { return x.to !== cur })) {
      contested.push({ module: mod.key, id: id, type: type, current: cur, proposals: s.map(function (x) { return x.to + ': ' + x.reason }) })
    }
  })

  let agreement = null
  if (blind) {
    const b = {}
    for (const t of blind.tags) {
      if (sample.indexOf(t.id) !== -1 && !(t.id in b)) b[t.id] = dedupe(t.applies)
    }
    const all = function (l) { return l.map(function (a) { return a.type }) }
    const prim = function (l) { return l.filter(function (a) { return a.role === 'primary' }).map(function (a) { return a.type }) }
    const sameSet = function (x, y) { return jaccard(x, y) === 1 }
    let n = 0, ji = 0, jf = 0, ei = 0, ef = 0, pi = 0, pf = 0
    sample.forEach(function (id) {
      if (!(id in b)) return
      n++
      ji += jaccard(all(b[id]), all(tagged.byId[id]))
      jf += jaccard(all(b[id]), all(final[id]))
      ei += sameSet(all(b[id]), all(tagged.byId[id])) ? 1 : 0
      ef += sameSet(all(b[id]), all(final[id])) ? 1 : 0
      pi += sameSet(prim(b[id]), prim(tagged.byId[id])) ? 1 : 0
      pf += sameSet(prim(b[id]), prim(final[id])) ? 1 : 0
    })
    if (n) agreement = { sampled: n, jaccardInitial: ji / n, jaccardFinal: jf / n, exactInitial: ei / n, exactFinal: ef / n, primaryInitial: pi / n, primaryFinal: pf / n }
  }

  return {
    key: mod.key, name: mod.name, ids: mod.ids, labels: mod.labels,
    initial: tagged.byId, final: final, changes: changes, contested: contested,
    agreement: agreement, reviewers: voters.length, untagged: tagged.untagged.length,
  }
}

phase('Tag')
const done = (await pipeline(
  MODULES,
  function (_, mod) { return tagModule(mod) },
  function (tagged, mod) { return verifyModule(tagged, mod) },
)).filter(Boolean)

log(done.length + ' of ' + MODULES.length + ' modules tagged and verified')

// ---- summary -----------------------------------------------------------------------
const total = done.reduce(function (a, r) { return a + r.ids.length }, 0)
let generic = 0, changed = 0, contestedN = 0, nSample = 0
const acc = { jaccardInitial: 0, jaccardFinal: 0, exactInitial: 0, exactFinal: 0, primaryInitial: 0, primaryFinal: 0 }
done.forEach(function (r) {
  r.ids.forEach(function (id) { if (!r.final[id].length) generic++ })
  changed += r.changes.length
  contestedN += r.contested.length
  if (r.agreement) {
    nSample += r.agreement.sampled
    Object.keys(acc).forEach(function (k) { acc[k] += r.agreement[k] * r.agreement.sampled })
  }
})
const measured = {}
Object.keys(acc).forEach(function (k) { measured[k] = nSample ? Math.round((acc[k] / nSample) * 1000) / 1000 : null })

// ---- critique ------------------------------------------------------------------------
phase('Critique')
const short = function (list) {
  const p = list.filter(function (a) { return a.role === 'primary' }).map(function (a) { return a.type })
  const c = list.filter(function (a) { return a.role === 'contributing' }).map(function (a) { return a.type })
  return (p.length ? 'P=' + p.join('+') : '') + (c.length ? (p.length ? ' ' : '') + 'C=' + c.join('+') : '') || 'generic'
}
const table = done.map(function (r) {
  return '## ' + r.key + ' (' + r.name + ')\n' + r.ids.map(function (id, i) {
    return id + ' | ' + r.labels[i] + ' | ' + short(r.final[id])
  }).join('\n')
}).join('\n\n')

const CRITICS = [
  {
    key: 'consistency',
    text: 'Look across modules for inconsistency. The same failure concept sometimes appears in several modules (overgreasing, misalignment, cavitation, soft foot, contaminated oil, a dry seal, pipe strain, a dragging brake). Find cases where the same concept is tagged with different components in different modules, and decide which tagging is right. Report each result that should change, with the state you believe is correct.',
  },
  {
    key: 'audit',
    text: 'Audit by component. For each of the 16 components, read down the table and find results whose label clearly concerns that component but which lack its tag, and results carrying its tag whose label has nothing to do with it. Read the module files in ' + SB + ' for the full text where a label is not enough. Report each result that should change, with the state you believe is correct.',
  },
]

const critics = await parallel(CRITICS.map(function (c) {
  return function () {
    return agent(
      CONTEXT + '\n\n' + MEANING + '\n\n' +
      'The final tagging of all ' + total + ' diagnostic results across ' + done.length + ' modules, one line per result (id | label | tags, where P is primary and C is contributing):\n\n' + table + '\n\n' +
      'Full text for each result is in ' + SB + '/<module>.json and the component definitions are in ' + SB + '/vocab.json; read them with the Read tool, do not modify any file.\n\n' +
      c.text + '\n\n' +
      'Give a confidence for each finding. Report only findings you would defend to a maintenance technician; a long list of marginal ones is worse than a short list of sound ones.',
      { label: 'critic:' + c.key, phase: 'Critique', schema: FINDINGS_SCHEMA },
    )
  }
}))

const findings = []
critics.forEach(function (res, i) {
  if (!res) { log('critic ' + CRITICS[i].key + ' returned nothing'); return }
  res.findings.forEach(function (f) { findings.push({ critic: CRITICS[i].key, module: f.module, id: f.id, type: f.type, to: f.to, confidence: f.confidence, reason: f.reason }) })
})

const tags = {}
done.forEach(function (r) {
  tags[r.key] = {}
  r.ids.forEach(function (id) {
    tags[r.key][id] = [
      r.final[id].filter(function (a) { return a.role === 'primary' }).map(function (a) { return a.type }),
      r.final[id].filter(function (a) { return a.role === 'contributing' }).map(function (a) { return a.type }),
    ]
  })
})

return {
  summary: {
    modules: done.length, results: total, generic: generic,
    changesApplied: changed, contested: contestedN, untagged: done.reduce(function (a, r) { return a + r.untagged }, 0),
    blindSampled: nSample, agreementWithBlindRetag: measured,
    criticFindings: findings.length,
  },
  tags: tags,
  changes: done.reduce(function (a, r) { return a.concat(r.changes) }, []),
  contested: done.reduce(function (a, r) { return a.concat(r.contested) }, []),
  perModule: done.map(function (r) { return { key: r.key, reviewers: r.reviewers, untagged: r.untagged, changes: r.changes.length, contested: r.contested.length, agreement: r.agreement } }),
  critics: findings,
}
