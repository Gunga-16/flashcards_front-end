// ESTRUTURA

// criaCartao('categoria', 
//            'subcategoria',
//            'pergunta',
//            'resposta',
//            'exemplo');


criaCartao('JavaScript', 'Fundamentos', 'O que é JavaScript?', 'JavaScript é uma linguagem de programação usada para criar comportamentos dinâmicos em páginas web.', 'Exemplo: <script>let mensagem = "Olá, Mundo!"; console.log(mensagem);</script>');

criaCartao('JavaScript', 'Fundamentos', 'Qual é a sintaxe correta para declarar uma variável em JavaScript?', 'Para declarar uma variável, usamos "let", "const" ou "var".', 'Exemplo: let nome = "Ana"; const idade = 25; var cidade = "São Paulo";');

criaCartao('JavaScript', 'Fundamentos', 'Qual a diferença entre "let", "var" e "const"?', ' "let" e "var" permitem reatribuição, mas "let" tem escopo de bloco enquanto "var" tem escopo de função. "const" não permite reatribuição.', 'Exemplo: let x = 10; x = 20; // funciona com let');

criaCartao('JavaScript', 'Fundamentos', 'O que é um array?', 'Um array é uma coleção de elementos que podem ser de diferentes tipos, armazenados em uma única variável.', 'Exemplo: let frutas = ["maçã", "banana", "laranja"];');

criaCartao('JavaScript', 'Fundamentos', 'Como acessar o terceiro elemento de um array?', 'Use o índice do array: array[2]. Lembre-se de que os índices começam em 0.', 'Exemplo: let numeros = [10, 20, 30]; console.log(numeros[2]);');

criaCartao('JavaScript', 'Funções', 'O que é uma função em JavaScript?', 'Uma função é um bloco de código que pode ser executado quando chamado.', 'Exemplo: function saudacao() { return "Olá!"; }');

criaCartao('JavaScript', 'Funções', 'Como se declara uma função?', 'Você pode declarar uma função usando "function nomeFuncao() {}".', 'Exemplo: function soma(a, b) { return a + b; }');

criaCartao('JavaScript', 'Funções', 'O que são parâmetros de função?', 'Parâmetros são valores passados para uma função que influenciam sua execução.', 'Exemplo: function multiplicar(a, b) { return a * b; }');

criaCartao('JavaScript', 'Funções', 'Qual é a diferença entre uma função declarada e uma função expressa?', 'Funções declaradas podem ser chamadas antes de serem definidas. Funções expressas são atribuídas a variáveis e só podem ser chamadas após sua definição.', 'Exemplo: const funcaoExpressa = function() { return "Expressa!"; };');

criaCartao('JavaScript', 'Objetos', 'O que é um objeto em JavaScript?', 'Um objeto é uma coleção de pares chave-valor que representam uma entidade.', 'Exemplo: let carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };');

criaCartao('JavaScript', 'Objetos', 'Como acessar uma propriedade de um objeto?', 'Use notação de ponto ou colchetes: objeto.propriedade ou objeto["propriedade"].', 'Exemplo: console.log(carro.marca);');

criaCartao('JavaScript', 'Objetos', 'Como adicionar uma nova propriedade a um objeto?', 'Você pode adicionar uma propriedade usando notação de ponto: objeto.novaPropriedade = valor.', 'Exemplo: carro.cor = "vermelho";');

criaCartao('JavaScript', 'Eventos', 'O que são eventos em JavaScript?', 'Eventos são ações que ocorrem na página, como cliques ou carregamentos, e que podem ser capturadas para executar código.', 'Exemplo: button.addEventListener("click", function() { alert("Botão clicado!"); });');

criaCartao('JavaScript', 'Eventos', 'Como se captura um evento de clique em um botão?', 'Use o método "addEventListener": botao.addEventListener("click", funcao).', 'Exemplo: document.getElementById("botao").addEventListener("click", funcao);');

criaCartao('JavaScript', 'DOM', 'O que é o DOM?', 'DOM significa Document Object Model. É a representação da estrutura HTML em um formato que pode ser manipulado por JavaScript.', 'Exemplo: document.getElementById("titulo").innerText = "Novo título";');

criaCartao('JavaScript', 'DOM', 'Como se seleciona um elemento pelo ID no DOM?', 'Use "document.getElementById("id")" ou "document.querySelector("#id")".', 'Exemplo: document.getElementById("conteudo").innerHTML = "Texto alterado";');

criaCartao('JavaScript', 'Loops', 'O que é um loop em JavaScript?', 'Um loop é uma estrutura que permite repetir uma série de comandos várias vezes.', 'Exemplo: for (let i = 0; i < 5; i++) { console.log(i); }');

