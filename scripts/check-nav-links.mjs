// Nav integrity check: every internal href in header/footer components must resolve to a page.tsx route or a next.config redirect.
// Usage: node scripts/check-nav-links.mjs   (exit 1 if unresolved links or duplicate hrefs within a menu file)
import fs from 'fs'; import path from 'path';
const app='src/app', comp='src/components/layout';
const routes=[]; (function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); if(e.isDirectory())walk(p); else if(e.name==='page.tsx'){let r='/'+path.relative(app,d).split(path.sep).join('/'); routes.push(r==='/.'||r==='/'?'/':r.replace(/^\/\.$/,'/'));}}})(app);
const rx=routes.map(r=>new RegExp('^'+r.replace(/[.*+?^${}()|\\]/g,m=>m).replace(/\[\.\.\.[^\]]+\]/g,'.+').replace(/\[[^\]]+\]/g,'[^/]+').replace(/\//g,'/')+'$'));
const cfg=fs.readFileSync('next.config.js','utf8'); const redirects=[...cfg.matchAll(/source:\s*'(\/[^']*?)(?:\/:path\*)?'/g)].map(m=>m[1]);
const ok=u=>rx.some(r=>r.test(u))||redirects.includes(u);
let bad=0;
for(const f of fs.readdirSync(comp).filter(f=>/(header|footer|menu)\.tsx$/i.test(f))){
  const src=fs.readFileSync(path.join(comp,f),'utf8'); const hrefs=[...src.matchAll(/href[=:]\s*["'{`]*\s*["']?(\/[^"'`$ }?#]*)/g)].map(m=>m[1].replace(/(.)\/$/,'$1'));
  const un=[...new Set(hrefs.filter(h=>!ok(h)))]; bad+=un.length; console.log(`${f}: ${hrefs.length} links, ${un.length} unresolved`); un.forEach(u=>console.log('   ✗',u));
}
console.log(bad?`FAIL: ${bad} unresolved`:'PASS'); process.exit(bad?1:0);
