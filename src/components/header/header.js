import React, { useEffect, useState } from "react";
import MenuIcon from "./menu/menu";
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'



const Header = () => {

    const [theme, setTheme] = useState('light'); // Estado para armazenar o tema

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme); 

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);


    return (
        <div className="header-container">
            <MenuIcon />
            <p> &lt; Matheus Rocha <span>Dev</span> /&gt;</p>
            <p onClick={toggleTheme} className="theme-change">
              {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />} 
            </p>
        </div>
    )   
}

export default Header;