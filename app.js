console.log('Olá mundo');


function criaCartao(categoria, subcategoria, pergunta, resposta) {

    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `

    <div class="conteudo-cartao">

        <h3>${categoria + " - " + subcategoria}</h3>

        <div class="pergunta-cartao"><p>${pergunta}</p></div>

        <div class="resposta-cartao">
            <p>${resposta}</p>
        </div>


    </div>
    
    `;

    let respostaVisivel = false;

    function virarCartao() {
        respostaVisivel = !respostaVisivel;
        cartao.classList.toggle('active', respostaVisivel);
    }

    cartao.addEventListener('click', virarCartao);

    container.appendChild(cartao);
}
