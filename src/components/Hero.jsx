import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="glow-bg-hero"></div>
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <div className="badge">Livraison rapide dans la ville de Douala 🏍️💨</div>
          <h1 className="hero-title">Vos colis livrés en <span className="gradient-text">Temps Record</span></h1>
          <p className="hero-subtitle">Rapide, sécurisé et fiable. Confiez-nous vos paquets et suivez-les en temps réel jusqu'à destination, partout dans la ville de Douala.</p>
          <div className="hero-cta">
            <a href="#subscribe" className="btn btn-primary btn-large">Programmer un ramassage</a>
            <a href="#services" className="btn btn-outline btn-large">Découvrir nos offres</a>
          </div>
          <div className="hero-social-proof">
            <div className="avatars">
              <img src="https://i.pravatar.cc/100?img=12" alt="User 1" />
              <img src="https://i.pravatar.cc/100?img=25" alt="User 2" />
              <img src="https://i.pravatar.cc/100?img=33" alt="User 3" />
              <img src="https://i.pravatar.cc/100?img=41" alt="User 4" />
              <div className="avatar-more">+5k</div>
            </div>
            <p>Plus de 5000 colis livrés ce mois-ci.</p>
          </div>
        </div>
        <div className="hero-image-wrapper fade-in-up delay-1">
          <img src="/delivery_hero.jpg" alt="Livreur Douala Express" className="hero-image" />
          <div className="floating-card card-1 glass-panel">
            <div className="card-icon">⏱️</div>
            <div className="card-text">
              <h4>Délai moyen</h4>
              <p>45 min</p>
            </div>
          </div>
          <div className="floating-card card-2 glass-panel">
            <div className="card-icon">⭐</div>
            <div className="card-text">
              <h4>Satisfaction</h4>
              <p>4.9/5</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
