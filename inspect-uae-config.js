const fs = require('fs');
const s = fs.readFileSync('C:\\xampp\\htdocs\\Murivest Website\\Murivest-Website\\src\\app\\united-arab-emirates\\_content\\uae-pages.ts', 'utf8');
const start = s.indexOf('{', s.indexOf('uaePageConfigs'));
const obj = s.slice(start);
const pos = 2801;
console.log(obj.slice(Math.max(0, pos - 200), pos + 200));
