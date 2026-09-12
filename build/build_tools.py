import re, glob, json, os, html
OUT='/mnt/user-data/outputs/'
os.chdir(OUT)

MODS = {  # file -> (num, name, component group, tree tab)
 'builtwright_pumps_combined_v1.html':('01','Pump Systems','Pumps','diagnose'),
 'builtwright_bearing_module_v1.html':('02','Bearing Failure','Bearings','diagnose'),
 'builtwright_coupling_alignment_v1.html':('03','Couplings and Alignment','Couplings and Alignment','troubleshoot'),
 'builtwright_seals_gaskets_v1.html':('04','Seals and Gaskets','Seals and Gaskets','troubleshoot'),
 'builtwright_lubrication_v1.html':('05','Lubrication Systems','Lubrication','troubleshoot'),
 'builtwright_pneumatics_v1.html':('06','Pneumatics','Pneumatics','troubleshoot'),
 'builtwright_hydraulics_v1.html':('07','Hydraulics','Hydraulics','troubleshoot'),
 'builtwright_power_transmission_v1.html':('08','Power Transmission','Belts and Chains','troubleshoot'),
 'builtwright_gearboxes_v1.html':('09','Gearboxes','Gearboxes','troubleshoot'),
 'builtwright_motors_v1.html':('10','Motors: Mechanical Side','Motors','troubleshoot'),
 'builtwright_vibration_v1.html':('11','Vibration Fundamentals','Vibration Route','troubleshoot'),
 'builtwright_reference_v1.html':('12','Reference','Reference',None),
 'builtwright_installation_v1.html':('13','Installation and Foundations','Installation','troubleshoot'),
 'builtwright_safeguarding_v1.html':('14','Machine Safeguarding and PSR','Safeguarding','troubleshoot'),
 'builtwright_conveyors_v1.html':('15','Conveyors','Conveyors','troubleshoot'),
 'builtwright_root_cause_v1.html':('16','Root Cause','Root Cause','troubleshoot'),
 'builtwright_fans_v1.html':('17','Fans and Blowers','Fans','troubleshoot'),
 'builtwright_compressors_v1.html':('18','Compressors','Compressors','troubleshoot'),
 'builtwright_clutches_brakes_v1.html':('19','Clutches and Brakes','Clutches and Brakes','troubleshoot'),
 'builtwright_process_valves_v1.html':('20','Process Valves and Actuators','Valves','troubleshoot'),
 'builtwright_precision_measurement_v1.html':('21','Precision Measurement','Measurement','troubleshoot'),
 'builtwright_curriculum_map_v1.html':('D1','Curriculum Map','Documents',None),
 'builtwright_manager_guide_v1.html':('D2','Manager Guide','Documents',None),
}
HUB='builtwright_diagnose_hub_v1.html'

def unesc(t): return t.replace("\\'","'")
def strip_tags(t): return re.sub(r'<[^>]+>','',t).strip()

# ---------------- 1. PM TASK LIBRARY ----------------
DROP_START=('whatever','nothing','depends','the root cause','whichever','none','no mechanical')
tasks=[]  # dict(comp, text, module, num, label, tab)
seen={}
for f,(num,name,comp,tree) in MODS.items():
    if not tree: continue
    s=open(f).read()
    for m in re.finditer(r"^\s{2}([a-z_0-9]+): \{\s*\n?\s*type: ?'result', cls: ?'([a-z]+)', label: ?'((?:[^'\\]|\\.)*)'.*?prevent:'((?:[^'\\]|\\.)*)'", s, re.M|re.S):
        nid,cls,label,prev=m.group(1),m.group(2),unesc(m.group(3)),unesc(m.group(4))
        for sent in re.split(r'(?<=\.)\s+', prev):
            sent=sent.strip()
            if len(sent)<16: continue
            if sent.lower().startswith(DROP_START): continue
            key=re.sub(r'[^a-z0-9 ]','',sent.lower())
            key=re.sub(r'\s+',' ',key)
            if key in seen:
                seen[key]['sources'].append((num,name,label,f,tree)); continue
            t={'comp':comp,'text':sent,'sources':[(num,name,label,f,tree)]}
            seen[key]=t; tasks.append(t)

