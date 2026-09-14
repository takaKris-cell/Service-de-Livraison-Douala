import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <h2 className="section-title">Comment ça marche ?</h2>
          <p className="section-subtitle">Envoyez un colis en quelques minutes, c'est aussi simple que ça.</p>
        </div>
        
        <div className="steps-container">
          <div className="step fade-in-up">
            <div className="step-number">1</div>
            <h3>Passez commande</h3>
            <p>Remplissez le formulaire avec l'adresse de ramassage, la destination et le type de colis.</p>
          </div>
          <div className="step-connector fade-in-up delay-1"></div>
          <div className="step fade-in-up delay-1">
            <div className="step-number">2</div>
            <h3>On récupère votre colis</h3>
            <p>Un livreur se présente chez vous à l'heure convenue pour prendre votre paquet en charge.</p>
          </div>
          <div className="step-connector fade-in-up delay-2"></div>
          <div className="step fade-in-up delay-2">
            <div className="step-number">3</div>
            <h3>Livré en temps record</h3>
            <p>Suivez la livraison en temps réel. Le destinataire reçoit son colis et vous êtes notifié.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
