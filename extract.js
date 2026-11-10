const fs = require('fs');
const html = fs.readFileSync('shiningstar.html', 'utf-8');

const regex = /<h3>(.*?)<\/h3>|₹\s*[\d,]+|\b\d+\s+Days\b/gi;
const matches = html.match(regex);
console.log(matches ? matches : 'No matches found');
