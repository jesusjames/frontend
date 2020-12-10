export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error => error);
}

export default {
    getProducts
}