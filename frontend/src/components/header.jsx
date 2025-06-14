import React from 'react';
import '../assets/styles/header.css';
import fcbLogo from '../assets/images/fcb_logo.png'; // Adjust the path as needed

function Header() {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={fcbLogo} alt="FC Barcelona Logo" className="logo" />
      </div>

      <nav className="main-nav">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/bestseller">Bestseller</a></li>
          <li><a href="/kits">Kits</a></li>
          <li><a href="/training">Training</a></li>
          <li><a href="/accessories">Accessories</a></li>
        </ul>
      </nav>

      <div className="search-container">
        <input type="search" placeholder="Search products..." aria-label="Search products" />
        <button type="button" aria-label="Search">🔍</button>
      </div>

      <button className="theme-toggle" aria-label="Toggle dark mode">🌙</button>
    </header>
  );
}

export default Header;
