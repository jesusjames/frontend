import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Counter from './components/Counter';
import Products from './pages/Products';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/products' component={Products} />
            <Route path='/counter' component={Counter} />
            <Redirect exact from="/" to="/products" />
        </Switch>
    )
}

export default Routes;