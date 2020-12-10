import React, { Component } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

/**
 * This component representes the page header.
 */
class Header extends Component{

    /**
     * This method renders the Link component that
     * takes the user to home page.
     */
    render(){
        return(
            <div className="header">
                <Link to="/">Filmaria</Link>
            </div>
        );
    }
}

export default Header;