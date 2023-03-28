//Condicionales

if (true){ 
    console.log('Hola');
}

/*Para que un condicional 'if' corra tiene que ser true,
o si Node, nunca va a arrancar*/

if (false){ 
    console.log('Hola');
} else {
    console.log('Soy falso')
}

/*En dado caso de ser flaso la condicional en el if
corre el segundo codigo, luego del else */

if (false){ 
    console.log('Hola');
} else if () {
    console.log('Soy falso')
} else if (){
    console.log('Soy falso 2')
} else {
    console.log('Soy falso 3')
}
/*Esta estructura es comun, si el condicional if es falso
el codigo salta al segundo else if, y asi susesivamente 
hasta encontrar al else y salir */

var edad = 18;

if (edad === 18){
    console.log('Puedes votar, sera tu primera votacion')
} else if (edad > 18){
    console.log('Puedes votar de nuevo')
} else{
    console.log('Aun no puedes votar')
}

//Operador ternario; es un operador condicional mas simplificado

// condicion ? Bloque verdadero : Bloque falso

var numero = 1;

var resultado = numero === 1 ? 'Si soy un uno' : 'No soy un uno';

//Al imprimir resultado con un console.log, nos imprime la version true
//'Si, soy un uno'

//Ahora, el reto de piedra papel o tijeras, de la clasew

//Cambiar el valor de player1 (valores[]) para el valor que jugara player 1, computer jugara aleatoriamente
let valores = ['piedra', 'papel', 'tijeras'];

var player1 = valores[1]; 
var valcomputer = Math.floor(Math.random() * 3);
var computer = valores[valcomputer];

if (player1 === computer){
    console.log('Player1 =' + ' ' + player1);
    console.log('computer =' + ' ' + computer);
    console.log('Empate, por favor repetir partida');
} else if (player1 === valores[0] && computer === valores[1] ){
    console.log('Player1 =' + ' ' + player1);
    console.log('computer =' + ' ' + computer);
    console.log('Ha ganado la computadora');
} else if (player1 === valores[1] && computer === valores[2] ){
    console.log('Player1 =' + ' ' + player1);
    console.log('computer =' + ' ' + computer);
    console.log('Ha ganado la computadora');
} else if (player1 === valores[2] && computer === valores[0] ){
    console.log('Player1 =' + ' ' + player1);
    console.log('computer =' + ' ' + computer);
    console.log('Ha ganado la computadora');
} else if (player1 === valores[1] && computer === valores[0] ){
    console.log('Player1 =' + ' ' + player1);
    console.log('computer =' + ' ' + computer);
    console.log('Has ganado!');
} else if (player1 === valores[2] && computer === valores[1] ){
    console.log('Player1 =' + ' ' + player1);
    console.log('computer =' + ' ' + computer);
    console.log('Has ganado!');
} else if (player1 === valores[0] && computer === valores[2] ){
    console.log('Player1 =' + ' ' + player1);
    console.log('computer =' + ' ' + computer);
    console.log('Has ganado!');
}

//Reto cumplido
