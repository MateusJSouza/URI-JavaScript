// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infoItem1 = lines.shift().split(' ');
var infoItem2 = lines.shift().split(' ');

var codePiece1 = infoItem1.shift();
var numberPiece1 = infoItem1.shift();
var unitaryValue1 = infoItem1.shift();
var totalValueItem1 = numberPiece1 * unitaryValue1;

var codePiece2 = infoItem2.shift();
var numberPiece2 = infoItem2.shift();
var unitaryValue2 = infoItem2.shift();
var totalValueItem2 = numberPiece2 * unitaryValue2;

var total = totalValueItem1 + totalValueItem2;

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));