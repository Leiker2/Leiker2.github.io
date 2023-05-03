//ejemplo 1 suma
function suma(num1,num2){
    return num1 + num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(5,5,suma));


// Dado un arreglo de números, usar la función de orden superior forEach 
// para imprimir en la consola cada número multiplicado por 2.

const arr = [5,4,3,2,9,5];

