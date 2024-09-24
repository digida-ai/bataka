// import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar-backside-frame"></div>
            <header className="navbar-header">
                <Link to="/" className="title">Bataka Heritage Centre</Link>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/" className="navbar-link">Home</Link></li>
                        <li><Link to="/about" className="navbar-link">About</Link></li>
                        <li><Link to="/festivals" className="navbar-link">Festivals</Link></li>
                        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;

