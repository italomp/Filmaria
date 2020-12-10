import React, { Component } from 'react';
import './style.css'
import Routes from './routes';

/**
 * This component represents the application 
 * main component.
 * 
 * This application make a requisition for an
 * external api and receives a movie list.
 * This movies are listed in home page.
 * This application also show a page with
 * each movie iformations.
 */
class App extends Component{ 

    /**
     * This is the component constructor
     * @param props is the object that
     * contains the properties delivered as parameter
     * to the component 
     */
    constructor(props){
        super(props);
       
    }

    /**
     * This method renders the Routes component
     */
    render(){
        return(
            <div className="container">
                <Routes />
            </div>
        );
    }
}

export default App;