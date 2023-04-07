const colorHEX = document.querySelector('.colorHEX');
const container = document.querySelector('.container');
const button = document.querySelector('.button');
const seccion = document.querySelector('section');

function aleatorio (){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    color = `rgb(${r}, ${g}, ${b})`;
    return color;
} 

let color;
button.addEventListener('click', function(){
    console.log('Le estas dando click en este momento al button y se va a cambiar el color');
    color = seccion.style.backgroundColor = aleatorio();
    colorHEX.textContent = color;
})