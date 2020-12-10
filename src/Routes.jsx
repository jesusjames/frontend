import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import ProductsPage from './pages/Products';
import DetailPage from './pages/Detail';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/products' component={ProductsPage} />
            <Route path='/detail/:idProduct' component={DetailPage} />
            <Redirect exact from="/" to="/products" />
        </Switch>
    )
}

export default Routes;