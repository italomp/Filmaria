import React, { Componet } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header'; 
import PageNotFound from './components/PageNotFound';

/**
 * This component manages the application routes.
 */
const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;