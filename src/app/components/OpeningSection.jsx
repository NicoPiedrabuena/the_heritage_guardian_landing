import React from 'react'; 
export default function OpeningSection() {
    return (
<section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
  <div style={{ position: 'absolute', top: 24, left: 24, fontWeight: 'bold', fontSize: 20 }}>
    <img src="logo/logo.png" alt="Logo" style={{ width: 120, height: 120 }} />
  </div>
  <div style={{ textAlign: 'center', zIndex: 1 , paddingTop: '400px', color:'white' }}>
    <h1 style={{ fontSize: 106, margin: 0 }}>The Heritage <br/> Guardian</h1>
    <h2 style={{ fontSize: 40, fontWeight: 400, marginTop: 8 }}>A Global Alliance for Living Culture</h2>
  </div>
</section>
    );
}