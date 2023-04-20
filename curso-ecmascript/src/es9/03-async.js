//Esta es la union de generator con Promise

async function* anotherGenerator (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

//Otro ejemplo
async function arrOfNames(arr){
    for await (let value of arr){
        console.log(value)
    }
}

const names = arrOfNames(['Leiker', 'Alejandra', 'Omar', 'Maikel']);
console.log('after');