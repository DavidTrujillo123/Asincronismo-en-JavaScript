import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//Post data = agregar info

function postData(urlApi, data){
    //estructura para realizar una solicitud fetch
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        //opcionales
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        //transformar a string el objeto
        body: JSON.stringify(data)
    });
    return response;
}

//Nuevo objeto a agregar
const data = {
    "title": "New Product Example Course",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}


postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));
