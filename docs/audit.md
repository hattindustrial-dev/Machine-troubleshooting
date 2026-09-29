# Audit, before trade school material is added

What was checked, what was wrong, what was fixed, and what is still open. This is a record of
a working session, not a certification. Nothing here has been reviewed by a person who works in
the trades; where a claim rests on that, it says so.

## What was checked

- The validator on the whole tree, and a comparison of every tool page against a snapshot taken
  before the audit began.
- Every page opened in a browser at phone, tablet and desktop widths.
- Hostile data, planted in storage and in an import file, opened through every page that
  renders it.
- The offline path: the service worker's precache against what the pages actually load.
- The in-app text against what is actually built.
- The self-check banks, statistically.

## Found and fixed

| Finding | Effect | Fix |
| --- | --- | --- |
| Ids in imported or stored facility data were placed in attributes and event handlers unchecked | A hostile file could run script in the browser of whoever imported it | `BWF.clean` rebuilds every id as a plain token, forces text to bounded strings, drops unsafe keys, and is applied on load and on import |
| The hub banner printed the equipment tag without escaping | Same class of hole, reachable from stored data | Escaped, and the sanitiser removes it at the source too |
| Importing a machine whose id was already present renamed it but left its logs on the old id | Logs attached themselves to a different machine | Logs are remapped to the machine's new id and their own ids are made unique |
| Tables were wider than the reading column on phones and tablets | Horizontal page scroll | Every table is wrapped in a scrolling container at mount; `bw-responsive.css` |
| A PM tick could land in a hidden tab | The user ticked something they could not see | `landOnTasks` opens the tab holding the tasks |
| The hub described facility features that were not built | Overpromising | The note now lists what exists and says plainly what does not (photos, structured readings, component-filtered self-check questions) |
| The manager guide said content was written into modules for the plant | Contradicted the design | Reworded: the plant's numbers appear beside universal content |
| Correct answers sat in the second position in 91% of self-check questions, and the renderer does not shuffle | Choosing B every time passed | Rebalanced to 24, 28, 24 and 24 percent. Only the order of options changed: an independent comparison of stems, correct-answer text, option sets and explanations found no difference. 22 questions whose options refer to each other ("both of the above") were left alone. |

New permanent guards, so these cannot return quietly: fragment balance, template validity and
answer-position balance in `build/validate.mjs`; `build/test-facility.mjs`; `build/security.mjs`
(confirmed to fail when the sanitiser is switched off).

## Open

**Self-check questions are too easy to pass without knowing the subject.** The correct answer is
the single longest option in 73% of the 423 questions (chance is about 25%). The wrong answers
are short and generic. Explanations are also terse: the median is 45 characters. This is
writing work, not something to fix mechanically, and it is the first thing to do with the new
material: trade school questions with real distractors are exactly what these banks need. The
validator reports the figure on every run so progress is visible.

**The component tags have not been reviewed by a domain expert.** They were assigned by
independent model reviewers, voted, and a sample re-tagged blind. The agreement figures in
`docs/tagging-review.md` measure how consistent that process is with itself. They do not
measure whether the tags are right. A few tags on "driven machine" results point at a category
where a specific part would be better, and a few differential labels are treated inconsistently.
A working technician should look at the Possible issues list for a machine they know before
anyone depends on it.

**Not verified in this environment.** Whether the icon font and other CDN assets are cached for
offline use could not be tested here; offline behaviour was verified for everything served from
the app itself. Real-device testing on a phone and a tablet has not been done, only emulated
widths.

**Not built.** Photos on log entries, structured readings (vibration, temperature, pressure over
time), component-filtered self-check questions, sync between devices, and any server.

## The safety content

None of the diagnostic advice has been checked against a lockout, pressure or stored-energy
procedure by a qualified person. Individual topics carry their own cautions (the safeguarding
module in particular says repairs to a safety system belong to someone qualified on it), but the
app has no notice of its own saying that it supports a site's procedures and does not replace
them. For an app people will act on next to running equipment that is a gap. It is left for the
project owner to word, since it is a statement about the owner's liability.
