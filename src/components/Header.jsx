import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-section" onClick={() => setIsMenuOpen(false)}>
          <Church size={36} color="var(--color-secondary)" />
          <div className="logo-text">
            <h1>Dwangwa CCAP</h1>
            <p>Mission Church</p>
          </div>
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/leadership" className="nav-link" onClick={() => setIsMenuOpen(false)}>Leadership</NavLink>
          <NavLink to="/ministries" className="nav-link" onClick={() => setIsMenuOpen(false)}>Ministries</NavLink>
          <NavLink to="/sermons" className="nav-link" onClick={() => setIsMenuOpen(false)}>Sermons</NavLink>
          <NavLink to="/events" className="nav-link" onClick={() => setIsMenuOpen(false)}>Events</NavLink>
          <NavLink to="/gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/news" className="nav-link" onClick={() => setIsMenuOpen(false)}>News</NavLink>
          <NavLink to="/admin/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>Admin</NavLink>
          <NavLink to="/contact" className="btn btn-secondary" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
