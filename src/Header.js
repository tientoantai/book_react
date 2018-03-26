import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <header>
                <NavBar></NavBar>
            </header>
        )
    }
}

export default Header;
