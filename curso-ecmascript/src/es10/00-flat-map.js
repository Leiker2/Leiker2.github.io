//En array se puede anidar array dentro de array, pero con .flat lo podemos aplanar
const array = [1,1,2,3,10,3, [1,2,3,4,4, [10,50,80]]];
const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];

numbers.flat(1) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
numbers.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//flatmap, va a hacer lo que hace un arrow function y a la vez lo aplana
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));
//En este ejemplo el va a imprimir el numero del array y al lado lo multiplica por 2

