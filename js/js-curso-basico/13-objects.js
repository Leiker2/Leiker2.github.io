//Objects
//Sintaxis

var objeto = {};

var miAuto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: '2023',
};

//Objects: Funcion constructora

function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//Generando nuevo objeto
var autoNuevo = new auto('Tesla', 'Model 3', '2023');

//Reto agregar a una funcion constructora 30 carros con modelos

function car (brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var cars = []
for(let i = 0; i < 30; i++){
    var brand = prompt('Ingresa la marca del coche');
    var model = prompt('Ingresa el modelo del coche');
    var year = prompt('Ingresa el annio del coche');

    cars.push(new car(brand, model, year));
}
//Reto cumplido
