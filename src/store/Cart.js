import productsServices from "../services/productsServices";
// -----------------
// INITIAL STATE
export const CartState = {
    cart: [],
    total: 0,
    error: null
}

// -----------------
// ACTIONS TYPES
export const ACTIONS_TYPES = {
    PRODUCTS_ADD_SUCCESS: 'Cart/PRODUCTS_ADD_SUCCESS',
    PRODUCTS_ADD_FAIL: 'Cart/PRODUCTS_ADD_FAIL'
}


// ----------------
// ACTION CREATORS
export const actionCreators = {
    addProductToCart: (productId) => async (dispatch, getState) => {
        try{
            const appState = getState();
            const {cart: {cart}, products: {products: listProducts}} = appState;
            const cartArray = [...cart];
            console.log(cartArray);
            const products = listProducts.length === 0 ? 
                await productsServices.getProducts()
                : listProducts;
            cartArray.push(products.find(prod => prod.id === productId));
            const total = cartArray.reduce((acu, value) => acu + (value['price'] || 0), 0);
            dispatch({ type: ACTIONS_TYPES.PRODUCTS_ADD_SUCCESS, cart: cartArray, total})
        }catch(error) {
            dispatch({ type: ACTIONS_TYPES.PRODUCTS_ADD_FAIL, error })
        }
    }
};

// ----------------
// REDUCER 
export const reducer = (state = CartState, action) => {
    const {type, cart, total, error} = action;
    switch (type) {
        case ACTIONS_TYPES.PRODUCTS_ADD_SUCCESS:
            return { ...state, cart, total };
        case ACTIONS_TYPES.PRODUCTS_ADD_FAIL:
            return { ...state, error };
        default:
            return state;
    }
};
