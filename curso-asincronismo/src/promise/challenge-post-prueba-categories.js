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
    "name": "Volskwagen",
    "image": "https://img2.freepng.es/20180719/lyi/kisspng-volkswagen-beetle-car-volkswagen-touareg-logo-t-roc-5b507c9977be45.1683228615320014334905.jpg"
  }

  postData(`${API}/categories/`,data)
    .then(response => response.json())
    .then(data => console.log(data))