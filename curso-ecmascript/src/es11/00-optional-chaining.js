const users = {
    leikerdgs: {
        country: 'VE'
    },
    ana:{
        country:'PE'
    }
}

console.log(users?.bebeloper?.country)
console.log(users?.leikerdgs?.country)
//optional chaining pregunta si existe el valor, si no existe manda undefined, esto para que no se rompa nuestro codigo
