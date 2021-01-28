import React from 'react';
import { FcGlobe } from 'react-icons/fc';

export default function Footer() {
    return (
        <footer><FcGlobe className="footer-logo"/><p>© {(new Date().getFullYear())} Globe Travel</p></footer>
    )
}
