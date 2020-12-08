import React, { Component } from 'react';
import './style.css'
import Routes from './routes';

/**
 * This component represents the application 
 * main component.
 */
class App extends Component{ 

    constructor(props){
        super(props);
       
    }

    render(){
        return(
            <div className="container">
                <Routes />
            </div>
        );
    }
}

export default App;