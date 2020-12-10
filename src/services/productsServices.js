export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error => error);
}

export const getDetailProduct = (idProduct) => {
    return fetch(`https://fakestoreapi.com/products/${idProduct}`)
    .then(response => response.json())
    .catch(error => error);
}

export default {
    getProducts,
    getDetailProduct
}