import re, json, sys
sys.path.insert(0,'/home/claude')
from qbank1 import Q
from qbank2 import Q2
Q.update(Q2)
from qbank3 import Q3
Q.update(Q3)
from qbank4 import Q4
Q.update(Q4)
from qbank5 import Q5
Q.update(Q5)
from qbank6 import Q6
Q.update(Q6)
from qbank7 import Q7
Q.update(Q7)
OUT='/mnt/user-data/outputs/'

CSS = """
  .sc-section { margin-bottom: 1.25rem; }
  .sc-q { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 0.9rem 1.1rem; margin-bottom: 8px; }
  .sc-stem { font-size: 14px; font-weight: 600; color: #f0ede4; line-height: 1.45; margin-bottom: 0.6rem; }
  .sc-opts { display: flex; flex-direction: column; gap: 6px; }
  .sc-opt { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 500; text-align: left; padding: 7px 12px; border-radius: 5px; border: 0.5px solid #3a3a36; background: #242420; color: #e8e6df; cursor: pointer; transition: all 0.12s; line-height: 1.4; }
  .sc-opt:hover { border-color: #BA7517; color: #EF9F27; }
  .sc-opt.correct { border-color: #3B6D11; background: #0e1f05; color: #97C459; }
  .sc-opt.wrong { border-color: #A32D2D; background: #200d0d; color: #F09595; }
  .sc-opt:disabled { cursor: default; }
  .sc-why { display: none; font-size: 12px; color: #c8c6bf; line-height: 1.5; margin-top: 8px; padding-top: 8px; border-top: 0.5px solid rgba(255,255,255,0.08); }
  .sc-why.show { display: block; }
  .sc-why strong { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; color: #97C459; display: block; margin-bottom: 2px; }
  .sc-score { position: sticky; bottom: 0; background: #1a1a18; border-top: 0.5px solid #3a3a36; padding: 0.6rem 0; display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 1rem; }
  .sc-score-text { font-family: 'Share Tech Mono', monospace; font-size: 11px; letter-spacing: 1px; color: #888780; text-transform: uppercase; }
  .sc-score-text b { color: #EF9F27; }
  .sc-bar { flex: 1; height: 4px; background: #242420; border-radius: 2px; overflow: hidden; }
  .sc-bar div { height: 100%; background: #97C459; width: 0; transition: width 0.3s; }
  .sc-jump { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 1px; color: #888780; text-decoration: none; text-transform: uppercase; }
  .sc-jump:hover { color: #EF9F27; }
"""

JS = r"""
// BuiltWright self-check engine
let scAnswered = {}, scCorrect = 0;
function scRender(){
  const el=document.getElementById('sc-body'); if(!el) return;
  let total=0, html='';
  for (const [tab, qs] of Object.entries(SELFCHECK)){
    const tabName = (document.querySelector(`[onclick="switchTab('${tab}')"]`)||{}).textContent || tab;
    html += `<div class="sc-section"><div class="family-label">${tabName} <a class="sc-jump" href="#${tab}" onclick="switchTab('${tab}')">open tab</a></div>`;
    qs.forEach((q,i)=>{ const id=tab+'_'+i; total++;
      html += `<div class="sc-q" id="scq-${id}"><div class="sc-stem">${q[0]}</div><div class="sc-opts">${q[1].map((o,j)=>`<button class="sc-opt" onclick="scAnswer('${id}',${j},${q[2]})">${o}</button>`).join('')}</div><div class="sc-why" id="scw-${id}"><strong>Why</strong>${q[3]}</div></div>`;
    });
    html += `</div>`;
  }
  html += `<div class="sc-score"><div class="sc-score-text">Score <b id="sc-n">0</b> / ${total} &nbsp; answered <b id="sc-a">0</b></div><div class="sc-bar"><div id="sc-fill"></div></div><button class="tree-btn" onclick="scReset()">Reset</button></div>`;
  el.innerHTML = html; window._scTotal=total;
}
function scAnswer(id, j, correct){
  if (scAnswered[id]!==undefined) return;
  scAnswered[id]=j; if (j===correct) scCorrect++;
  const btns=document.querySelectorAll(`#scq-${id} .sc-opt`);
  btns.forEach((b,k)=>{ b.disabled=true; if(k===correct) b.classList.add('correct'); else if(k===j) b.classList.add('wrong'); });
  document.getElementById('scw-'+id).classList.add('show');
  document.getElementById('sc-n').textContent=scCorrect;
  const a=Object.keys(scAnswered).length; document.getElementById('sc-a').textContent=a;
  document.getElementById('sc-fill').style.width=(100*scCorrect/window._scTotal)+'%';
}
function scReset(){ scAnswered={}; scCorrect=0; scRender(); }
"""

def esc(s): return s.replace('\\','\\\\').replace("'","\\'")

for f,bank in Q.items():
    p=OUT+f; s=open(p).read()
    if 'panel-selfcheck' in s: print('skip',f); continue
    # verify tab keys exist in this module
    for tab in bank:
        if f"switchTab('{tab}')" not in s: print('  WARN tab missing',f,tab)
    # 1. CSS
    s=s.replace('</style>', CSS+'</style>',1)
    # 2. tab button before Safety button
    sb = s.find("onclick=\"switchTab('safety')\"")
    line_start = s.rfind('<button', 0, sb)
    btn = "<button class=\"bw-tab\" onclick=\"switchTab('selfcheck')\">Self-Check</button>\n    "
    s = s[:line_start] + btn + s[line_start:]
    # 3. panel before SAFETY panel comment or before panel-safety div
    anchor = s.find('<!-- SAFETY TAB -->') if '<!-- SAFETY TAB -->' in s else s.find('<!-- SAFETY -->')
    if anchor<0: anchor = s.find('<div id="panel-safety"')
    panel = '<!-- SELF-CHECK TAB -->\n  <div id="panel-selfcheck" class="bw-panel">\n    <div class="bw-section-label">Self-check: one question at a time, tap an answer, read why</div>\n    <div class="comp-detail"><div class="comp-detail-body">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id="sc-body"></div>\n  </div>\n\n  '
    s = s[:anchor] + panel + s[anchor:]
    # 4. data + JS before closing script (before deep-link routing comment if present)
    data = 'const SELFCHECK = {\n' + ',\n'.join(
        f"  {tab}: [\n" + ',\n'.join(f"    ['{esc(q[0])}', [{', '.join(chr(39)+esc(o)+chr(39) for o in q[1])}], {q[2]}, '{esc(q[3])}']" for q in qs) + '\n  ]'
        for tab,qs in bank.items()) + '\n};\n'
    inject = '\n' + data + JS
    # hook render into switchTab: append call
    s = re.sub(r"(function switchTab\(tab\)\s*\{)", r"\1 if(tab==='selfcheck'){ setTimeout(scRender,0); }", s, count=1)
    i = s.rfind('</script>')
    s = s[:i] + inject + s[i:]
    open(p,'w').write(s)
    n=sum(len(v) for v in bank.values())
    print('patched',f,'questions:',n,'em:',s.count('—'))
