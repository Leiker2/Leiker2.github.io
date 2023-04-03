// h1 {color: red} en css
// .parrafito {...}
// #pid {...}

// En js es de esta forma, por el nombre de la etiqueta
const h1 = document.querySelector('h1');
//Esto es para las clases, igual que en css
const parrafito = document.querySelector('.parrafito');
//Esto es para los ID, igual que en css
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

//Imprime to que tenemos en el h1
console.log(input.value);


let i = Number(input.value);

console.log(typeof i);

//Imprime las propiedades de cada etiqueta
console.log({
    h1,
    parrafito,
    pid,
    input
    });