// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C] = input.split(' ').map(item => Number(item));
var maiorAB = (A + B + abs(a - b)) / 2;

console.log(maiorAB + ' eh o maior');