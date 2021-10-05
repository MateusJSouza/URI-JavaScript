// require -> requisição de módulos
// módulo fs - file system

// readFileSync -> nome do arquivo (stdin) 
// let input = require('fs').readFileSync('stdin', 'utf8');

// const fetchPokemon = () => {
//   const url = `https://pokeapi.co/api/v2/pokemon/25` // URL da API
//   fetch(url)
//     .then(response => response.json()) // retornando uma resposta convertida em json
//     .then(pokemon => {
//       console.log(pokemon);
//     })
// }

// fetchPokemon();

// -----------------------------------------!----------------------------------------

const pesquisarCep = () => {
  alert('Olá mundo');
}

document.getElementById('txtCep') 
  .addEventListener('focusout', pesquisarCep) // quando sair do foco