import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGlobe } from 'react-icons/fc';

export default function Header() {
    return (
        <header>
            
            <FcGlobe className="logo"/>
            <h1>Globe Travel</h1>
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
