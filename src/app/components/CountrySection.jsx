import React from 'react';
export default function CountrySection() {
    return (
<section className="country-section">
  <TitleWithRule text="Secciones por País" className="country-section-h2 scroll-reveal" data-scroll-once="true" noRule />
  <div className="country-card scroll-reveal" data-scroll-once="true">
    <h3 className="country-card-h3">Marruecos</h3>
    <img src="/globe.svg" alt="Imagen de Marruecos" className="country-card-image" />
    <div className="country-card-content">
      <div className="country-event">
        <strong>Tbourida – 2023</strong>
        <div>[Video del evento]</div>
        <div>Texto explicativo</div>
        <div>Galería de fotos</div>
        <div>Créditos o instituciones involucradas</div>
      </div>
      <div className="country-event">
        <strong>Salon du Cheval – 2024</strong>
        <div>[Video del evento]</div>
        <div>Texto explicativo</div>
        <div>Galería de fotos</div>
        <div>Créditos o instituciones involucradas</div>
      </div>
      <div className="country-event">
        <strong>Tan Tan Festival – 2024</strong>
        <div>[Video del evento]</div>
        <div>Texto explicativo</div>
        <div>Galería de fotos</div>
        <div>Créditos o instituciones involucradas</div>
      </div>
    </div>
  </div>
</section>
    );
}