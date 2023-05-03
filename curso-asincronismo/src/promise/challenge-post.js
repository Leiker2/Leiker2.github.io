import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Volskwagen Scirocco",
    "price": 10000,
    "description": "un automóvil deportivo que combina elegancia y potencia en un diseño impresionante. Este coche cuenta con un motor turboalimentado que le da una gran aceleración y un manejo ágil en curvas.",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`,data)
    .then(response => response.json())
    .then(data => console.log(data))