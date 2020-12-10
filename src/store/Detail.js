
import productsServices from "../services/productsServices";
// -----------------
// INITIAL STATE
export const DetailState = {
    detail: [],
    error: null
}

// -----------------
// ACTIONS TYPES
export const ACTIONS_TYPES = {
    FETCH_GETPRODUCT_START: 'Detail/FETCH_GETPRODUCT_START',
    FETCH_GETPRODUCT_SUCCESS: 'Detail/FETCH_GETPRODUCT_SUCCESS',
    FETCH_GETPRODUCT_FAIL: 'Detail/FETCH_GETPRODUCT_FAIL'
}


// ----------------
// ACTION CREATORS
export const actionCreators = {
    getDetailProducts: (idProduct) => async (dispatch, getState) => {
        dispatch({ type: ACTIONS_TYPES.FETCH_GETPRODUCT_START })
        try{
            const response = await productsServices.getDetailProduct(idProduct);
            dispatch({ type: ACTIONS_TYPES.FETCH_GETPRODUCT_SUCCESS, detail: response })
        }catch(error) {
            dispatch({ type: ACTIONS_TYPES.FETCH_GETPRODUCT_FAIL, error })
        }
    }
};

// ----------------
// REDUCER 
export const reducer = (state = DetailState, action) => {
    const {type, detail, error} = action;
    switch (type) {
        case ACTIONS_TYPES.FETCH_GETPRODUCT_START:
            return { ...state };
        case ACTIONS_TYPES.FETCH_GETPRODUCT_SUCCESS:
            return { ...state, detail };
        case ACTIONS_TYPES.FETCH_GETPRODUCT_FAIL:
            return { ...state, error };
        default:
            return state;
    }
};
