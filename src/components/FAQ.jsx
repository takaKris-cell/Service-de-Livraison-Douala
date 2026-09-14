import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Dans quelles zones de Douala livrez-vous ?',
    answer: 'Nous couvrons toute la ville de Douala et ses environs : Bonanjo, Akwa, Bonabéri, Deïdo, Makepe, Logpom, Kotto, PK, Ndokotti, et bien plus encore. Si votre zone ne figure pas dans la liste, contactez-nous !'
  },
  {
    question: 'Quel est le délai de livraison express ?',
    answer: 'Notre service de livraison express garantit la livraison en moins de 2 heures dans toute la ville de Douala. Le délai exact dépend de la distance entre le point de ramassage et la destination.'
  },
  {
    question: 'Comment puis-je suivre mon colis ?',
    answer: 'Dès que votre commande est confirmée, vous recevez un lien de suivi par SMS et WhatsApp. Vous pouvez voir la position de votre livreur en temps réel sur une carte.'
  },
  {
    question: 'Quels types de colis acceptez-vous ?',
    answer: 'Nous acceptons les documents, les petits colis (jusqu\'à 30 kg), les marchandises, la nourriture et les produits fragiles. Pour les colis lourds ou les déménagements, consultez notre offre "Gros Volume".'
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons les paiements par Mobile Money (MTN MoMo, Orange Money), les espèces à la livraison, et les virements bancaires pour les comptes professionnels.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <h2 className="section-title">Questions Fréquentes</h2>
          <p className="section-subtitle">Tout ce que vous devez savoir sur notre service de livraison.</p>
        </div>

        <div className="faq-container fade-in-up">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
