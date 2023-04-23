//esto funciona solo con live server

const button = document.getElementById('btn');

//al dar click llamamos a module.js y se ejecuta esa funcion, ademas la imprimimos
button.addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})