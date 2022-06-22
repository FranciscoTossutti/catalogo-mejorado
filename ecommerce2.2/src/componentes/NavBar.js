import React from "react";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="nav">
            <a href="#" className="logo">Logo</a>
            <ul className="nav-menu">
                <li className="nav-menu-item">Inicio</li>
                <li className="nav-menu-item">Productos</li>
                <li className="nav-menu-item">Contacto</li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;