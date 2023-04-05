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

//Imprime to que tenemos en el input: value
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

//innerHTML, cambia el html que este dentro del elemento que seleccionamos
h1.innerHTML = 'Palito <br> feo';

//Convierte todo a texto, el otro convierte a HTML
h1.innerText = 'Palito <br> feo';

//Nos ayuda a leer atributos del h1, haremos un ejemplo atributo pantalla
console.log(h1.getAttribute('class'))

//.setAttribute nos ayudara a cambiar el atributo en class
h1.setAttribute('class', 'rojo');

//.classList, hace lo mismo, pero este es especifico para clases, class. En este caso le agregaremos una clase
h1.classList.add('large');
h1.classList.remove('verde');

//Nos invita a probar toggle
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = 456;

//Nos ayuda a crear el elemento HTML que querramos, lo asginamos a una constante llamada img
const img = document.createElement('img');

// A img se le annade un src con url
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/04/09/17/48/man-320276_1280.png');
//Se inserta img en pid, este es el id de un parrafo
pid.append(img);