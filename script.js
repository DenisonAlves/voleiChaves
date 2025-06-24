const nomeJogador = document.querySelector(".nomeJogador");
const cadastrarJogador = document.querySelector(".cadastrarJogador");
const salvarCadastros = document.querySelector(".salvarCadastros")
let numeroDeJogadores = document.querySelector(".contagem");

salvarCadastros.style.display = "none";
let listaJogadores = [];
let i = 0;

function novoJogador (indice){
  listaJogadores[indice] = nomeJogador.value;
}

cadastrarJogador.addEventListener('click', () =>{   
  if(numeroDeJogadores.textContent == 0){
    numeroDeJogadores.innerText = nomeJogador.value;
    nomeJogador.value = '';
  }else if(i<numeroDeJogadores.textContent){   
    novoJogador(i);
    i++;
    nomeJogador.value = '';
    if (i==numeroDeJogadores.textContent){
      nomeJogador.style.display = 'none';
      cadastrarJogador.style.display = 'none';
         
    const listaElement = document.getElementById("lista-jogadores");

    for (let i = 0; i < listaJogadores.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = listaJogadores[i];
      listaElement.appendChild(listItem);
      }
    }      
  }
  
})

  
  

