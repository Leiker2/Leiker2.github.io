const fnAsync = () => {
    return new Promise ((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello!');
}

console.log('Before');
anotherFn();
console.log('After');



//Practice

const fnAsyn = () => {
    return new Promise ((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'),3000)
            : reject(new Error ('Error!'))
    })
}

const anotherfnn = async () => {
    const something = await fnAsyn();
    console.log('Hello');
}

anotherfnn()
    .then(console.log('Before!!'))
    .then(message => console.log(message))
    .then(console.log('After!!'))
    .catch((err) => console.log(err))
    .finally(console.log('finally'))

    //Practice again

        let i = 2;
    const FnAsync = () => {
        return new Promise ((resolve,reject) => {
            (i === 0)
                ?setTimeout(() => resolve('Funciones asincronasss!'),5000)
                :reject(new Error ('errrr!'));
        })
    }

    const anotherFnAsync = async () => {
        const something = await FnAsync();
        console.log('Han pasado al menos 5s para que este texto se muestre')
    }

    console.log('Before, Before')

    anotherFnAsync()
        .then(console.log('Hola mundo!'))
        .then(message => console.log(message))
        .then(console.log('Afterr!!'))
        .catch(err => console.log(err))

//Practice again

const functionAsync = () => {
    return new Promise ((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 10000)
            : reject(new Error ('Error!'));
    })
} 

const aanotherFunction = async () => {
    const something = await functionAsync();
    console.log('hello world')
}

console.log('Before');
aanotherFunction();
console.log('After');
 
