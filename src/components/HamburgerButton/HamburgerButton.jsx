import React from 'react';

import "./HamburgerButton.scss";

const HamburgerButton = ({ menuOpen, clickCallback }) => {
    return (
        <button className='hamburger-button' onClick={clickCallback}>
            <span
                className={`hamburger-button__burger ${menuOpen ? 'hamburger-button__burger--open' : ''}`}
            >
            </span>
        </button>
    )
};

export default HamburgerButton;
