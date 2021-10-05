// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
// let input = require('fs').readFileSync('stdin', 'utf8');

const produtos = [
  {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
  {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
  {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
  {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
  {id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'},
];


const ids = produtos.map((produto) => produto.id);
console.log('IDs dos objetos', ids) // mostrando somente os IDs dos objetos
const alimentos = produtos
.filter((produto) => produto.categoria === 'alimento') // filtrando o array pela categoria de 'alimento'
.map((produto) => produto.nome) // mostrando somente o nome dos produtos que são da categoria 'alimento'
console.log('filtrando por categoria', alimentos)

const total = produtos.reduce((acc, produto) => acc + produto.valor, 0) // somando o valor de todos os objetos
console.log('valor total de todos os objetos', total); // mostrando valor total dos objetos