# interval heuristic
def interval(t):
    x=t.lower()
    if any(k in x for k in ('daily','every shift','each shift')): return 'Daily'
    if any(k in x for k in ('weekly','week')): return 'Weekly'
    if 'quarter' in x: return 'Quarterly'
    if any(k in x for k in ('annual','yearly','a year')): return 'Annual'
    if any(k in x for k in ('monthly','route','trend')): return 'Monthly'
    if any(k in x for k in ('on every','every','after any','after every','on installation','at overhaul','on reassembly','on any','before','on the commissioning','replacement','rebuild','installation','commission')): return 'On event'
    if 'on the pm' in x or 'on the pm sheet' in x: return 'Each PM'
    if any(k in x for k in ('on condition','analysis','trended','logged','recorded','monitor')): return 'On condition'
    return 'Each PM'
for t in tasks: t['interval']=interval(t['text'])

comps=[]
for t in tasks:
    if t['comp'] not in comps: comps.append(t['comp'])
by_comp={c:[t for t in tasks if t['comp']==c] for c in comps}
INTERVALS=['Daily','Weekly','Monthly','Quarterly','Annual','Each PM','On event','On condition']

pm_data=json.dumps([{ 'id':i,'comp':t['comp'],'text':t['text'],'interval':t['interval'],'src':[{'num':a,'mod':b,'label':c,'file':d,'tab':e} for a,b,c,d,e in t['sources']]} for i,t in enumerate(tasks)], ensure_ascii=False)

styles=open('/home/claude/pt_styles.html').read().replace('BuiltWright: Power Transmission: Module 08','BuiltWright: PM Task Library')
styles=styles.replace('</style>', """
  .pm-tools { display:flex; gap:8px; flex-wrap:wrap; align-items:center; margin-bottom: 1rem; }
  .pm-search { flex:1; min-width: 180px; font-family:'Share Tech Mono',monospace; font-size:12px; letter-spacing:1px; background:#242420; border:0.5px solid #3a3a36; border-radius:6px; padding:9px 12px; color:#e8e6df; outline:none; }
  .pm-search:focus { border-color:#BA7517; }
  .pm-btn { font-family:'Share Tech Mono',monospace; font-size:10px; letter-spacing:1px; text-transform:uppercase; background:#242420; color:#BA7517; border:0.5px solid #BA7517; border-radius:4px; padding:8px 12px; cursor:pointer; }
  .pm-btn:hover { background:#2a1f08; }
  .pm-row { display:grid; grid-template-columns: 24px 1fr 130px; gap:10px; align-items:start; background:#2e2e2a; border:0.5px solid #3a3a36; border-radius:8px; padding:0.7rem 0.9rem; margin-bottom:6px; }
  .pm-row.done { opacity:0.55; }
  .pm-row input[type=checkbox] { width:18px; height:18px; accent-color:#BA7517; margin-top:2px; }
  .pm-text { font-size:14px; color:#f0ede4; line-height:1.45; }
  .pm-src { font-size:11px; color:#888780; margin-top:4px; line-height:1.4; }
  .pm-src a { color:#BA7517; text-decoration:none; }
  .pm-src a:hover { color:#EF9F27; }
  .pm-int { width:100%; font-family:'Share Tech Mono',monospace; font-size:10px; letter-spacing:0.5px; background:#1a1a18; border:0.5px solid #3a3a36; border-radius:5px; padding:6px; color:#e8e6df; }
  .pm-count { font-family:'Share Tech Mono',monospace; font-size:10px; letter-spacing:1px; color:#5F5E5A; text-transform:uppercase; margin: 0.5rem 0; }
  @media print { .bw-tabs,.pm-tools,.bw-header .bw-badge{display:none} body{background:#fff;color:#000;padding:0} .bw-panel{display:block !important; page-break-before:always} .pm-row{background:#fff;border-color:#999;color:#000} .pm-text{color:#000} .pm-src{color:#444} .bw-wrap{max-width:100%} }
</style>""")

