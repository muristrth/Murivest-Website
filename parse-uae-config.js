const fs = require('fs');
const s = fs.readFileSync('C:\\xampp\\htdocs\\Murivest Website\\Murivest-Website\\src\\app\\united-arab-emirates\\_content\\uae-pages.ts', 'utf8');
const start = s.indexOf('{', s.indexOf('uaePageConfigs'));
const obj = s.slice(start);
try {
  JSON.parse(obj);
  console.log('json ok');
} catch (e) {
  console.log(e.message);
  console.log(s.slice(Math.max(0, e.position - 80), e.position + 80));
}
