// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = Number(lines.shift());
var workHours = Number(lines.shift());
var valuePerHourWorked = Number(lines.shift());

var salario = workHours * valuePerHourWorked;
console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`)