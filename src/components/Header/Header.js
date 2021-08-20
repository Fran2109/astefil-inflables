import React from 'react';
import logo from './../../assets/images/logo.png';
import ListOptions from './../ListOptions/ListOptions';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return(
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                          
                <div className="navbar">
                    <a href="/">Inicio</a>
                    <a href="/">Alquiler</a>
                    <Link to="/Zona_de_Atencion">Zona de atención</Link>
                    <a><ListOptions/></a>
                    <a href="/">Nosotros</a>
                    <a href="/">Novedades</a>
                    <Link to="/Consulta">Consulta</Link>
                </div>
            </div>
    )
}

export default Header;