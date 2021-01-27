import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <img className="logo" src="https://via.placeholder.com/100.png?text=Logo" alt=""/>
            <div className="nav-wrapper">
                <nav>
                    <NavLink to="/" className="link">Home</NavLink>
                    <NavLink to="/about" className="link">About</NavLink>
                    <NavLink to="/blog" className="link">Blog</NavLink>
                    <NavLink to="/contact" className="link">Contact</NavLink>
                    
                </nav>
            </div>
        </header>
    )
}
