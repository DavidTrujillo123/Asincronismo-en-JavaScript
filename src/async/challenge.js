import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = async (urlApli) =>{
    const response = await fetch(urlApli);
    const data = await response.json();
    return data;        
}

async function getData(urlApi){
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[5].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}
getData(API);

console.log('aaaaaa');