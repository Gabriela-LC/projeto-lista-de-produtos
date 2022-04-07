const ul = document.querySelector(".containerListaProdutos ul");

function montarListaProdutos(listaProdutos) {

    ul.innerHTML = "";

      listaProdutos.forEach(element => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        img.src = element.img;
        img.alt = element.nome;
        h3.innerText = element.nome;
        p.innerText = element.preco;
        span.innerText = element.secao;

        li.append(img, h3, p, span);

        ul.appendChild(li)
          
      });  

      atualizaPrecoTotal(listaProdutos)
}

montarListaProdutos(produtos)

function filtrarPorHortifruti() {
    
    const prodsHortifruti = produtos.filter( elemento => {
        return elemento.secao === "Hortifruti"
    })

    montarListaProdutos(prodsHortifruti)
}

const botaoFiltrarHortifruti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti");

botaoFiltrarHortifruti.addEventListener("click", filtrarPorHortifruti)

function mostrarTodos(){
    montarListaProdutos(produtos)
}

const botaoMostrarTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos");

botaoMostrarTodos.addEventListener("click", mostrarTodos)

function filtrarCampoDeBusca(){

    const input = document.querySelector(".campoBuscaPorNome")
    const textoBusca = input.value;

    const produtosBuscados = produtos.filter(element => {
        return (element.nome).toUpperCase().includes(textoBusca.toUpperCase())
    })

    montarListaProdutos(produtosBuscados)

}

const botaoBusca = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome");

botaoBusca.addEventListener("click", filtrarCampoDeBusca)

function atualizaPrecoTotal(listaProdutos){

    let precoTotalProdutos = 0;
    const total = document.getElementById("precoTotal");

    // for(let i = 0; i < listaProdutos.length; i++){
    //     precoTotalProdutos += listaProdutos[i].preco
    // }

    listaProdutos.forEach(({preco}) => {
        precoTotalProdutos += preco
    })

    total.innerText = precoTotalProdutos

}