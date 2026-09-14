import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">📦</span>
              <span className="logo-text">Douala <span className="highlight">Express</span></span>
            </a>
            <p>Le service de livraison le plus rapide et le plus fiable de la ville de Douala. Vos colis, notre priorité.</p>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Livraison Standard</a></li>
              <li><a href="#services">Livraison Express</a></li>
              <li><a href="#services">Gros Volume</a></li>
              <li><a href="#subscribe">Passer commande</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Zones desservies</h4>
            <ul>
              <li><a href="#">Bonanjo</a></li>
              <li><a href="#">Akwa</a></li>
              <li><a href="#">Bonabéri</a></li>
              <li><a href="#">Makepe / Logpom</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+237655000000">📞 +237 655 00 00 00</a></li>
              <li><a href="mailto:contact@douala-express.cm">✉️ contact@douala-express.cm</a></li>
              <li><a href="#">📍 Akwa, Douala - Cameroun</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Douala Express. Tous droits réservés.</p>
          <div className="social-icons">
            <a href="#" aria-label="WhatsApp">📱</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
