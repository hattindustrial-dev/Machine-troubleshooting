# Issue level component tags: how they were made and how far to trust them

Every diagnostic result now says which plant components it concerns. That is what lets a
machine's parts list the issues that apply to them. This note records how the first pass was
done, what the numbers do and do not show, and where a person overruled the process. The
audit trail for every individual decision is in `tagging-decisions.json`.

## What a tag means

Each result carries two lists, `applies: { primary, contributing }`.

- **primary**: the component is what fails, is worn, or is the subject of the finding, and the
  diagnosis names it or its failure. A part lists these as **direct** issues.
- **contributing**: the component's condition causes the result, or it has to be inspected to
  confirm or rule the result out, or it is damaged by it. A part lists these as **involved**.
- **two empty lists**: the result concerns no plant component (a method, a measurement
  technique, general safety). 33 of the 380 results are generic. That is a statement about the
  result, and a missing field is what would mean nobody tagged it.

A label that lists candidate causes ("check lubrication and alignment", "oil, wear, or
pressure", "positioner or air") is a differential. The result is about the fault, and each
candidate is contributing unless one of them is the thing the result is really about.

That last rule was learned rather than designed. The first version said "a component named in
the label is primary", and a vote applied it to checklist labels where the same concept is
tagged the other way everywhere else in the library. See the overrides below.

## The process

1. **Tag.** One agent per module tagged its results, reading each result with the questions
   that lead to it. 380 results, 20 modules.
2. **Verify.** Three reviewers with different lenses corrected the tagging: precision (assume
   it is over-generous), recall (assume it is missing things), and a sweep by component. A
   change needed two of the three to agree.
3. **Measure.** A blind re-tag of every fourth result (101 of them) by an agent that never saw
   the first tagging.
4. **Critique.** Two critics looked across modules for the same failure concept tagged
   differently, and audited by component. Their 17 findings went into the next step.
5. **Adjudicate.** Every tag that one reviewer or critic wanted changed and nobody else backed,
   109 of them, went to three neutral judges with different lenses: a planner, a literal
   auditor, and a cross-module consistency judge who could see every result's tags. A change
   needed two of three.
6. **Review.** A person read the twelve changes that passed over a dissent, and ran a
   mechanical consistency sweep over the result. Five changes were overruled and one fix was
   made by hand.

## The numbers

| | |
| --- | --- |
| Results tagged | 380 across 20 modules, 33 of them generic |
| Blind re-tag agreement, same component set | 85% |
| Blind re-tag agreement, overlap of the sets | 93% |
| Blind re-tag agreement, same primary set | 86% |
| Tags disputed by a reviewer or critic | 109 |
| Disputed tags with more than one proposer in the first round | 0 |
| Judges' verdicts that were unanimous | 77 of 109 (71%) |
| Changes that passed on two or more votes | 23 |
| Of those, overruled on review | 5 |
| Applied | 18, plus the 7 that passed in the first round |
| Fixed by hand after the sweep | 1 |

The three adjudication lenses accepted at nearly the same rate (23, 27 and 27 of 109), so none
was systematically pulling toward adding or removing tags.

## What those numbers do not show

**Agreement is consistency, not correctness.** The blind re-tag compares one model with
itself. High agreement means the process is repeatable. It does not mean a maintenance
technician would agree, and two runs can agree on the same mistake.

**It is uneven.** Pumps agreed at 56% and hydraulics at 60% on the blind re-tag. The samples
per module were small, 3 to 10 results, so those figures are noisy, but the pump and hydraulics
modules are where to look first.

**The verification step barely moved anything.** Only 7 tags met the two-vote bar in the first
round, and blind agreement rose from 84.2% to 85.1% after it. The disputes were nearly all a
single reviewer with a single lens. Most of the value came from the adjudication round and the
critics, which found real inconsistencies a per-module pass cannot see.

**No domain expert has reviewed these.** Everything above is model judgement, checked several
ways. The tags are ordinary data in `app/data/modules/<key>.js`. A journeyman reading the
possible issues for a machine they know will find things worth changing, and changing them is
an edit and a run of `build/extract.mjs`.

## Where a person overruled the vote

Five changes passed two to one and were not applied. In each the dissent was the better
argument, and each is a checklist label whose siblings elsewhere in the library are tagged the
other way.

- `bearing/re_heat_only`, lube and alignment to primary
- `bearing/sj_heat_with_oil`, lube to primary
- `clutches/r_wet`, lube to primary
- `valves/r_positioner`, pneu to primary

One fix was made by hand after a consistency sweep: `installation/r_anchor_clearance` carried a
`motor` tag its twin `alignment/r_holes` did not, and the text never names a motor. All six,
with reasons, are in `build/tagging/overrides.json` and `build/tagging/edits.json`.

## Known limits

- **"The driven machine".** `motors/r_amps_driven` and `motors/r_vib_downstream` are category
  pointers: the text says only "the driven machine". The tags list pump, fan, gearbox,
  conveyor and compressor, which is an inference. A hydraulic power unit is also a driven
  machine and is not listed.
- **Differentials are not fully consistent.** `hydraulics/r_bypass` ("piston seal or motor
  wear") has seal as primary by a unanimous vote, while the equivalent `pneu/slow_drift` has it
  as contributing. Different judges saw them in different batches, and no per-batch process
  removes that.
- **The keyword sweep is crude.** It found one real defect. Most of its other flags were noise
  ("valve" inside hydraulics, "alignment" meaning belt misalignment, "fan" meaning a motor's
  cooling fan), which is a reminder of how much of this is judgement.

## What it did to the numbers

For a pump train (motor, coupling, two bearings, pump, seal):

| part | before, module level | after, issue level |
| --- | --- | --- |
| Bearing | 15 direct, 90 related (105) | 46 direct, 40 involved (86) |
| Pump | 35 direct, 13 related (48) | 33 direct, 19 involved (52) |
| Seal | 13 direct, 99 related (112) | 31 direct, 22 involved (53) |

The lists did not all shrink. What changed is which results and why: a bearing now lists the
bearing failures analysed in Lubrication, Gearboxes, Pumps and Motors as direct, where before
only the Bearing module's own fifteen were.
