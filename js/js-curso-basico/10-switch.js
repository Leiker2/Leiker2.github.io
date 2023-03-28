//Switch

var numero = 1;

switch (numero) {
    case 1:
        console.log ('Soy uno!');
        break;
    case 2:
        console.log('soy un 2');
        break;
    case 100:
        console.log('Si, soy un 100');
        break;
    default:
        console.log('No soy nada');
}

//Juego de piedra, papel o tijeras pero con Switch

var valores = ['piedra', 'papel', 'tijera'];
var player1 = valores[2];
var valcomputer = Math.floor(Math.random()*3);
var computer = valores[valcomputer];

switch(true){
    case player1 === computer:
        console.log('Player 1: ' + player1 + ' & Computer: ' + computer + ' | Empate! por favor repita la jugada');
        break;
    case player1 === valores[0] && computer === valores [1]:
        console.log('Player 1: ' + player1 + ' & Computer: ' + computer + ' | Ha ganado : computer');
        break;
    case player1 === valores[1] && computer === valores [2]:
        console.log('Player 1: ' + player1 + ' & Computer: ' + computer + ' | Ha ganado : computer');
        break;
    case player1 === valores[2] && computer === valores [0]:
        console.log('Player 1: ' + player1 + ' & Computer: ' + computer + ' | Ha ganado : computer');
        break;
    case player1 === valores[1] && computer === valores [0]:
        console.log('Player 1: ' + player1 + ' & Computer: ' + computer + ' | Has ganado, felicidades!');
        break;
    case player1 === valores[2] && computer === valores [1]:
        console.log('Player 1: ' + player1 + ' & Computer: ' + computer + ' | Has ganado, felicidades!');
        break;
    case player1 === valores[0] && computer === valores [2]:
        console.log('Player 1: ' + player1 + ' & Computer: ' + computer + ' | Has ganado, felicidades!');
        break;
}


// reto logrado
