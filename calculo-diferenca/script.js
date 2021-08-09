// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines.shift());
var B = Number(lines.shift());
var C = Number(lines.shift());

var diferenca = (A * B - C * D);
console.log('DIFERENCA = ' + diferenca);