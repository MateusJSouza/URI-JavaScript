// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = lines.shift();
var pi = 3.14159;
var volume = (4 / 3) * pi * raio ** 3

console.log('VOLUME = ' + volume.toFixed(3));