tabs_html=''.join(f'<button class="bw-tab{" active" if i==0 else ""}" onclick="switchTab(\'c{i}\')">{html.escape(c)}</button>' for i,c in enumerate(comps))
panels_html=''.join(f'<div id="panel-c{i}" class="bw-panel{" active" if i==0 else ""}"><div class="bw-section-label">{html.escape(c)}: {len(by_comp[c])} tasks</div><div id="pm-list-c{i}"></div></div>' for i,c in enumerate(comps))
comp_ids=json.dumps({c:f'c{i}' for i,c in enumerate(comps)})

pm_html = styles + f"""</head>
<body>
<div class="bw-wrap">
  <div class="bw-header">
    <div><div class="bw-logo"><a href="builtwright_diagnose_hub_v1.html">BuiltWright</a></div><div class="bw-title">PM Task Library</div></div>
    <div class="bw-badge">Derived</div>
  </div>
  <div class="callout-box blue">
    <div class="callout-box-header"><i class="ti ti-bulb callout-box-icon"></i><div class="callout-box-title">Every task here exists because a specific failure taught it</div></div>
    <div class="callout-box-body">These {len(tasks)} preventive tasks were extracted from the prevent-recurrence line on every diagnostic result across the series. Each one links back to the fault it prevents, so when someone asks why a task is on the PM sheet, the answer is one tap away. <strong>Set the interval for your plant, tick what you already do, and export the rest as the starting point for a PM program that is traceable to failure modes.</strong> Intervals shown are suggestions from the wording; the equipment manufacturer and your history govern.</div>
  </div>
  <div class="pm-tools">
    <input class="pm-search" id="pm-search" placeholder="filter tasks: grease, alignment, breather, VFD..." oninput="render()">
    <select class="pm-int" id="pm-intfilter" style="width:auto" onchange="render()"><option value="">All intervals</option>{''.join(f'<option>{i}</option>' for i in INTERVALS)}</select>
    <button class="pm-btn" onclick="exportCSV()"><i class="ti ti-download"></i> CSV</button>
    <button class="pm-btn" onclick="window.print()"><i class="ti ti-printer"></i> Print</button>
    <button class="pm-btn" onclick="if(confirm('Clear all ticks and interval edits?')){{localStorage.removeItem('bw_pm');state={{}};render();}}">Reset</button>
  </div>
  <div class="bw-tabs">{tabs_html}</div>
  {panels_html}
  <div class="bw-footer">builtwrightapp.com &nbsp;·&nbsp; pm task library &nbsp;·&nbsp; derived from {sum(1 for f,v in MODS.items() if v[3])} diagnostic modules</div>
</div>
<script>
const TASKS={pm_data};
const COMP={comp_ids};
const INTERVALS={json.dumps(INTERVALS)};
let state={{}}; try{{state=JSON.parse(localStorage.getItem('bw_pm')||'{{}}');}}catch(e){{}}
function save(){{ try{{localStorage.setItem('bw_pm',JSON.stringify(state));}}catch(e){{}} }}
function switchTab(tab){{document.querySelectorAll('.bw-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.bw-panel').forEach(p=>p.classList.remove('active'));const b=document.querySelector(`[onclick="switchTab('${{tab}}')"]`);if(b)b.classList.add('active');const p=document.getElementById('panel-'+tab);if(p)p.classList.add('active');}}
function render(){{
  const q=(document.getElementById('pm-search').value||'').toLowerCase(), fi=document.getElementById('pm-intfilter').value;
  for (const [comp,cid] of Object.entries(COMP)){{
    const el=document.getElementById('pm-list-'+cid); let n=0;
    el.innerHTML=TASKS.filter(t=>t.comp===comp).map(t=>{{
      const st=state[t.id]||{{}}; const intv=st.interval||t.interval;
      if(q && !t.text.toLowerCase().includes(q) && !t.src.some(s=>s.label.toLowerCase().includes(q))) return '';
      if(fi && intv!==fi) return '';
      n++;
      const srcs=t.src.map(s=>`<a href="${{s.file}}#${{s.tab}}">${{s.num}} ${{s.mod}}</a> › ${{s.label}}`).join(' &nbsp;|&nbsp; ');
      return `<div class="pm-row ${{st.done?'done':''}}"><input type="checkbox" ${{st.done?'checked':''}} onchange="state[${{t.id}}]=Object.assign(state[${{t.id}}]||{{}},{{done:this.checked}});save();render()"><div><div class="pm-text">${{t.text}}</div><div class="pm-src">Prevents: ${{srcs}}</div></div><select class="pm-int" onchange="state[${{t.id}}]=Object.assign(state[${{t.id}}]||{{}},{{interval:this.value}});save()">${{INTERVALS.map(i=>`<option ${{i===intv?'selected':''}}>${{i}}</option>`).join('')}}</select></div>`;
    }}).join('') || '<div class="pm-count">no tasks match</div>';
    const lbl=document.querySelector('#panel-'+cid+' .bw-section-label'); if(lbl) lbl.textContent=`${{comp}}: ${{n}} of ${{TASKS.filter(t=>t.comp===comp).length}} tasks shown`;
  }}
}}
function exportCSV(){{
  const rows=[['Component','Task','Interval','Done','Prevents (module > fault)']];
  TASKS.forEach(t=>{{const st=state[t.id]||{{}}; rows.push([t.comp,t.text,st.interval||t.interval,st.done?'yes':'',t.src.map(s=>s.num+' '+s.mod+' > '+s.label).join('; ')]);}});
  const csv=rows.map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\\n');
  const a=document.createElement('a'); a.href='data:text/csv;charset=utf-8,'+encodeURIComponent('\\ufeff'+csv); a.download='builtwright_pm_tasks.csv'; a.click();
}}
render();
(function(){{function go(){{var h=location.hash.replace('#','');if(h&&document.getElementById('panel-'+h))switchTab(h);}}go();window.addEventListener('hashchange',go);}})();
</script>
</body>
</html>
"""
open('builtwright_pm_library_v1.html','w').write(pm_html)
print('PM library:',len(tasks),'tasks across',len(comps),'components')

