import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importando os ícones
import './menu.css';

const MenuIcon = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="mobile-menu-container">
            <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FontAwesomeIcon icon={faTimes} size="1x"/>
                ) : (
                    <FontAwesomeIcon icon={faBars} size="1x"/>
                )}
            </div>

            <nav className={`mobile-menu-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            <nav className="desktop-menu-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuIcon;
