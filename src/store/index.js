import * as Counter from './Counter';
import * as Products from './Products';
import * as Cart from './Cart';
import * as Detail from './Detail';

// The top-level state object
export const ApplicationState = {
    counter: Counter.CounterState,
    products: Products.ProductsState,
    cart: Cart.CartState,
    detail: Detail.DetailState
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    products: Products.reducer,
    cart: Cart.reducer,
    detail: Detail.reducer
};
