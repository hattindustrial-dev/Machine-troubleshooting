# Bringing in new material

How trade school notes, procedures, tables and photos become BuiltWright content. The point
of writing it down is that every source goes through the same steps, and that where it came
from is recorded when it arrives, not reconstructed later.

## 1. Survey before building

For each upload, work out what it is and where it lands.

| If the material is | It becomes | Where |
| --- | --- | --- |
| A fault-finding procedure or fault table | Diagnostic nodes: questions, results, prevent lines | `trees.diagNodes` in a module |
| A subject with no module yet (welding, rigging, fasteners, drawing reading, engines, mixers) | A new module | `node build/new-module.mjs`, then fill it in |
| A war story or a practical trick | A field tip | the amber box in a module panel |
| What a failed part looks like | A failure-reading panel or card set | module `cards` and `panels` |
| Torque, fits, tolerances, gauge sizes | Reference rows and calculators | the `reference` module |
| Questions with reasons | Self-check entries | `selfcheck` in the module |
| A plant's own numbers | Not module content | the facility layer, never a module |

The last row matters. Plant specific numbers do not go into a universal module.

Also note anything that contradicts what the app already says. Do not resolve it silently.

## 2. Record where it came from

Every source gets a line in `docs/sources.md` before anything is written from it:

- what it is, who produced it, when it was received
- which bucket it is in
  - **Ours**: written by us, or material we hold the rights to. Its wording can be used.
  - **Reference**: a textbook, licensed courseware, a publisher's slides. It informs what is
    technically correct; the content is rewritten in BuiltWright's own voice and nothing is
    copied across: not the text, not the diagrams, not the question banks.
- which modules and nodes it fed

Facts are not copyrightable: a torque value, a clearance, how cavitation works. Wording,
diagrams and question banks are. If a source is in doubt, treat it as Reference.

## 3. Write it into the data

There is no HTML to write. Content goes into `app/data/modules/<key>.js`.

A question node and a result node in `trees.diagNodes`:

```js
ask_noise: {
  q: 'What does it sound like?', hint: 'Screwdriver to the housing, handle to your ear.',
  options: [{ label: 'Grinding or rumbling', next: 're_rumble', cls: '' }],
},
re_rumble: {
  type: 'result', cls: 'action',            // action, fix, escalate or info
  label: 'surface damage or contamination',
  text: 'What it is, in a sentence or two.',
  sub: 'What to check and do, in order.',
  prevent: 'What stops it recurring. The PM task library is generated from this line.',
  applies: { primary: ['bearing'], contributing: ['lube'] },   // see step 4
},
```

A self-check entry is `[stem, [options], correctIndex, why]`. The why is what teaches.

House style, held throughout:

- No em dashes.
- No "not X but Y" constructions.
- Field tips sit in the amber box and open with "Field tip:".
- A safety tab comes last, on any module that has one.

## 4. Tag every result with the components it concerns

Each diagnostic result names the plant components it concerns, so a machine's parts can list
the issues that apply to them.

- `primary`: this component is what fails, is worn, or is the subject of the finding.
- `contributing`: its condition causes the result, or it has to be inspected to confirm or rule
  the result out, or it is damaged by it.
- Two empty lists mean the result is generic: a method, a measurement technique, general
  safety. That is a statement about the result, so it is not left blank.

For a batch, use the tagging workflow rather than tagging by hand: three independent
reviewers vote, a change needs two of them, and a blind re-tag of a sample measures how far
the tagging can be trusted.

```sh
node build/tagging/prep.mjs         # prepare the inputs
node build/tagging/build.mjs        # generate .tagging/workflow.js
# run it from Claude Code with the Workflow tool: {scriptPath: '.tagging/workflow.js'}
node build/apply-tags.mjs <result.json> --write
```

## 5. Regenerate and check

```sh
node build/cutover.mjs --write       # generates a new module's page
node build/extract.mjs               # rebuilds the issue index
node build/derive.mjs --fix-search   # makes the new diagnoses searchable
node build/derive.mjs --fix-pm       # adds their prevent lines to the PM library
node build/sw.mjs                    # precaches it
node build/validate.mjs              # every check, non-zero on failure
```

Nothing is finished until `validate.mjs` passes, and a module still reading "to be written"
is not shipped. A missing module is better than a placeholder in the hub and in search.

## 6. Review

Before it goes in, read it as a technician would:

- Would someone acting on this hurt themselves or the machine? Anything that involves stored
  energy, pressure or lockout is checked twice.
- Does it contradict a value elsewhere in the app?
- Does the prevent line say something a PM task could actually be written from?
