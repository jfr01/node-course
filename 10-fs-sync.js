const { readFileSync, writeFileSync, read } = require('fs');
console.log('start')
const first = readFileSync('Tutorial/content/first.txt', 'utf8');
const second = readFileSync('Tutorial/content/second.txt', 'utf8');

//console.log(first, second)

writeFileSync('Tutorial/content/result-sync.txt',
 `Here is the result ${first}, ${second}`, {flag: 'a'})
console.log('done with this test')
console.log('starting the next one')