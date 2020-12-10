
import productsServices from "../services/productsServices";
// -----------------
// INITIAL STATE
export const ProductsState = {
    products: [],
    error: null
}

// -----------------
// ACTIONS TYPES
export const ACTIONS_TYPES = {
    FETCH_PRODUCTS_START: 'Products/FETCH_PRODUCTS_START',
    FETCH_PRODUCTS_SUCCESS: 'Products/FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAIL: 'Products/FETCH_PRODUCTS_FAIL'
}


// ----------------
// ACTION CREATORS
export const actionCreators = {
    getAllProducts: () => async (dispatch, getState) => {
        dispatch({ type: ACTIONS_TYPES.FETCH_PRODUCTS_START })
        const appState = getState();
        console.debug(appState);
        try{
            const response = await productsServices.getProducts();
            dispatch({ type: ACTIONS_TYPES.FETCH_PRODUCTS_SUCCESS, products: response })
        }catch(error) {
            dispatch({ type: ACTIONS_TYPES.FETCH_PRODUCTS_FAIL, error })
        }
    }
};

// ----------------
// REDUCER 
export const reducer = (state = ProductsState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.FETCH_PRODUCTS_START:
            return { ...state };
        case ACTIONS_TYPES.FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.products };
        case ACTIONS_TYPES.FETCH_PRODUCTS_FAIL:
            return { ...state, error: action.error };
        default:
            return state;
    }
};
