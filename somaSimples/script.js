// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines.shift());
var B = Number(lines.shift());

let soma = A + B;
console.log('SOMA = ' + soma);