import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';
import fcbLogo from '../assets/images/fcb_logo.png'; // Adjust the path as needed

function Header() {
  return (
    <header className="main-header">
      <div className="logo-container">
        <Link to="/">
          <img src={fcbLogo} alt="FC Barcelona Logo" className="logo" />
        </Link>
      </div>

      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bestseller">Bestseller</Link></li>
          <li><Link to="/kits">Kits</Link></li>
          <li><Link to="/training">Training</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
        </ul>
      </nav>

      <div className="search-container">
        <input type="search" placeholder="Search products..." aria-label="Search products" />
        <button type="button" aria-label="Search">🔍</button>
      </div>
    </header>
  );
}

export default Header;