# ---------------- 2. GLOBAL SEARCH ----------------
index=[]
for f,(num,name,comp,tree) in MODS.items():
    s=open(f).read()
    tabnames=dict(re.findall(r"switchTab\('([a-z]+)'\)\"[^>]*>([^<]+)<",s))
    # split into panels
    parts=re.split(r'<div id="panel-([a-z]+)" class="bw-panel',s)
    # parts: [pre, id1, body1, id2, body2...]
    for k in range(1,len(parts),2):
        tab,body=parts[k],parts[k+1]
        tn=tabnames.get(tab,tab)
        for cls,kind in [('type-card-name','card'),('sym-card-label','symbol'),('chain-label','component'),('bearing-card-name','card'),('info-block-title','section'),('lube-block-title','section'),('callout-box-title','callout'),('bw-section-label','section'),('calc-title','calculator'),('comp-detail-name','card')]:
            for m in re.finditer(r'class="'+cls+r'"[^>]*>(.*?)</div>',body,re.S):
                txt=strip_tags(m.group(1))
                if 3<len(txt)<120: index.append({'m':num,'n':name,'f':f,'t':tab,'tn':tn,'k':kind,'x':txt})
        for m in re.finditer(r'<th>([^<]{3,60})</th>',body):
            pass
        # table first cells as rows (reference tables)
        if f.endswith('reference_v1.html'):
            for m in re.finditer(r'<tr><td>([^<]{2,60})</td>',body): index.append({'m':num,'n':name,'f':f,'t':tab,'tn':tn,'k':'table row','x':strip_tags(m.group(1))})
    # tree results and questions
    if tree:
        for m in re.finditer(r"label: ?'((?:[^'\\]|\\.)*)', text: ?'((?:[^'\\]|\\.)*)'",s):
            index.append({'m':num,'n':name,'f':f,'t':tree,'tn':tabnames.get(tree,tree),'k':'diagnosis','x':unesc(m.group(1)),'d':unesc(m.group(2))[:140]})
    # quiz stems
    blk=s[s.find('const SELFCHECK'):]; blk=blk[:blk.find('\n};')] if 'const SELFCHECK' in s else ''
    for m in re.finditer(r"\['((?:[^'\\]|\\.)*)', \[",blk):
        index.append({'m':num,'n':name,'f':f,'t':'selfcheck','tn':'Self-Check','k':'question','x':unesc(m.group(1))})
