//Dependencia para node
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//url de la api
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    //nuevo objeto de la dependencia node
    let xhttp = new XMLHttpRequest();
    //metodo para abrir una conexión. 
    //Recibe 3 parametros (tipo, url, bool)
    xhttp.open('GET', urlApi, true);
    //Función anonima. Se encarga del estado de la solicitud
    xhttp.onreadystatechange = (event) =>{
        //0 = No inicializado
        //1 = Loading
        //2 = ya se ejecutó sent
        //3 = descargando la solicitud
        //4 = completado la llada/información
        if(xhttp.readyState === 4){
            //200 = solicitud correcta
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    //Necesario para realizar la llamada
    xhttp.send();
};

//Llamada a la función que recibe 2 parametros
//La url y una funcion anonima con dos parámetros
//(url, (erro1, data1)=>{})
fetchData(`${API}/products`, (erro1,data1)=>{
    //Si existe un error parar la solicitud
    if(erro1){
        return console.error(erro1);
    }

    //Concatenar peticiones 
    //En este caso solo toma el id del primer elemento 
    fetchData(`${API}/products/${data1[1].id}`, (erro2, data2) =>{
        //valdidar error
        if(erro2) return console.error(erro2);

        //tercera peticion
        //? optional changinng
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
            //validar error
            if(error3) return console.log(error3);
            console.log(data1[1]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