criaCartao('JavaScript', 'Loops', 'Qual a diferença entre "for" e "while"?', ' "for" é usado quando o número de iterações é conhecido. "while" é usado quando a condição precisa ser avaliada a cada iteração.', 'Exemplo: while (contador < 5) { contador++; }');

criaCartao('JavaScript', 'Condicionais', 'Como se faz uma condicional em JavaScript?', 'Usa-se "if", "else if" e "else" para executar blocos de código diferentes com base em condições.', 'Exemplo: if (idade >= 18) { console.log("Maior de idade"); } else { console.log("Menor de idade"); }');

criaCartao('JavaScript', 'Condicionais', 'Qual a diferença entre "==" e "==="?', ' "==" compara valores sem considerar o tipo, enquanto "===" compara tanto valor quanto tipo.', 'Exemplo: "5" == 5 // true, "5" === 5 // false');

criaCartao('HTML', 'Estrutura', 'O que é uma tag HTML?', 'Uma tag HTML define um elemento em um documento HTML.', 'Exemplo: <p>Este é um parágrafo.</p>');

criaCartao('HTML', 'Estrutura', 'Qual é a função da tag head?', 'A tag head contém metadados sobre o documento, como título, links e scripts.', 'Exemplo: <head><title>Minha Página</title></head>');

criaCartao('HTML', 'Estrutura', 'O que é a tag body?', 'A tag body contém todo o conteúdo visível da página.', 'Exemplo: <body><h1>Título</h1><p>Conteúdo da página</p></body>');

criaCartao('HTML', 'Formulários', 'Como criar um botão de envio em um formulário?', 'Use a tag button ou input com o type="submit".', 'Exemplo: <form><button type="submit">Enviar</button></form>');

criaCartao('HTML', 'Formulários', 'Como criar um campo de seleção?', 'Use a tag select com várias opções.', 'Exemplo: <select><option>Opção 1</option><option>Opção 2</option></select>');

criaCartao('HTML', 'Formulários', 'Como criar um checkbox?', 'Use a tag input com o type="checkbox".', 'Exemplo: <input type="checkbox" name="aceito"> Aceito os termos');

criaCartao('HTML', 'Links', 'Como criar um link para outra página?', 'Use a tag a com o atributo "href".', 'Exemplo: <a href="pagina.html">Clique aqui</a>');

criaCartao('HTML', 'Links', 'Como abrir um link em uma nova aba?', 'Adicione o atributo "target="_blank"" ao link.', 'Exemplo: <a href="pagina.html" target="_blank">Abrir em nova aba</a>');

criaCartao('HTML', 'Imagens', 'Como inserir uma imagem?', 'Use a tag img com o atributo "src".', 'Exemplo: <img src="imagem.jpg" alt="Descrição da imagem">');

criaCartao('HTML', 'Imagens', 'Como adicionar uma legenda a uma imagem?', 'Use a tag figcaption dentro de figure.', 'Exemplo: <figure><img src="imagem.jpg" alt="Descrição"><figcaption>Legenda da imagem</figcaption></figure>');

criaCartao('HTML', 'Tabelas', 'Como criar uma tabela?', 'Use as tags table, tr, td e th.', 'Exemplo: <table><tr><th>Cabeçalho</th></tr><tr><td>Dados</td></tr></table>');

criaCartao('HTML', 'Tabelas', 'Como mesclar colunas em uma tabela?', 'Use o atributo "colspan" na tag td ou th.', 'Exemplo: <td colspan="2">Colunas mescladas</td>');

criaCartao('HTML', 'Listas', 'Como criar uma lista ordenada?', 'Use a tag ol com itens li.', 'Exemplo: <ol><li>Item 1</li><li>Item 2</li></ol>');

criaCartao('HTML', 'Listas', 'Como criar uma lista não ordenada?', 'Use a tag ul com itens li.', 'Exemplo: <ul><li>Item 1</li><li>Item 2</li></ul>');

criaCartao('HTML', 'Semântica', 'O que é uma tag semântica em HTML?', 'Uma tag semântica define o propósito de seu conteúdo.', 'Exemplo: <header>, <footer>, <article>, <section>');

criaCartao('HTML', 'Semântica', 'Qual é a função da tag header?', 'A tag header define o cabeçalho de uma página ou seção.', 'Exemplo: <header><h1>Título da Página</h1></header>');

criaCartao('HTML', 'Semântica', 'Qual é a função da tag footer?', 'A tag footer define o rodapé de uma página ou seção.', 'Exemplo: <footer><p>Todos os direitos reservados</p></footer>');

