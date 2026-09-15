// BuiltWright service worker: cache-first for the app shell, runtime cache for fonts and icon CSS
const CACHE='builtwright-v8-1';
const SHELL=["builtwright_bearing_module_v1.html", "builtwright_clutches_brakes_v1.html", "builtwright_compressors_v1.html", "builtwright_conveyors_v1.html", "builtwright_coupling_alignment_v1.html", "builtwright_curriculum_map_v1.html", "builtwright_diagnose_hub_v1.html", "builtwright_fans_v1.html", "builtwright_gearboxes_v1.html", "builtwright_hydraulics_v1.html", "builtwright_installation_v1.html", "builtwright_lubrication_v1.html", "builtwright_manager_guide_v1.html", "builtwright_motors_v1.html", "builtwright_pm_library_v1.html", "builtwright_pneumatics_v1.html", "builtwright_pocket_cards_v1.html", "builtwright_power_transmission_v1.html", "builtwright_precision_measurement_v1.html", "builtwright_process_valves_v1.html", "builtwright_pumps_combined_v1.html", "builtwright_reference_v1.html", "builtwright_root_cause_v1.html", "builtwright_safeguarding_v1.html", "builtwright_seals_gaskets_v1.html", "builtwright_search_v1.html", "builtwright_vibration_v1.html", "module.html", "bw.css", "bw-renderer.js", "manifest.json", "builtwright_icon_192.png", "builtwright_icon_512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    if(res && res.ok && (u.origin===location.origin || /fonts\.g|cdn\.jsdelivr/.test(u.host))){ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); }
    return res;
  }).catch(()=>caches.match('builtwright_diagnose_hub_v1.html'))));
});
