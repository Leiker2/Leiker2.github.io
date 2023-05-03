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
    "description": "Un automóvil deportivo que combina elegancia y potencia en un diseño impresionante. Este coche cuenta con un motor turboalimentado que le da una gran aceleración y un manejo ágil en curvas.",
    "categoryId": 25,
    "images": ["https://th.bing.com/th/id/R.3ac053377a4cdeeb653abde6ac3d9bf7?rik=z%2fClESORCkX8lQ&riu=http%3a%2f%2frichmonds.com.au%2fwp-content%2fuploads%2f2017%2f08%2fVW-Scirocco-White-3.jpg&ehk=%2fqzGnfcfElN%2fMbtLf9xBMGHu2jcop%2bYnYQXNiBFPbrU%3d&risl=&pid=ImgRaw&r=0"]
  }

  postData(`${API}/products`,data)
    .then(response => response.json())
    .then(data => console.log(data))