//funciones normales
function square (num){
    return num * num;
}

//arrow function
const square = (num) => {
    return num * num;
}

//arrow function para reducir el codigo
const squeare = num => num * num;

//probando
const fullName = (name, lastName) => console.log(name + lastName) ;

fullName('Leiker', 'Gomez');