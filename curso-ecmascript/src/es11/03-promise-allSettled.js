//La logica es que si todas las promise se han ejecutado, nos revuelva un codigo

//falla la primera, pero las otras dos se cumple
const promise1 = new Promise ((resolve,reject) => reject('reject'));
const promise2 = new Promise ((resolve,reject) => resolve('resolve'));
const promise3 = new Promise ((resolve,reject) => resolve('resolve2'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))