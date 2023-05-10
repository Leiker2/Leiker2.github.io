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

const fnasync = () => {
    return new Promise ((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Async!'),5000)
            : reject(new Error('error!!'));
    });
}

const anotherFunction = async () => {
    const something = await fnasync();
    console.log('hello');
}

console.log('before');
anotherFunction();
console.log('afterr!');
