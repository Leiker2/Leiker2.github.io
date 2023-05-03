import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi){
    const response = fetch(urlApi, {
        method: 'DELETE',
    });
    return response;
}

  postData(`${API}/products/213`)
    .then(response => {
        if (response.ok) {
        console.log(`Elemento con ID 213 eliminado exitosamente.`);
        } else {
        console.error(`Error al eliminar elemento con ID 213.`);
        }
    })
    .catch(error => {
        console.error(`Error al eliminar elemento con ID 213: ${error}`);
    });