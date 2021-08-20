import React from 'react';
import './Footer.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <span style={{margin:"10px"}}>Datos de contacto</span>
                <div className="option">
                    <a href="tel:+541162263170" target="_blank">
                        <FaPhoneAlt style={{ width: "20px", height: "20px", marginRight:"5px" }}/>
                        <span>11-62263170</span>
                    </a>
                    <a href="tel:+541155911624" target="_blank">
                        <FaPhoneAlt style={{ width: "20px", height: "20px", marginRight:"5px" }}/>
                        <span>11-55911624</span>
                    </a>
                </div>
                <div className="option">
                    <a href="https://api.whatsapp.com/send?phone=541162263170" target="_blank"> 
                        <IoLogoWhatsapp style={{ width: "20px", height: "20px", marginRight:"5px" }}/>
                        <span>11 62263170</span>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=541155911624" target="_blank"> 
                        <IoLogoWhatsapp style={{ width: "20px", height: "20px", marginRight:"5px" }}/>
                        <span>11 55911624</span>
                    </a>
                </div>
                <div className="option">
                    <a href="mailto:astefil.inflables@gmail.com" id="email1" target="_blank"> 
                        <IoMail style={{ width: "20px", height: "20px", marginRight:"5px" }}/>
                        <span>astefil.inflables@gmail.com</span>
                    </a>
                </div>
                
            </div>
            <div className="contact">
                <span style={{margin:"10px"}}>Seguinos en nuetras Redes</span>
                <div className="option">
                    <a href="https://www.facebook.com/astefilinflables/" target="_blank">
                        <FaFacebook style={{ width: "20px", height: "20px", marginRight:"5px" }}/>
                        <span>@Astefil.inflables</span> 
                    </a>
                </div>
                <div className="option">
                    <a href="https://www.instagram.com/astefil.inflables/" target="_blank">
                        <FaInstagram style={{ width: "20px", height: "20px", marginRight:"5px" }}/>
                        <span>@astefil.inflables</span>
                    </a>
                </div>
            </div>

            <div className="ask">
                <span style={{margin:"10px"}}>Consultas</span>
                <p>Contestamos tus consultas a traves de <a href="https://api.whatsapp.com/send?phone=541162263170" target="_blank">Whatsapp</a>, <a href="https://www.facebook.com/astefilinflables/" target="_blank">Facebook</a> e <a href="https://www.instagram.com/astefil.inflables/" target="_blank">Instagram</a>.</p>
                <p>O completa el formulario de consulta haciendo click <Link to="/Consulta"><u> <b>aqui</b> </u></Link></p>
            </div>
        </div>
        
    )
}

export default Footer;