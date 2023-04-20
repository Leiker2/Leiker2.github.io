function* iterate(array){
    for(let value of array){
        yield value; //yield es como como un return
    }
}

const it = iterate(['Oscar', 'Leiker', 'Maikel', 'Ale', 'Daniela']);
console.log({it});
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// ¡Claro! Aquí te dejo algunos ejercicios para que practiques con Generators en JavaScript:

// Crea un generador que devuelva los primeros n números de la serie de Fibonacci.



// Escribe un generador que reciba un array de números y devuelva el siguiente número mayor en cada iteración.

function* gen(arr){
    for (let value of arr) {
        yield value;
    }
}

const ite = gen([3,4,5,6,3,2,5,6]);

console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);

// Crea un generador que reciba una cadena y devuelva las letras en orden inverso.

// Escribe un generador que tome dos argumentos: un valor inicial y un incremento. Cada vez que se llama al generador, debe devolver el valor actual y luego incrementar el valor por el valor de incremento.

// Crea un generador que devuelva un número aleatorio cada vez que se le llama.

// Espero que estos ejercicios te ayuden a practicar con Generators en JavaScript. ¡Diviértete programando!