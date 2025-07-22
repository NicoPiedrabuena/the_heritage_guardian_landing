import React from 'react';
export default function CountrySection() {
    return (
<section style={{ background: '#f8fafc', padding: '48px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<h2 style={{ fontSize: 24, marginBottom: 16 }}>Secciones por País</h2>
<div style={{ maxWidth: 700, width: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 24 }}>
  <h3 style={{ fontSize: 20, marginBottom: 8 }}>Marruecos</h3>
  <img src="/globe.svg" alt="Imagen de Marruecos" style={{ width: 80, marginBottom: 12 }} />
  <div style={{ borderLeft: '3px solid #222', paddingLeft: 16 }}>
    <div style={{ marginBottom: 16 }}>
      <strong>Tbourida – 2023</strong>
      <div>[Video del evento]</div>
      <div>Texto explicativo</div>
      <div>Galería de fotos</div>
      <div>Créditos o instituciones involucradas</div>
    </div>
    <div style={{ marginBottom: 16 }}>
      <strong>Salon du Cheval – 2024</strong>
      <div>[Video del evento]</div>
      <div>Texto explicativo</div>
      <div>Galería de fotos</div>
      <div>Créditos o instituciones involucradas</div>
    </div>
    <div style={{ marginBottom: 16 }}>
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