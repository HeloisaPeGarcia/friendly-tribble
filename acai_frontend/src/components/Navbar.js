// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Açaí Delícia</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
