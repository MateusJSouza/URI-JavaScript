// cálculo de área
let input = require('fs').readFileSync('stdin', 'utf8');

let valores = input.split(' ');
let raio = parseFloat(valores.shift());
let pi = parseFloat(3.14159);
let area = pi * (raio ** 2);

console.log('A='+area.toFixed(4));