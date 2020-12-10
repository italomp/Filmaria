import React, { Componet } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header'; 
import PageNotFound from './pages/PageNotFound';
import Movie from './pages/Movie';

/**
 * This component manages the application routes.
 * It has the header component that is always showed
 * and has also three alternative routes:
 * home(/), movie (/movie/:id), page not found (*)
 */
const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/movie/:id" component={Movie} />
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;