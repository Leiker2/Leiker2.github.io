let person = {name: 'Leiker', age: 27};
let country = 'VE';

let data = { ...person, country };
console.log(data);


//rest

function sun(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sun (1, 1, 1, 2, 3, 5, 6, 7);


