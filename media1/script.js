// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines.shift());
var B = Number(lines.shift());

var media = (A * 3.5 + B * 7.5) / 11.0;
console.log('MEDIA = ' + media.toFixed(5));