
var lastName = 'Leiker';
lastName = 'Ale';
console.log(lastName);



//No se puede reasignar con const
const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if (true){
        var fruit1 = 'apple'; //function scope, se puede utilizar fuera
        let fruit2 = 'kiwi'; //Solo pueden ser utilizadas dentro del bloque
        const fruit3 = 'banana';//block scope
        console.log(fruit3);
        console.log(fruit2);
    }
    console.log(fruit1);
}

fruits();
