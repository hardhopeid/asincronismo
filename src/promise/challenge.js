import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI);
};

/* fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log('hola')
    })
    .catch(error => console.log(error)); */

    fetchData (`${API}/products`)
        .then(Response => Response.json())
        .then(products => {
            console.log(products)
            return fetchData(`${API}/products/${products[0].id}`)
        })
        .then(Response => Response.json())
        .then(products => {
            console.log(products.title);
            return fetchData(`${API}/categories/${products.category.id}`)
        })
        .then(Response => Response.json())
        .then(category => {
            console.log(category.name);
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Finally'));