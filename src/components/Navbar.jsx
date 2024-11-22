import React from "react";
import "../styles/Navbar.css";


export default function Navbar ()
{
    return (
        <nav className="Navbar">
            <div className="logo"> JuvoU </div> 
            <ul className="nav-links">
                <li> <a href="#home">Home</a> </li>
                <li> <a href="#about">About Us</a> </li>
                <li> <a href="#services">Services</a> </li>
                <li> <a href="#contact">Contact Us</a> </li>
            </ul>
        </nav>
    );
}
