console.log('Olá mundo');


function criaCartao(categoria, subcategoria, pergunta, resposta, exemplo) {

    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `

    <div class="conteudo-cartao">

    <h3>${categoria}</h3>
    <h3>${subcategoria}</h3>

    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>

    <div class="resposta-cartao"></div>
        <p>${resposta}</p>
    </div>

    <div class="exemplo-cartao"></div>
        <p>${exemplo}</p>
    </div>
    
    </div>
    
    `;

    container.appendChild(cartao);
}