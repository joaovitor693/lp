/*

Quando clicar na seta par avançar temos que esconder todas as imagens e mostrar a proxima imagem

    a imagem atual começa em 0 porque é a primeira imagem, assim que for clícado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a próxima imagem

    - esconder todas as imagens
      pegar todas as imagens usando o DOM e remover a classe mostrar 

    -mostrar a proxima imagem
      pegar todas as imagens,descobrir qual é a proxima, e colocar a classe mostrar nela

*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

/*Quando clicar na seta par avançar temos que esconder todas as imagens e mostrar a proxima imagem */


/*Seta avançar */

setaAvancar.addEventListener("click", function () {

  const totalDeImagem = imagensPainel.length -1;

    if(imagemAtual === totalDeImagem){
      return;

}

imagemAtual++;

  esconder();

  mostrar();
});

/*Seta voltar */
setaVoltar.addEventListener("click", function () {

  if(imagemAtual === 0){
    return;
  }
  
  imagemAtual--;

  esconder();
  
  mostrar();
});
  
function esconder(){
  imagensPainel.forEach(imagem => {
    imagem.classList.remove("mostrar");
  });
}

function mostrar(){
  imagensPainel[imagemAtual].classList.add("mostrar");  
}