# hub symptoms and routes
hs=open(HUB).read()
for m in re.finditer(r"title:'((?:[^'\\]|\\.)*)', text:'((?:[^'\\]|\\.)*)'",hs):
    index.append({'m':'00','n':'Diagnose Hub','f':HUB,'t':'','tn':'','k':'route','x':unesc(m.group(1)),'d':unesc(m.group(2))[:140]})
# dedupe
seen=set(); idx2=[]
for e in index:
    key=(e['f'],e['t'],e['x'].lower())
    if key in seen: continue
    seen.add(key); idx2.append(e)
index=idx2
KIND_RANK={'card':0,'component':0,'symbol':1,'diagnosis':1,'route':1,'section':2,'calculator':1,'table row':2,'callout':2,'question':3}

styles=open('/home/claude/pt_styles.html').read().replace('BuiltWright: Power Transmission: Module 08','BuiltWright: Search')
styles=styles.replace('</style>',"""
  .s-in { width:100%; font-family:'Share Tech Mono',monospace; font-size:14px; letter-spacing:1px; background:#242420; border:1px solid #3a3a36; border-radius:8px; padding:12px 14px; color:#e8e6df; outline:none; margin-bottom:0.75rem; }
  .s-in:focus { border-color:#BA7517; }
  .s-kinds { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:1rem; }
  .s-kind { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; padding:4px 8px; border-radius:3px; border:0.5px solid #3a3a36; background:#242420; color:#888780; cursor:pointer; }
  .s-kind.on { border-color:#BA7517; color:#EF9F27; background:#2a1f08; }
  .s-hit { display:block; background:#2e2e2a; border:0.5px solid #3a3a36; border-radius:8px; padding:0.7rem 0.9rem; margin-bottom:6px; text-decoration:none; }
  .s-hit:hover { border-color:#BA7517; }
  .s-x { font-size:14px; font-weight:600; color:#f0ede4; }
  .s-x mark { background:#2a1f08; color:#EF9F27; }
  .s-d { font-size:12px; color:#888780; margin-top:2px; line-height:1.4; }
  .s-path { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#BA7517; margin-top:4px; }
  .s-n { font-family:'Share Tech Mono',monospace; font-size:10px; letter-spacing:1px; color:#5F5E5A; text-transform:uppercase; margin-bottom:0.5rem; }
</style>""")
kinds=sorted(set(e['k'] for e in index), key=lambda k:KIND_RANK.get(k,9))
search_html = styles + f"""</head>
<body>
<div class="bw-wrap">
  <div class="bw-header">
    <div><div class="bw-logo"><a href="builtwright_diagnose_hub_v1.html">BuiltWright</a></div><div class="bw-title">Search</div></div>
    <div class="bw-badge">{len(index)} entries</div>
  </div>
  <input class="s-in" id="s-in" placeholder="search every module: cavitation, C3, soft foot, 5/2 valve, fluting..." oninput="go()" autofocus>
  <div class="s-kinds" id="s-kinds">{''.join(f'<span class="s-kind on" data-k="{k}" onclick="this.classList.toggle(\'on\');go()">{k}</span>' for k in kinds)}</div>
  <div class="s-n" id="s-n"></div>
  <div id="s-out"></div>
  <div class="bw-footer">builtwrightapp.com &nbsp;·&nbsp; search &nbsp;·&nbsp; index built from all modules</div>
</div>
<script>
const IDX={json.dumps(index,ensure_ascii=False)};
const RANK={json.dumps(KIND_RANK)};
function esc(s){{return s.replace(/[&<>]/g,c=>({{'&':'&amp;','<':'&lt;','>':'&gt;'}}[c]));}}
function hl(s,q){{ if(!q) return esc(s); const i=s.toLowerCase().indexOf(q); if(i<0) return esc(s); return esc(s.slice(0,i))+'<mark>'+esc(s.slice(i,i+q.length))+'</mark>'+esc(s.slice(i+q.length)); }}
function go(){{
  const q=document.getElementById('s-in').value.trim().toLowerCase();
  const on=new Set([...document.querySelectorAll('.s-kind.on')].map(e=>e.dataset.k));
  const out=document.getElementById('s-out'); const n=document.getElementById('s-n');
  if(q.length<2){{out.innerHTML='';n.textContent='type at least two characters';return;}}
  const terms=q.split(/\\s+/).filter(Boolean);
  let hits=IDX.filter(e=>on.has(e.k)).map(e=>{{
    const hay=(e.x+' '+(e.d||'')).toLowerCase();
    if(!terms.every(t=>hay.includes(t))) return null;
    let sc=RANK[e.k]||5; if(e.x.toLowerCase().startsWith(q)) sc-=2; if(e.x.toLowerCase().includes(q)) sc-=1;
    return [sc,e];
  }}).filter(Boolean).sort((a,b)=>a[0]-b[0]).slice(0,60);
  n.textContent=hits.length+' results'+(hits.length===60?' (showing first 60)':'');
  out.innerHTML=hits.map(([_,e])=>`<a class="s-hit" href="${{e.f}}${{e.t?'#'+e.t:''}}"><div class="s-x">${{hl(e.x,q)}}</div>${{e.d?`<div class="s-d">${{hl(e.d,q)}}</div>`:''}}<div class="s-path">${{e.m!=='00'?e.m+' ':''}}${{e.n}}${{e.tn?' › '+e.tn:''}} · ${{e.k}}</div></a>`).join('');
}}
go();
</script>
</body>
</html>
"""
open('builtwright_search_v1.html','w').write(search_html)
print('Search index:',len(index),'entries; kinds:',kinds)

