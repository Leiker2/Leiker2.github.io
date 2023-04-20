const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Async!!'), 2000) 
            : reject(new Error('error!'));
    })
}

const anotherFuntion = async () => {
    const something = await fnAsync();
    console.log(something)
    console.log('hello')
}

console.log('Before');

anotherFuntion();

console.log('after');


//Vamos a intentar hacer un ejercicio de esto

const waitTime = () => {
    return new Promise((resolve,reject) => {
        (true) 
            ?setTimeout (() => resolve ('cargo la pagina por completo'), 3000) 
            : reject(new Error('Error'));
    })
}

const anotherFuncion = async () => {
    const something = await waitTime()
    console.log(something);
    console.log('Ya se ejecuto todo')
}

console.log('Hola Leiker');

anotherFuncion();

console.log('esto se ejecuta y aun no se ha completado el async')