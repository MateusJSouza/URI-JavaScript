// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nameSeller = lines.shift();
var salaryFix = parseFloat(lines.shift());
var totalSales = parseFloat(lines.shift());

var commission = totalSales * 0.15;

var total = salaryFix + commission;
console.log(`TOTAL = U$ ${total.toFixed(2)}`)