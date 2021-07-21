import React from 'react';
import logo from './../../assets/images/logo.png';
import ListOptions from './../ListOptions/ListOptions';
import './Header.css';

const Header = () => {
    return(
            <div className="header">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                          
                <div className="navbar">
                    <a href="/">Inicio</a>
                    <a href="/">Alquiler</a>
                    <a href="/">Zona de atención</a>
                    <a><ListOptions/></a>
                    <a href="/">Nosotros</a>
                    <a href="/">Novedades</a>
                    <a href="/">Contacto</a>
                </div>
            </div>
    )
}

export default Header;