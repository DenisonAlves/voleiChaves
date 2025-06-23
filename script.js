// const jsonUsuarios = `
// [
//   { "nome": "Ana", "idade": 22 },
//   { "nome": "Bruno", "idade": 30 },
//   { "nome": "Clara", "idade": 28 }
// ]
// `;

//const { createElement } = require("react");

// // 1. Converta jsonUsuarios em um array de objetos JavaScript
// const objetoJson = JSON.parse(jsonUsuarios);
// console.log(typeof(objetoJson), objetoJson);

// // 2. Mostre no console o nome e a idade de cada usuário
// objetoJson.forEach(element => {
//   console.log(element.nome, element.idade);
// });
// //objeto.forEach(elemento => {});

// // 3. Adicione um novo usuário: nome = "Diego", idade = 26
// objetoJson.push({ "nome": "Diego", "idade": 26 });

// // 4. Converta novamente o array para JSON e mostre no console

// const jsonUsuariosAtt = JSON.stringify(objetoJson);
// console.log(jsonUsuariosAtt);

//---------------------------------------------------------

// let usuarios = [
//   { nome: "Ana", idade: 22 },
//   { nome: "Bruno", idade: 30 },
//   { nome: "Clara", idade: 28 }
// ];

// // 1. Mostrar todos os usuários
// function listarUsuarios() {
//   console.log("Lista de usuários:");
//   usuarios.forEach((u, i) => {
//     console.log(`${i + 1}. ${u.nome} - ${u.idade} anos`);//template string
//   });
// }

// // 2. Adicionar novo usuário
// function adicionarUsuario(nome, idade) {
//   usuarios.push({ nome, idade });
// }

// // 3. Remover usuário pelo nome
// function removerUsuario(nome) {
//   usuarios = usuarios.filter(u => u.nome !== nome);
// }

// // 4. Atualizar idade de um usuário
// function atualizarIdade(nome, novaIdade) {
//   const usuario = usuarios.find(u => u.nome === nome);
//   if (usuario) {
//     usuario.idade = novaIdade;
//   }
// }

// // 🧪 Testando as funções
// listarUsuarios();
// adicionarUsuario("Diego", 26);
// removerUsuario("Ana");
// atualizarIdade("Clara", 29);
// listarUsuarios();



// const usuarios = [
//   { nome: "Ana", idade: 22 },
//   { nome: "Bruno", idade: 30 }
// ];

// // Salvar no localStorage:
// localStorage.setItem("usuarios", JSON.stringify(usuarios));

// // Pegar do localStorage:
// const dadosSalvos = JSON.parse(localStorage.getItem("usuarios"));
// console.log(dadosSalvos); // agora é um array de objetos de novo

//Coletando o númeoro de jogadores
const nJogadores = document.querySelector (".nJogadores");
const addJogadores = document.querySelector (".addJogadores");
const contagem = document.querySelector(".contagem");
const novoJogador = document.querySelector("div");
const finalizarLista = document.querySelector(".finalizar");

finalizarLista.style.display = 'none';


addJogadores.addEventListener ('click', ()=>{
  const jogadores = nJogadores.value;
  contagem.textContent = jogadores;
  nJogadores.style.display = 'none';
  addJogadores.style.display = 'none';
  nJogadores.value = '';
  
  for(let i=0; jogadores>i; i++){
    const inputJogador = document.createElement('input');    
    novoJogador.appendChild(inputJogador);
    //inputJogador.id = `${i}`;    
    inputJogador.id = 'marcado';           
  }

  finalizarLista.style.display = 'block';
  const inputJogador = document.querySelectorAll('#marcado');
  console.log(inputJogador);  
  finalizarLista.addEventListener ('click', ()=>{
    console.log(inputJogador.textContent);  

  })
})

 






let jogadores = []; //objeto para salvar os jogadores 

function addJogador (nome){
  jogadores.push({nome});
}


addJogador('Denilson')
//console.log(jogadores)
