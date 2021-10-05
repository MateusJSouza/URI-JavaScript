// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
// let input = require('fs').readFileSync('stdin', 'utf8');

var n = 1;
while (n <= 100) {
  if (n % 3 && n % 5) {
    console.log('ParaPeba');
  }
  if (n % 3) {
    console.log('Para');
  }
  if (n % 5) {
    console.log('Peba');
  }
  n++;
}