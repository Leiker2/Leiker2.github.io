//Convierte un array en object
const entries = new Map([['name', 'Leiker'], ['age', 27]]);

console.log(entries)
console.log(Object.fromEntries(entries))