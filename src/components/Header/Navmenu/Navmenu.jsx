import React from 'react';
import { Link } from "react-router-dom";
import "./Navmenu.scss";



const Navmenu = ({ menuOpen, toggleMenu }) => {

    return (
        <nav className={`navmenu ${menuOpen ? 'navmenu--open' : ''}`}>
            <div className="navmenu__top">
                {
                    // do not delete this div
                }
            </div>
            <ol className="navmenu__list">
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/releases">
                        Releases
                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/about">
                        About
                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/subscribe">
                        Subscribe
                    </Link>
                </li>
            </ol>
        </nav>
    );
};

export default Navmenu;
