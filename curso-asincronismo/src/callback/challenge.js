const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fectchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        //0: No se ha inicializado, 1:todavia no se ha llamado el valor, 2: cuando ya se ejecuto el valor, 3: descargando o interactuando con la solicitud, 4: cuando ya se completo la llamada
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){
                return callback(null,JSON.parse(xhttp.responseText));
            }else{
                const error = new Error ('Error' + urlApi);
                return callback(error,null);
            }
        } 
    }
    xhttp.send();
}

fectchData(`${API}/products`, function (error1, data1){
    if(error1)return console.error(error1);
    fectchData(`${API}/products/${data1[0].id}`, function (error2,data2){
        if(error2) return console.error(error2);
        fectchData(`${API}/categories/${data2?.category?.id}`,function (error3,data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});