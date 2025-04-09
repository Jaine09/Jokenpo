var botaoJogar = document.getElementById('boraJogar');
var jogo = document.getElementById('jogo');

botaoJogar.addEventListener('click', function(){
    botaoJogar.style.display = 'none';
    jogo.style.display = 'flex';
})


var pedra = document.getElementById('pedra');
var papel = document.getElementById('papel');
var tesoura = document.getElementById('tesoura');
var resultadoElemento = document.getElementById('resultado'); 

var escolhaJogador = "";

papel.closest('button').addEventListener('click', function() {
    jogar("papel");
});

pedra.closest('button').addEventListener('click', function() {
    jogar("pedra");
});

tesoura.closest('button').addEventListener('click', function() {
    jogar("tesoura");
});

function jogar(escolhaJogador) {

    const escolhas = ["pedra", "papel", "tesoura"];
    const escolhaComputador = escolhas[Math.floor(Math.random() * escolhas.length)]; 
    let resultadoTexto = "";

    if(escolhaJogador === escolhaComputador){
        resultadoTexto = "Empate";
    }else{
        if(escolhaJogador == "pedra" && escolhaComputador == "tesoura" ||
            escolhaJogador == "papel" && escolhaComputador == "pedra" ||
            escolhaJogador == "tesoura" && escolhaComputador == "papel"
        ) {
            resultadoTexto = "Parabéns, você ganhou!!";
        } else{
            resultadoTexto = "Você perdeu!!";
            
        }
    }

    resultadoElemento.textContent = resultadoTexto; 
};