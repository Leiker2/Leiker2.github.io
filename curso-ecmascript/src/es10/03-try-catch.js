try{
    hello(); //Error no esta definida, y entra en error
} catch (error){
    console.log(error);
}

try{
    anotherFn();//No existe la funcion
} catch{
    console.log('Esto es un error'); //Error personalizado con un mensaje mio
}

