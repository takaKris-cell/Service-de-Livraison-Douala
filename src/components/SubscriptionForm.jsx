import React, { useState } from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pickupAddress: '',
    deliveryAddress: '',
    packageType: '',
    serviceType: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="subscribe" className="section bg-light">
        <div className="container">
          <div className="form-success text-center fade-in-up">
            <div className="success-icon">✅</div>
            <h2>Commande enregistrée !</h2>
            <p>Merci ! Un de nos livreurs vous contactera dans les plus brefs délais pour confirmer le ramassage.</p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Passer une nouvelle commande</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="subscribe" className="section bg-light">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <h2 className="section-title">Programmer un envoi</h2>
          <p className="section-subtitle">Remplissez ce formulaire et un livreur prendra en charge votre colis.</p>
        </div>

        <form className="subscription-form glass-panel fade-in-up" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Nom complet *</label>
              <input className="form-control" type="text" id="fullName" name="fullName" placeholder="Ex: Jean-Paul Nkam" required value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Numéro de téléphone *</label>
              <input className="form-control" type="tel" id="phone" name="phone" placeholder="Ex: 6 XX XX XX XX" required value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="pickupAddress">Adresse de ramassage *</label>
              <input className="form-control" type="text" id="pickupAddress" name="pickupAddress" placeholder="Ex: Akwa, Rue Joss" required value={formData.pickupAddress} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="deliveryAddress">Adresse de livraison *</label>
              <input className="form-control" type="text" id="deliveryAddress" name="deliveryAddress" placeholder="Ex: Bonabéri, Carrefour Saker" required value={formData.deliveryAddress} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="packageType">Type de colis *</label>
              <select className="form-control" id="packageType" name="packageType" required value={formData.packageType} onChange={handleChange}>
                <option value="">Sélectionner...</option>
                <option value="document">Document / Enveloppe</option>
                <option value="small">Petit colis (moins de 5 kg)</option>
                <option value="medium">Colis moyen (5 - 15 kg)</option>
                <option value="large">Gros colis (15 - 30 kg)</option>
                <option value="food">Nourriture / Produit alimentaire</option>
                <option value="fragile">Produit fragile</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="serviceType">Type de service *</label>
              <select className="form-control" id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange}>
                <option value="">Sélectionner...</option>
                <option value="standard">Standard (24 - 48h) — 1000 FCFA</option>
                <option value="express">Express (moins de 2h) — 2500 FCFA</option>
                <option value="bulk">Gros Volume — Sur devis</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="notes">Instructions spéciales (optionnel)</label>
            <textarea className="form-control" id="notes" name="notes" rows="3" placeholder="Ex: Appeler avant de venir, colis fragile, etc." value={formData.notes} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-large btn-block">Envoyer ma commande</button>
        </form>
      </div>
    </section>
  );
};

export default SubscriptionForm;
