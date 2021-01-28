import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGlobe } from 'react-icons/fc';

export default function Header() {
    return (
        <header>
            <NavLink exact to="/"><FcGlobe className="logo"/></NavLink>
            <NavLink exact to="/" className="company"><h1>Globe Travel</h1></NavLink>
            <div className="nav-wrapper">
                <nav>
                    <NavLink exact to="/" className="link">Home</NavLink>
                    <NavLink to="/blog" className="link">Blog</NavLink>
                    <div className="dropdown">
                        <NavLink to="/trips" className="link dropdown-button">Trips</NavLink>
                        <div class="dropdown-content">
                            <a href="https://www.lifeblue.com" target="blank">Lifeblue</a>
                            <a href="https://www.gmjacobsdev.com" target="blank">Gabrielle's Portfolio</a>
                            <a href="https://github.com/GabbyJ/lifeblue-blog" target="blank">Site Github Repo</a>
                        </div>
                    </div>
                    <NavLink to="/about" className="link">About</NavLink>
                    <NavLink to="/contact" className="link">Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}
