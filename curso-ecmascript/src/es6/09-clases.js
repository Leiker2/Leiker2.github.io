//Declarando
class User{};

//instancia de una clase
// const newUser = new User();

class user {
    //Declarando metodo
    greeting() {
        return 'Hello';
    }
};

const gndx = new user ();
console.log(gndx.greeting());
const leiker = new user();
console.log(leiker.greeting())

// constructor

class user {
    //constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const ale = new user();


//this: hace referencia al elemento padre que lo contiene

class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user ('ana');

console.log(ana.greeting());

// setters getters

class user{
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper = new user ('Leiker', 27);

console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20)

// ejercicio #1

// Crea una clase Rectangulo que tenga los siguientes métodos:
// Un constructor que reciba como parámetros la base y la altura del rectángulo.
// Un método area que devuelva el área del rectángulo.
// Un método perimetro que devuelva el perímetro del rectángulo.

class rectangulo {
    constructor(base, altura){
        this.altura = altura;
        this.base = base
    }
    area(){
        return this.base * this.altura;
    }
    perimetro(){
        return (this.base + this.altura) * 2;
    }
}

const rect = new rectangulo(20, 20);

console.log(`El area del rectangulo es ${rect.area()}, y el perimetro es ${rect.perimetro()}`);


// ejercicio #2

// Crea una clase CuentaBancaria que tenga los siguientes métodos:
// Un constructor que reciba como parámetros el nombre del titular de la cuenta y el saldo inicial.
// Un método depositar que reciba como parámetro la cantidad a depositar y actualice el saldo de la cuenta.
// Un método retirar que reciba como parámetro la cantidad a retirar y actualice el saldo de la cuenta.
// Un método saldo que devuelva el saldo actual de la cuenta.


class cuentaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(cant){
        return this.deposito = cant;
    }
    retirar(cant){
        return this.retiro = cant;
    }
    get cambioSaldo(){
        return this.saldo;
    }
    set cambioSaldo(n){
        return this.saldo = this.saldo + n;
    }
}

const user = new cuentaBancaria('Leiker Gomez', 30000)

console.log(`Hola ${user.titular}, su saldo inicial fue de ${user.saldo}, usted esta debitando de su cuenta ${user.cambioSaldo = user.retirar(0) + user.depositar(12405)}, y esta depositando ${user.depositar(12405)} y su saldo final es ${user.saldo}`);

console.log({user});


// ejercicio #3

// Crea una clase Circulo que tenga los siguientes métodos:
// Un constructor que reciba como parámetro el radio del círculo.
// Un método area que devuelva el área del círculo.
// Un método circunferencia que devuelva la circunferencia del círculo.
// Un método diametro que devuelva el diámetro del círculo.

class circulo {
    constructor(radio){
        this.radio = radio;
    }
    area(){
        return this.area = 3.1416 * (this.radio *this.radio);
    }
    diametro(){
        return this.diametro = this.radio * 2;
    }
    longitud(){
        return this.longitud = 3.1416 * this.diametro;
    }
}

const redondo = new circulo(20);

console.log(`Hola, el radio de su circulo es de ${redondo.radio}, por ende:
area = ${redondo.area()}, 
diametro = ${redondo.diametro()},
longitud = ${redondo.longitud()}
`);