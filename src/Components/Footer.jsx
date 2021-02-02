import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer><NavLink exact to="/"><FcGlobe className="footer-logo"/></NavLink><p>© {(new Date().getFullYear())} Globe Travel</p></footer>
    )
}
