import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <h2 className="section-title">Nos Offres de Livraison</h2>
          <p className="section-subtitle">Choisissez l'offre qui correspond le mieux à vos besoins d'expédition à Douala.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card glass-panel fade-in-up">
            <div className="service-icon">🛵</div>
            <h3>Livraison Standard</h3>
            <p>Idéal pour les envois non urgents. Livraison garantie sous 24h à 48h n'importe où dans la ville.</p>
            <div className="service-price">À partir de 1000 FCFA</div>
          </div>
          
          <div className="service-card glass-panel featured fade-in-up delay-1">
            <div className="service-badge">Le plus populaire</div>
            <div className="service-icon">⚡</div>
            <h3>Livraison Express</h3>
            <p>Vos colis urgents livrés en moins de 2 heures. Suivi en temps réel inclus.</p>
            <div className="service-price">À partir de 2500 FCFA</div>
          </div>
          
          <div className="service-card glass-panel fade-in-up delay-2">
            <div className="service-icon">🚚</div>
            <h3>Livraison Gros Volume</h3>
            <p>Pour les déménagements, le mobilier ou les marchandises encombrantes nécessitant un utilitaire.</p>
            <div className="service-price">Sur devis</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
