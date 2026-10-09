// Nav integrity check v2.1 (audit 2026-10-09).
// Classifies every internal href found in header/footer/menu components:
//   OK                  exact static page.tsx route
//   OK-QUERY-IGNORED    route exists but the page never reads the query string (e.g. ?assetType=) -> filter is non-functional (warning)
//   REDIRECT            intentional next.config.js redirect whose destination resolves (reported, not a failure)
//   DYNAMIC-OK          dynamic route verified against a known local data source (researchData keys, Singapore district slugs)
//   DYNAMIC-UNVERIFIED  matches a dynamic route whose data lives in a CMS/DB: needs runtime validation; NOT counted as pass or fail
//   EXCEPTION           listed in scripts/nav-exceptions.json with a documented reason (reported, not a failure)
//   BROKEN              no route / redirect, or a dynamic route whose data key does not exist (page calls notFound()) -> FAIL
// Usage: node scripts/check-nav-links.mjs [--json out.json] [--strict]   (--strict also fails on DYNAMIC-UNVERIFIED and OK-QUERY-IGNORED)
// Exit 1 if any BROKEN. Nothing is suppressed: exceptions must be written in scripts/nav-exceptions.json ({href,reason,owner}).
import fs from 'fs'; import path from 'path';
const args=process.argv.slice(2); const strict=args.includes('--strict'); const jsonOut=args.includes('--json')?args[args.indexOf('--json')+1]:null;
const app='src/app'; const compDir='src/components/layout';
const files=fs.readdirSync(compDir).filter(f=>/(header|footer|menu)\.tsx$/i.test(f)).map(f=>path.join(compDir,f));
const sgHeader='src/app/singapore/(components)/shared/SingaporeHeader.tsx'; if(fs.existsSync(sgHeader)) files.push(sgHeader);
const routes=[]; (function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); if(e.isDirectory())walk(p); else if(e.name==='page.tsx'){const r='/'+path.relative(app,d).split(path.sep).join('/'); routes.push({route:(r==='/.'||r==='/')?'/':r.replace(/\/\([^/]+\)/g,''),file:p});}}})(app);
const toRx=r=>new RegExp('^'+(r==='/'?'/':r.split('/').filter(Boolean).map(s=>/^\[\[\.\.\./.test(s)?'(?:/.*)?':/^\[\.\.\./.test(s)?'/.+':/^\[/.test(s)?'/[^/]+':'/'+s.replace(/[.*+?^${}()|\\]/g,'\\$&')).join(''))+'$');
routes.forEach(r=>{r.dynamic=/\[/.test(r.route); r.rx=toRx(r.route);});
const cfg=fs.readFileSync('next.config.js','utf8'); const redirects=[];
for(const m of cfg.matchAll(/source:\s*'(\/[^']*)'[\s\S]*?destination:\s*'([^']*)'/g)){ if(m[1]==='/:path*') continue; redirects.push({source:m[1].replace(/\/:path\*$/,''),destination:m[2].replace(/\/:path\*$/,''),wild:/:path\*$/.test(m[1])}); }
const rdFile='src/lib/researchData.ts';
const researchKeys=new Set(fs.existsSync(rdFile)?[...fs.readFileSync(rdFile,'utf8').matchAll(/^\s{2}['"]([a-z0-9][a-z0-9-]*)['"]\s*:\s*\{/gm)].map(m=>m[1]):[]);
const sgFile='src/app/singapore/(components)/data/singapore-market-data.ts';
const sgSlugs=new Set(fs.existsSync(sgFile)?[...fs.readFileSync(sgFile,'utf8').matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m=>m[1]):[]);
const exceptions=fs.existsSync('scripts/nav-exceptions.json')?JSON.parse(fs.readFileSync('scripts/nav-exceptions.json','utf8')):[];
const dynamicSource=r=>{const s=fs.readFileSync(r.file,'utf8'); if(/researchData/.test(s)) return 'research-data'; if(/singapore-market-data/.test(s)&&/DISTRICTS/.test(s)) return 'sg-district'; if(/sanity|client\.fetch/i.test(s)) return 'cms'; if(/supabase/i.test(s)) return 'db'; return 'unknown';};
function classifyPath(h){
  const ex=exceptions.find(e=>e.href===h);
  if(routes.some(r=>!r.dynamic&&r.route===h)) return {status:'OK'};
  const red=redirects.find(r=>r.source===h||(r.wild&&h.startsWith(r.source+'/')));
  if(red){ const okd=routes.some(r=>r.rx.test(red.destination)); return okd?{status:'REDIRECT',to:red.destination}:{status:'BROKEN',note:`redirect to ${red.destination} does not resolve`}; }
  const dyn=routes.filter(r=>r.dynamic&&r.rx.test(h));
  if(dyn.length){ const r=dyn[0]; const src=dynamicSource(r); const key=h.split('/').pop();
    if(src==='research-data'){ if(researchKeys.has(key)) return {status:'DYNAMIC-OK',via:r.route}; if(ex) return {status:'EXCEPTION',reason:ex.reason}; return {status:'BROKEN',note:`${r.route}: no researchData key "${key}" (page calls notFound())`}; }
    if(src==='sg-district'){ if(sgSlugs.has(key)) return {status:'DYNAMIC-OK',via:r.route}; if(ex) return {status:'EXCEPTION',reason:ex.reason}; return {status:'BROKEN',note:`${r.route}: no district slug "${key}"`}; }
    if(ex) return {status:'EXCEPTION',reason:ex.reason};
    return {status:'DYNAMIC-UNVERIFIED',via:r.route,source:src};
  }
  if(ex) return {status:'EXCEPTION',reason:ex.reason};
  return {status:'BROKEN',note:'no matching route'};
}
function classify(h0){
  const h=h0.split('?')[0]; const base=classifyPath(h);
  if(h0.includes('?')&&base.status==='OK'){ const r=routes.find(x=>!x.dynamic&&x.route===h); if(!/searchParams|useSearchParams/.test(fs.readFileSync(r.file,'utf8'))) return {status:'OK-QUERY-IGNORED',note:'page does not read the query string'}; }
  return base;
}
const results=[]; const tally={};
for(const f of files){
  const src=fs.readFileSync(f,'utf8'); const seen=new Map();
  for(const line of src.split(/\r?\n/)){ const lab=(line.match(/label:\s*['"]([^'"]+)['"]/)||[])[1];
    for(const m of line.matchAll(/\b(?:href|to)\s*[=:]\s*["'{`]*\s*["']?(\/[^"'`$ }#]*)/g)){ const h=m[1].replace(/(.)\/$/,'$1'); if(!seen.has(h)) seen.set(h,lab||''); } }
  console.log(`\n${path.basename(f)}: ${seen.size} unique internal links`);
  for(const [h,label] of seen){ const c=classify(h); results.push({file:path.basename(f),href:h,label,...c}); tally[c.status]=(tally[c.status]||0)+1;
    if(c.status!=='OK') console.log(`   ${c.status.padEnd(18)} ${h}${label?`  [${label}]`:''}${c.to?` -> ${c.to}`:''}${c.note?`  (${c.note})`:''}${c.via?`  via ${c.via}${c.source?` (${c.source})`:''}`:''}${c.reason?`  reason: ${c.reason}`:''}`); }
}
console.log('\nSummary:',JSON.stringify(tally));
if(jsonOut) fs.writeFileSync(jsonOut,JSON.stringify(results,null,1));
const soft=(tally['DYNAMIC-UNVERIFIED']||0)+(tally['OK-QUERY-IGNORED']||0);
const fail=(tally.BROKEN||0)+(strict?soft:0);
console.log(fail?`FAIL: ${tally.BROKEN||0} broken${strict?`, ${soft} unverified/ignored-query (strict)`:''}`:`PASS (note: ${soft} links need runtime/CMS validation or have non-functional filters)`);
process.exit(fail?1:0);
