function jogar(){
    var idade = prompt("Qual a sua idade?");
    
    if(idade < 18){
      alert("Infelizmente você não pode jogar")
      return;
    } else {
      alert("Bem-vind@ ao jogo")
    }
    
    var nomeJogador = prompt("Digite seu nome:")
    var escolhaJogador = prompt("Qual a sua escolha\n 1-Pedra\n 2-Papel\n 3-Tesoura");
    var escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == escolhaComputador){
        alert("Empate");
    } else if (escolhaComputador == 1 && escolhaJogador == 2){
        alert(`Sua escolha foi Papel\n${nomeJogador} GANHOU, computador escolheu Pedra`);
    } else if (escolhaComputador == 1 && escolhaJogador == 3){
        alert(`Sua escolha foi Tesoura\n${nomeJogador} PERDEU, computador escolheu Pedra`);
    } else if (escolhaComputador == 2 && escolhaJogador == 1){
        alert(`Sua escolha foi Pedra\n${nomeJogador} PERDEU, computador escolheu Papel`);
    }else if (escolhaComputador == 2 && escolhaJogador == 3){
        alert(`Sua escolha foi Tesoura\n${nomeJogador} GANHOU, computador escolheu Papel`);
    } else if(escolhaComputador == 3 && escolhaJogador == 1){
        alert(`Sua escolha foi Pedra\n${nomeJogador} GANHOU, computador escolheu Tesoura`);
    } else {
        alert(`Sua escolha foi Papel\n${nomeJogador} PERDEU, computador escolheu Tesoura`);
    }
  }