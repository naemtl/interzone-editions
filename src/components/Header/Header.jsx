import { useState } from "react";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Navmenu from "./Navmenu/Navmenu";

import './Header.scss'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <header className="header">
            <HamburgerButton menuOpen={menuOpen} clickCallback={toggleMenu} />
            <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </header>
    )
};

export default Header;
