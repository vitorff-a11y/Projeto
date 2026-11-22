const botao = document.getElementById('btn-mensagem');
const textoResposta = document.getElementById('texto-resposta');

let cliques = 0;

botao.addEventListener('click', () => {
    cliques++;
    textoResposta.textContent = `Site publicado e JavaScript funcionando perfeitamente! (Cliques: ${cliques})`;
});
