// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');

// \n => quebra de linha
var valores = input.split('\n');

// shift() -> remove o primeiro elemento de um array e retorna
// Number() -> convertendo strings em números
var A = Number(valores.shift());
var B = Number(valores.shift());
var X = A + B;
console.log("X = " + X);