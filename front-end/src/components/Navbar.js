import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/hotels" className="nav-link">Hotels</Link>
            <Link to="/restaurants" className="nav-link">Restaurants</Link>
            <Link to="/tourist-spots" className="nav-link">Tourist Spots</Link>
        </nav>
    );
};

export default Navbar;
