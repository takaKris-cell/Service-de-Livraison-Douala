import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alain Nganou',
    role: 'Commerçant, Marché Central',
    text: 'Douala Express a transformé mon business. Je peux livrer mes commandes à mes clients en moins de 2 heures. La fiabilité est exceptionnelle !',
    avatar: 'https://i.pravatar.cc/100?img=11',
    rating: 5,
  },
  {
    name: 'Clarisse Mbock',
    role: 'E-commerçante',
    text: 'Le suivi en temps réel est incroyable. Mes clients adorent savoir exactement où se trouve leur colis. Mon taux de satisfaction a explosé.',
    avatar: 'https://i.pravatar.cc/100?img=44',
    rating: 5,
  },
  {
    name: 'Yves Tchana',
    role: 'Restaurateur, Bonanjo',
    text: 'Pour un restaurant, la rapidité est tout. Douala Express livre nos plats encore chauds. C\'est le partenaire idéal pour la restauration.',
    avatar: 'https://i.pravatar.cc/100?img=53',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-light">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle">Des milliers de particuliers et d'entreprises nous font confiance chaque jour.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card glass-panel fade-in-up ${i > 0 ? `delay-${i}` : ''}`}>
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