# ---------------- 3. INTEGRITY CHECK + PRINT CSS ----------------
PRINT_CSS="""
  @media print {
    body { background:#fff; color:#000; padding:0; }
    .bw-tabs, .ref-search, .tree-back, .sc-score, .adv-chevron, .bw-badge { display:none !important; }
    .bw-panel { display:none; } .bw-panel.active { display:block; }
    .bw-wrap { max-width:100%; }
    .bw-title, .comp-detail-name, .info-block-title, .type-card-name, .sym-card-label, .tree-q-text, .tree-result-text, .route-title, .sc-stem, .callout-box-title, .field-tip strong, .tree-prevent strong, .bw-section-label, .family-label, .ref-table th { color:#000 !important; }
    .comp-detail-body, .info-block-body, .callout-box-body, .tree-result-sub, .tree-prevent, .field-tip div, .sc-why, .ref-table td, .comp-detail-tips li, .info-block-tips li, .callout-tips li, .sym-detail-body, .adv-body p, .route-text, .type-card-sub, .sym-card-sub, .tree-q-hint, .ref-note, .chain-label, .chain-sub { color:#222 !important; }
    .comp-detail, .info-block, .callout-box, .type-card, .sym-card, .tree-q, .tree-result, .field-tip, .adv-wrap, .adv-body, .adv-toggle, .chain-wrap, .chain-box, .sc-q, .sym-detail, .calc, .route, .dir-row, .safety-strip { background:#fff !important; border-color:#999 !important; box-shadow:none !important; }
    .adv-body { display:block !important; }
    .tree-btn, .sc-opt, .pm-btn { border:0.5px solid #999; background:#fff; color:#000; }
    .progress-bar { display:none; }
    a { color:#000; text-decoration:none; }
    .bw-logo a::after { content:"  builtwrightapp.com"; color:#666; }
    .bw-header { border-bottom:1px solid #000; }
    .comp-detail, .info-block, .callout-box, .tree-q, .sc-q { page-break-inside: avoid; }
  }
"""
files=sorted(glob.glob('builtwright_*_v1.html'))
panels={f:set(re.findall(r'id="panel-([a-z0-9]+)"',open(f).read())) for f in files}
problems=[]
for f in files:
    s=open(f).read()
    if '@media print' not in s:
        s=s.replace('</style>',PRINT_CSS+'</style>',1); open(f,'w').write(s)
    # links
    for m in re.finditer(r'href="(builtwright_[a-z_0-9]+\.html)(?:#([a-z0-9]+))?"',s):
        tf,tab=m.group(1),m.group(2)
        if tf not in panels: problems.append((f,'missing file',tf)); continue
        if tab and tab not in panels[tf]: problems.append((f,'missing tab',tf+'#'+tab))
    # JS-built links in hub: file+'#'+tab from registry validated separately
    # onclick handlers
    fns=set(re.findall(r'onclick="([a-zA-Z_][a-zA-Z0-9_]*)\(',s))
    defined=set(re.findall(r'function ([a-zA-Z_][a-zA-Z0-9_]*)\(',s))
    for fn in fns:
        if fn not in defined and fn not in ('window','document','confirm','alert'): problems.append((f,'undefined onclick',fn))
