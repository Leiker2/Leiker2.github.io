//Promesas
//La promesa es como lo dice el nombre, es un codigo que promete ser utilizado en algun momento
const anotherFuntion = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve('Hey!!');
        } else {
            reject ('Oops!');
        }
    })
}

anotherFuntion()
    //.then se utiliza para cuando se cumpla la condicion if
    .then(response => console.log(response))
    //catch sale un error cuando no se cumpla, en el .then no puede haber ;, y pueden haber mas de 1 then
    .catch(err => console.log(err))
    //Finally nos retorna un codigo si se realizo o no la promesa
    .finally(() => console.log('finally'));
