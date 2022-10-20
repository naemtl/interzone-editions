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
                    <Link onClick={toggleMenu} to="/">

                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/odm">

                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/interviews">

                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/bodywork">

                    </Link>
                </li>
                <li className="navmenu__list-item">
                    <Link onClick={toggleMenu} to="/about">

                    </Link>
                </li>
            </ol>
        </nav>
    );
};

export default Navmenu;
