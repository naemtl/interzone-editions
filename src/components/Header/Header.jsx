import { useEffect, useState } from "react";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Navmenu from "./Navmenu/Navmenu";

import './Header.scss'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [solidBackground, setSolidBackground] = useState(false);

    const changeBackground = () => (
        window.scrollY >= 1 ? setSolidBackground(true) : setSolidBackground(false)
    )


    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    });


    return (
        <header className={`header ${solidBackground ? 'header--black' : 'header--transparent'}`}>
            <HamburgerButton menuOpen={menuOpen} clickCallback={toggleMenu} />
            <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </header>
    )
};

export default Header;
