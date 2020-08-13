import React, {Component} from "react";

//Style
import {Header} from './header.module.scss'


export default Header;

 render(); {
    return <header className="header">
        <h1 className="header__h1">TODO List</h1>
        <form className="header__form">
            <input type="search" placeholder="Search"/>
        </form>
    </header>
}