# hub registry validation
hs=open(HUB).read()
for m in re.finditer(r"file:'([^']+)',\s*tabs:\{([^}]*)\}",hs):
    tf=m.group(1); tabs=re.findall(r"([a-z]+):'",m.group(2))
    for t in tabs:
        if tf not in panels: problems.append((HUB,'registry file',tf))
        elif t not in panels[tf]: problems.append((HUB,'registry tab',tf+'#'+t))
print('Integrity problems:',problems or 'none')
print('Print CSS added to',len(files),'files')

# ---------------- 4. PWA ----------------
from PIL import Image, ImageDraw
for size in (192,512):
    im=Image.new('RGB',(size,size),'#1a1a18'); d=ImageDraw.Draw(im)
    m=size*0.14; d.rounded_rectangle([m,m,size-m,size-m],radius=size*0.08,outline='#BA7517',width=max(2,int(size*0.025)))
    # simple wrench-ish glyph: bold diagonal bar with a notch
    w=int(size*0.13); cx,cy=size/2,size/2
    d.line([(size*0.3,size*0.7),(size*0.7,size*0.3)],fill='#BA7517',width=w)
    d.ellipse([size*0.62,size*0.22,size*0.78,size*0.38],outline='#BA7517',width=int(w*0.6))
    d.rectangle([size*0.66,size*0.2,size*0.74,size*0.3],fill='#1a1a18')
    d.ellipse([size*0.22,size*0.62,size*0.38,size*0.78],fill='#BA7517')
    im.save(f'builtwright_icon_{size}.png')
manifest={"name":"BuiltWright","short_name":"BuiltWright","description":"Industrial trades education and troubleshooting","start_url":"builtwright_diagnose_hub_v1.html","scope":"./","display":"standalone","background_color":"#1a1a18","theme_color":"#1a1a18","icons":[{"src":"builtwright_icon_192.png","sizes":"192x192","type":"image/png"},{"src":"builtwright_icon_512.png","sizes":"512x512","type":"image/png","purpose":"any maskable"}]}
open('manifest.json','w').write(json.dumps(manifest,indent=2))
allfiles=sorted(glob.glob('builtwright_*_v1.html'))+['manifest.json','builtwright_icon_192.png','builtwright_icon_512.png']
sw=f"""// BuiltWright service worker: cache-first for the app shell, runtime cache for fonts and icon CSS
const CACHE='builtwright-v7-{len(allfiles)}';
const SHELL={json.dumps(allfiles)};
self.addEventListener('install',e=>{{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));}});
self.addEventListener('activate',e=>{{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));}});
self.addEventListener('fetch',e=>{{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request,{{ignoreSearch:true}}).then(r=>r||fetch(e.request).then(res=>{{
    if(res && res.ok && (u.origin===location.origin || /fonts\\.g|cdn\\.jsdelivr/.test(u.host))){{ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); }}
    return res;
  }}).catch(()=>caches.match('builtwright_diagnose_hub_v1.html'))));
}});
"""
open('sw.js','w').write(sw)
HEAD_ADD='<link rel="manifest" href="manifest.json">\n<meta name="theme-color" content="#1a1a18">\n<link rel="apple-touch-icon" href="builtwright_icon_192.png">\n<meta name="apple-mobile-web-app-capable" content="yes">\n'
SW_REG="<script>if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}</script>\n"
for f in sorted(glob.glob('builtwright_*_v1.html')):
    s=open(f).read()
    if 'rel="manifest"' not in s: s=s.replace('<link rel="preconnect"',HEAD_ADD+'<link rel="preconnect"',1)
    if 'serviceWorker' not in s: s=s.replace('</body>',SW_REG+'</body>',1)
    open(f,'w').write(s)
print('PWA: manifest, sw.js, icons, and head tags added to',len(allfiles)-3,'files')
pass  # README maintained by pass3.py

