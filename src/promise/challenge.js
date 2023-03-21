import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(()=>{
//         console.log('hola');
//     })
//     .catch(error => console.log(error));

//Una solicitud fetch siempre necesita un response
//primera solicitud
fetchData(`${API}/products`)
    //respuesta de la primera solicitud
    .then(response => response.json())
    //segunda solicitud
    .then(products => {
       // console.log(products); //product hace referencia a response
        return fetchData(`${API}/products/${products[3].id}`)
    })
    .then(response => response.json())//2da respuesta
    //tercera solicitud
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())//3ra respuesta
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally (()=> console.log('Finally'));