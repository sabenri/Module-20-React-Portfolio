import React from "react";
import {NavLink} from 'react-router-dom';
import '../styles/navbar.css';

function Navbar () {
    return (
        <nav className="navbar">
            <ul className="left-links">
                <li>
                    <NavLink
                    to = '/home'
                    className={({ isActive}) => isActive ? 'Active-Link' : undefined}
                    >
                        HOME
                    </NavLink>
                </li>

            </ul>
            <ul className="right-links">
                <li>
                    <NavLink
                    to='/resume'
                    className={({ isActive}) => isActive ? 'Active-Link' : undefined}
                    >
                        RESUME
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to='/about'
                    className={({ isActive}) => isActive ? 'Active-Link' : undefined}
                    >
                        ABOUT ME
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to='/contact'
                    className={({ isActive}) => isActive ? 'Active-Link' : undefined}
                    >
                        CONTACT ME
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;