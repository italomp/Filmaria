import React, { Component } from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import LogoHeader from './../../assetes/logo_header.svg';

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
                <Link to="/">
                    <img src={LogoHeader} alt="Logo do cabeçalho"/>
                </Link>
            </div>
        );
    }
}

export default Header;