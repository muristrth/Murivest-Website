// Static SEO scan of src/app page.tsx files (read-only). Usage: node scripts/audit-seo-static.mjs [out.csv]
// Heuristic (regex) - verifies metadata presence, canonical inheritance from layouts, h1 count, JSON-LD, noindex.
import fs from 'fs'; import path from 'path';
const app='src/app'; const rows=[];
const read=f=>fs.existsSync(f)?fs.readFileSync(f,'utf8'):'';
const layoutCanon=dir=>{ // nearest ancestor layout alternates.canonical (inherited when page has no alternates)
  let d=dir; while(true){ const l=read(path.join(d,'layout.tsx')); const m=l.match(/alternates\s*:\s*\{[^}]*?canonical\s*:\s*["'`]([^"'`]+)["'`]/s); if(m) return {c:m[1],from:path.join(d,'layout.tsx')}; if(path.normalize(d)===path.normalize(app)) return null; d=path.dirname(d);} };
const hasLayoutLangs=dir=>{let d=dir;while(true){const l=read(path.join(d,'layout.tsx')); if(/alternates\s*:\s*\{[\s\S]*?languages\s*:/.test(l)) return true; if(path.normalize(d)===path.normalize(app)) return false; d=path.dirname(d);}};
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); if(e.isDirectory()) walk(p); else if(e.name==='page.tsx'){
  const s=read(p); const rel=path.relative(app,d).split(path.sep).join('/'); const route='/'+rel;
  const client=/^\s*['"]use client['"]/m.test(s.slice(0,300));
  const hasMeta=/export\s+(const\s+metadata|async\s+function\s+generateMetadata|function\s+generateMetadata)/.test(s);
  const title=/title\s*:/.test(s)&&hasMeta, desc=/description\s*:/.test(s)&&hasMeta;
  const ownAlt=/alternates\s*:/.test(s)&&hasMeta; const ownCanon=/canonical\s*:/.test(s)&&hasMeta;
  const lc=layoutCanon(d); const eff= ownCanon?'own': (ownAlt?'alt-no-canonical': (lc?`INHERITED:${lc.c}`:'none'));
  const noindex=/index\s*:\s*false|noindex/i.test(s);
  rows.push({route,client,hasMeta,title,desc,eff,langsInherited:!ownAlt&&hasLayoutLangs(d),h1:(s.match(/<h1[\s>]/g)||[]).length,jsonld:/application\/ld\+json|@context/.test(s),noindex,dynamic:/\[/.test(rel)});
}}})(app);
const out=process.argv[2]||'audit/data/seo-static.csv';
const cols=Object.keys(rows[0]); fs.writeFileSync(out,[cols.join(','),...rows.map(r=>cols.map(c=>JSON.stringify(r[c])).join(','))].join('\n'));
const n=rows.length, pub=rows.filter(r=>!/^\/(admin|api|portal|studio)/.test(r.route));
const c=(f,a=pub)=>a.filter(f).length;
console.log(`pages=${n} public-ish=${pub.length}`);
console.log(`no-metadata-export (server pages)=${c(r=>!r.hasMeta&&!r.client)}, client-pages-without-metadata=${c(r=>!r.hasMeta&&r.client)}`);
console.log(`canonical: own=${c(r=>r.eff==='own')} inherited-from-layout=${c(r=>r.eff.startsWith('INHERITED'))} none=${c(r=>r.eff==='none')} alt-no-canonical=${c(r=>r.eff==='alt-no-canonical')}`);
console.log(`h1: zero=${c(r=>r.h1===0)} multiple=${c(r=>r.h1>1)}`);
console.log(`hreflang languages inherited by children (layout-level)=${c(r=>r.langsInherited)}`);
const by={}; pub.filter(r=>r.eff.startsWith('INHERITED')).forEach(r=>{by[r.eff]=(by[r.eff]||0)+1}); console.log('inherited canonicals by target:',JSON.stringify(by));

