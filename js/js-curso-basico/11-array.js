// arrays []

var frutas = ['Manzana', 'Pera', 'Banana', 'Platano' , 'Cereza', 'Fresa'];

console.log(frutas);
console.log(frutas[1]);// accedemos al array en la posicion 1

var masFrutas = frutas.push('Uvas'); //Agregamos elementos en la ultima posicion de futas

var ultimo = frutas.pop('Uvas'); //pop elimina el ultimo elemento del array

var nuevaLongitud = frutas.unshift('Uvas');//unshift nos ayuda a agregar elementos al inicio del array

var borrarFrutas = frutas.shift('Uvas');//shift elimina al primer elemento del array

var posicion = frutas.indexOf('Platano'); //Nos devuelve el valor donde esta lo que buscamos
