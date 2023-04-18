//Promesas
//La promesa es como lo dice el nombre, es un codigo que promete ser utilizado en algun momento
const anotherFuntion = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve('Hey!!');
        } else {
            reject ('Oops!');
        }
    })
}

anotherFuntion()
    //.then se utiliza para cuando se cumpla la condicion if
    .then(response => console.log(response))
    //catch sale un error cuando no se cumpla, en el .then no puede haber ;, y pueden haber mas de 1 then
    .catch(err => console.log(err));

    //Ejercicios #1
    //Sencillo: Crea una función que devuelva una promesa que se resuelva después de una cantidad de tiempo determinada y retorne un mensaje.

    function delay(time){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`La tarea se realizo en ${time} milisegundos`);
            }, time)
        });
    }

delay(3000)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

//ejercicio #2 Sencillo: Crea una función que verifique si un número es par o impar utilizando promesas.

function isPar(num){
    return new Promise ((resolve,reject) => {
        if(num % 2 == 0)
            resolve(`El numero ${num} es par`)
        else
            reject (`El numero ${num} no es par`);
    })
}

isPar(30)
    .then(isTrue => console.log(isTrue))
    .catch(isFalse => console.log(isFalse));


//Ejercicio #4 Complicado: Crea una función que reciba un array de números y devuelva una promesa que se resuelva con la suma de los números.

function sumaOfNumbers(numbers = [1,2,3,4,5]){
    return new Promise ((resolve,reject) => {
        var suma = 0;
        for (const number of numbers) {
            suma += number;
        }
        resolve(`La suma de los numeros que ha introducido es ${suma}`)
    })
}

sumaOfNumbers([3,4,5,6,7,8,9])
    .then (message => console.log(message))
    .catch(err => console.log(err));

// Ejercicio #5
// Crea una función retrasar que reciba como parámetro un número de segundos y devuelva una promesa que se resuelva después de ese tiempo.
// Por ejemplo, retrasar(5) debería devolver una promesa que se resuelva después de 5 segundos.

function delay(time){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`La tarea se acaba de finalizar en ${time} milisegundos`);
        }, time)
    })
}

delay(10000)
    .then(message => console.log(message))
    .catch(err => console.log(err));


