//Ejemplo #1 de callback
function sum (num1, num2){
    return num1 + num2;
}

//No necesariamente debe llamarse callback
function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(3,2,sum));

//_______________________________________________________
//Ejemplo #2

setTimeout(function () {
    console.log('Hola Javascript')
}, 2000)

//Ahora con callback
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Leiker')


// _______________________________________________________
//ejemplo #3 practicando callbacks
//Crear una función de orden superior que reciba una función de callback y un número como argumentos. 
//La función debe llamar a la función de callback después de multiplicar el número por dos.

function multiplyNum(num, callback){
    resultado = num * 2;
    callback(resultado)
}

multiplyNum(6, () => console.log(resultado))

/*Ejercicio #4 practicamos
Crear una función de orden superior que reciba dos números y una función de callback. 
La función debe llamar a la función de callback con la suma de los dos números.
*/

function calc(num1, num2, callback){
    resultado = num1 + num2;
    
    callback(resultado);
}

calc(2,5, function () {
    console.log(resultado);
})



/*Ejercicio #5 practicamos
Crear una función de orden superior que reciba un array y una función de callback. 
La función debe llamar a la función de callback con el resultado de sumar todos los elementos del array.
*/

function sumaArr(arr, callback){
    const resultado = arr.reduce((acc,number) => acc += number, 0);

    callback(resultado);
}

sumaArr([1,2,3,4,5], (resultado) => console.log(resultado));


/*Ejercicio #5 practicamos
Crear una función que reciba un string y una función de callback. La función debe 
llamar a la función de callback con el string en mayúsculas.*/

function toMayus(string, callback){
    console.log('Esto es antes del callback');
    callback(string)
}

toMayus('Leiker acaba de entender callback', (string) => {
    console.log(string.toUpperCase());
})

/*Ejercicio #5 practicamos
Crear una función que reciba un string y una función de callback. La función debe 
llamar a la función de callback con el string en mayúsculas.*/


//practicando callbacks

function sumar (num1,num2,callback){
    const resultado = num1 + num2;
    callback(resultado)
}

sumar(2,4,)




