// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
let input = require('fs').readFileSync('stdin', 'utf8');

const alimentos = [
  'Laranja',
  'Banana',
  'Laranja',
  'Maçã',
  'Morango',
  'Banana',
  'Cenoura',
  'Morango',
  'Abóbora',
  'Abobrinha',
  'Espinafre',
];
const alimentosOrdenados = alimentos.sort()
const alimentosUnicos = new Set();

alimentosOrdenados.forEach((alimento) => {
  alimentosUnicos.add(alimento);
})

console.log([...alimentosUnicos.values()]);