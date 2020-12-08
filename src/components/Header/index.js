import React, { Component } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

/**
 * This component representes the page header.
 */
class Header extends Component{
    render(){
        return(
            <div className="header">
                <Link to="/">Filmaria</Link>
            </div>
        );
    }
}

export default Header;