criaCartao('HTML', 'Mídia', 'Como incorporar um vídeo no HTML?', 'Use a tag video com os atributos "src" e "controls".', 'Exemplo: <video src="video.mp4" controls></video>');

criaCartao('HTML', 'Mídia', 'Como incorporar áudio no HTML?', 'Use a tag audio com os atributos "src" e "controls".', 'Exemplo: <audio src="audio.mp3" controls></audio>');

criaCartao('HTML', 'Divisões', 'Qual é a função da tag div?', 'A tag div é usada como contêiner genérico para agrupar conteúdo.', 'Exemplo: <div><p>Conteúdo dentro da div</p></div>');

criaCartao('CSS', 'Seletores', 'O que é um seletor de classe em CSS?', 'Um seletor de classe é usado para selecionar elementos com um atributo de classe específico.', 'Exemplo: .classe { color: blue; }');

criaCartao('CSS', 'Seletores', 'Como aplicar estilos a um ID?', 'Use o símbolo "#" seguido do nome do ID.', 'Exemplo: #meuID { font-size: 20px; }');

criaCartao('CSS', 'Box Model', 'O que é padding?', 'Padding é o espaço entre o conteúdo de um elemento e sua borda.', 'Exemplo: div { padding: 10px; }');

criaCartao('CSS', 'Box Model', 'O que é margin?', 'Margin é o espaço ao redor da borda de um elemento.', 'Exemplo: div { margin: 15px; }');

criaCartao('CSS', 'Box Model', 'O que é border?', 'Border é a borda ao redor do padding e do conteúdo de um elemento.', 'Exemplo: div { border: 2px solid black; }');

criaCartao('CSS', 'Texto', 'Como alterar a cor do texto?', 'Use a propriedade "color" para alterar a cor do texto.', 'Exemplo: p { color: red; }');

criaCartao('CSS', 'Texto', 'Como centralizar o texto?', 'Use a propriedade "text-align" com o valor "center".', 'Exemplo: h1 { text-align: center; }');

criaCartao('CSS', 'Texto', 'Como alterar o tamanho da fonte?', 'Use a propriedade "font-size".', 'Exemplo: p { font-size: 16px; }');

criaCartao('CSS', 'Texto', 'Como deixar o texto em negrito?', 'Use a propriedade "font-weight" com o valor "bold".', 'Exemplo: p { font-weight: bold; }');

criaCartao('CSS', 'Texto', 'Como alterar a família da fonte?', 'Use a propriedade "font-family".', 'Exemplo: p { font-family: Arial, sans-serif; }');

criaCartao('CSS', 'Background', 'Como definir uma cor de fundo?', 'Use a propriedade "background-color".', 'Exemplo: body { background-color: #f0f0f0; }');

criaCartao('CSS', 'Background', 'Como definir uma imagem de fundo?', 'Use a propriedade "background-image".', 'Exemplo: body { background-image: url("imagem.jpg"); }');

criaCartao('CSS', 'Layouts', 'O que é flexbox?', 'Flexbox é um layout de CSS que permite alinhar e distribuir espaço entre itens de um contêiner.', 'Exemplo: .container { display: flex; }');

criaCartao('CSS', 'Layouts', 'O que faz a propriedade "justify-content" em flexbox?', 'A propriedade "justify-content" alinha itens no eixo principal.', 'Exemplo: .container { justify-content: center; }');

criaCartao('CSS', 'Layouts', 'O que é grid layout?', 'CSS Grid Layout é um sistema bidimensional de layout baseado em grades.', 'Exemplo: .container { display: grid; grid-template-columns: 1fr 1fr; }');

criaCartao('CSS', 'Layouts', 'Como definir colunas em um layout de grid?', 'Use a propriedade "grid-template-columns".', 'Exemplo: .container { grid-template-columns: 100px 200px; }');

criaCartao('CSS', 'Posicionamento', 'Como posicionar um elemento fixo na página?', 'Use a propriedade "position" com o valor "fixed".', 'Exemplo: .menu { position: fixed; top: 0; }');

criaCartao('CSS', 'Posicionamento', 'Como posicionar um elemento relativo ao seu posicionamento normal?', 'Use a propriedade "position" com o valor "relative".', 'Exemplo: .caixa { position: relative; top: 10px; }');

criaCartao('CSS', 'Posicionamento', 'O que faz a propriedade "z-index"?', 'A propriedade "z-index" controla a ordem de sobreposição de elementos posicionados.', 'Exemplo: .elemento { position: absolute; z-index: 10; }');
