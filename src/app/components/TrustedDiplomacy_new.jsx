"use client";

import React, { useState, useEffect } from "react"; 

export default function TrustedDiplomacy({
  logosSrc, 
  logosHeight = 80,
  scrollDurationSec = 28,
}) {
  // Responsive detection
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // tamaño de los logos en el marquee: reducir en móvil para mostrar más íconos a la vez
  const displayLogoHeight = isMobile ? Math.min(logosHeight, 80) : Math.max(logosHeight, 120);
  
  const scrollStyle = {
    animation: `tg-scroll ${scrollDurationSec}s linear infinite`,
    willChange: 'transform',
  };

  return (
    <section
      aria-label="Trusted by Global Institutions and Diplomatic Voices"
      className={`trusted-diplomacy ${isMobile ? 'trusted-diplomacy-mobile' : ''}`}
    >
      {/* Título */}
      <div className="trusted-diplomacy-title" style={{ textAlign: 'center', marginBottom: isMobile ? '20px' : '30px' }}>
        <img 
          src="/trusted/tit.png" 
          alt="Trusted by Global Institutions" 
          style={{
            maxWidth: isMobile ? '80vw' : '50vw',
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>

      {/* Marquee: imagen duplicada para loop perfecto */}
      <div className="trusted-diplomacy-marquee" aria-label="Institution logos scroller">
        <div className="trusted-diplomacy-scroll" style={scrollStyle}>
          {/* 1ª copia */} 
          <div className="trusted-diplomacy-scroll-item">
            <img
              src={logosSrc}
              alt="Global institutions logos"
              loading="eager"
              decoding="sync"
              style={{
                width: "auto",
                maxWidth: "none",
                height: "auto",
                maxHeight: displayLogoHeight,
                objectFit: "contain",
                display: "block"
              }}
              onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
            />
          </div>
          {/* Espacio entre copias para evitar cruce */}
          <div className="trusted-diplomacy-spacer" aria-hidden="true"></div>
          {/* 2ª copia (duplicada para loop perfecto) */}
          <div className="trusted-diplomacy-scroll-item" aria-hidden="true">
            <img
              src={logosSrc}
              alt=""
              loading="eager"
              decoding="sync"
              style={{
                width: "auto",
                maxWidth: "none",
                height: "auto",
                maxHeight: displayLogoHeight,
                objectFit: "contain",
                display: "block"
              }}
              onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
            />
          </div>
        </div>
      </div>

      {/* Founder's Statement como imagen */}
      <div className={`trusted-diplomacy-subtitle ${isMobile ? 'trusted-diplomacy-subtitle-mobile' : ''}`} style={{ textAlign: 'center', margin: isMobile ? '30px 0' : '50px 0' }}>
        <img 
          src="/trusted/text.png" 
          alt="Founder's Statement with signature and photo" 
          style={{
            maxWidth: isMobile ? '95vw' : '80vw',
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>

      {/* Título inferior como imagen */}
      <div style={{ textAlign: 'center', margin: isMobile ? '30px 0 20px' : '50px 0 40px' }}>
        <img 
          src="/trusted/footer.png" 
          alt="Together, we preserve the living heartbeat of world cultures" 
          style={{
            maxWidth: isMobile ? '90vw' : '60vw',
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
 
    </section>
  );
}