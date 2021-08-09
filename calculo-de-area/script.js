// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C] = input.split(' ').map(item => Number(item));
var pi = 3.14159;
var areaTriangulo = (A * C) / 2.0;

// OU -> pi * (raio ** 2);
var areaCirculo = pi * Math.pow(C, 2);
var areaTrapezio = ((A + B) * C) / 2.0;
var areaQuadrado = B * B;
var areaRetangulo = A * B;

console.log('TRIANGULO: ' + areaTriangulo.toFixed(3));
console.log('CIRCULO: ' + areaCirculo.toFixed(3));
console.log('TRAPEZIO: ' + areaTrapezio.toFixed(3));
console.log('QUADRADO: ' + areaQuadrado.toFixed(3));
console.log('RETANGULO: ' + areaRetangulo.toFixed(3));