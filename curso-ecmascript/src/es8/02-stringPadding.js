//Viendo clase de string padding

const string = 'Hello';

console.log(string.padStart(9,'hi'));
//Este metodo agrega en la posicion que decida el string o valor que quiera
// padStart cuenta la posicion de derecha a izquierda

console.log(string.padEnd(string.length + 2,'_'));
//padEnd cuenta de derecha a izquierda