const fs = require('fs');
const p = 'C:\\xampp\\htdocs\\Murivest Website\\Murivest-Website\\src\\app\\united-arab-emirates\\_content\\uae-pages.ts';
let s = fs.readFileSync(p, 'utf8');
const faqsJson = JSON.stringify([
  { question: 'What is the institutional investment case?', answer: 'This page explains the market, asset class or strategy through capital preservation, income durability, liquidity and exit optionality.' },
  { question: 'What risks should sophisticated investors underwrite?', answer: 'Murivest evaluates supply, tenant quality, leverage, counterparty and exit route risk before capital deployment.' },
  { question: 'How does this support family office objectives?', answer: 'UAE commercial real estate can support jurisdiction diversification, inflation protection and long-hold real asset ownership.' },
  { question: 'When should an investor contact Murivest?', answer: 'Contact Murivest once mandate size, target sectors, hold period and risk parameters are defined.' }
]);
function findMatching(text, start) {
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < text.length; i += 1) {
    const ch = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') { inString = true; continue; }
    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}
let out = '';
let cursor = 0;
while (true) {
  const key = '"faqs":';
  const idx = s.indexOf(key, cursor);
  if (idx === -1) { out += s.slice(cursor); break; }
  out += s.slice(cursor, idx + key.length);
  let i = idx + key.length;
  while (/\s/.test(s[i])) i += 1;
  if (s[i] === '[') {
    const end = findMatching(s, i);
    if (end === -1) throw new Error('No matching faqs array');
    out += faqsJson;
    cursor = end + 1;
  } else {
    out += s[i];
    cursor = i + 1;
  }
}
s = out;
s = s.replace(/("united-arab-emirates\/contact".*?"description":")[^"]*(")/, '$1Contact gives qualified investors a discreet route to discuss UAE commercial real estate allocation, mandate fit and execution readiness with Murivest.$2');
s = s.replace(/("united-arab-emirates\/abu-dhabi\/saadiyat-island".*?"eyebrow":")[^"]*(")/, '$1District$2');
s = s.replace(/("united-arab-emirates\/abu-dhabi\/saadiyat-island".*?"description":")[^"]*(")/, '$1Saadiyat Island is evaluated as an Abu Dhabi commercial district with distinct institutional demand, liquidity characteristics and long-duration capital relevance.$2');
s = s.replace(/("united-arab-emirates\/abu-dhabi\/yas-island".*?"eyebrow":")[^"]*(")/, '$1District$2');
s = s.replace(/("united-arab-emirates\/abu-dhabi\/yas-island".*?"description":")[^"]*(")/, '$1Yas Island is evaluated as an Abu Dhabi commercial district with distinct institutional demand, liquidity characteristics and long-duration capital relevance.$2');
s = s.replace(/"title":"Difc"/g, '"title":"DIFC"');
s = s.replace(/"title":"Uae/g, '"title":"UAE');
fs.writeFileSync(p, s);
