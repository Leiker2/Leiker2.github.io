//Coerciones implicitas
let a= 4 + '7'; //Nos regresa un string
let a= 4 * '7'; //Nos devolveria un number

//Coerciones explicitas
//Es cuando obligamos a un valor que sea un tipo

var a = 20; //Este seria un number
var b = a + ''; //Este seria un string

var c = String(a); //Nos traemos el valor que tiene la variable a, pero la convertimos a String
var d = Number(b); //Nos traemos el valor que tiene b, pero sera de tipo Number
