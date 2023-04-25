//object values
//Este nos imprime solo los valores, sin el objeto

const countries = { MX : 'Mexico', VE: 'Venezuela', CO:'Colombia', CL:'Chile' }

console.log(Object.values(countries));

//Ejercicio de un reto en platzi
// usar Object.values para solo retornar en un array los nombres de este objeto:

// [
//  {
//   "name": "Nicolas",
//   "lastName": "Molina",
//   "age": 28
//  },
//  {
//   "name": "Valentina",
//   "lastName": "Molina",
//   "age": 19
//  }
// ]


function getNames(array) {
    const names = Object.values(array).map(person => person.name);
    return names;
}

// Probando unas cosas

const array = {
    name: "Product 1",
    price: 1000,
    stock: 10
}

function addNewAttr(array) {

    const impuestos = {
      taxes: Math.floor(array.price * 0.19)
    } 
  
    return Object.assign(array, impuestos)
  }

  console.log(addNewAttr);
  
