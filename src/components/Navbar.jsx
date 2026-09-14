import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">📦</span>
            <span className="logo-text">Douala <span className="highlight">Express</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Nos Services</a></li>
            <li><a href="#how-it-works">Comment ça marche</a></li>
            <li><a href="#testimonials">Avis</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#subscribe" className="btn btn-primary">Expédier maintenant</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
            <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Nos Services</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>Comment ça marche</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Avis</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
          <li><a href="#subscribe" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Expédier maintenant</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
