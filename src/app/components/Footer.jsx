import React from 'react';
export default function Footer() {
    return (  
<footer style={{ background: '#222', color: '#fff', padding: '32px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
<div style={{ marginBottom: 16 }}>
  [Redes sociales] | [Contacto directo]
</div>
<div style={{ fontSize: 16, marginBottom: 8, textAlign: 'center' }}>
  Together, we preserve the living heartbeat of world cultures.
</div>
<div style={{ opacity: 0.7, fontSize: 14 }}>
  [Logos de países o aliados]
</div>
</footer> 
    );
}