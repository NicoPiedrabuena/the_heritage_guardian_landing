"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react"; 
import TitleWithRule from "./TitleWithRule";
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
  const displayLogoHeight = isMobile ? Math.min(logosHeight, 50) : Math.max(logosHeight, 120);
  
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
      <div className="trusted-diplomacy-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src="/trusted/tit.png" 
          alt="Trusted by Global Institutions" 
          style={{
            maxWidth: isMobile ? '90vw' : '70vw',
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>

      {/* Marquee: imagen duplicada para loop perfecto */}
      <div 
        className="trusted-diplomacy-marquee" 
        aria-label="Institution logos scroller"
        style={{
          overflow: 'hidden',
          margin: isMobile ? '10px 0' : '20px 0',
          height: isMobile ? '60px' : 'auto'
        }}
      >
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
                height: displayLogoHeight,
                objectFit: "contain",
                display: "block",
                margin: isMobile ? '5px 0' : '10px 0'
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
                height: displayLogoHeight,
                objectFit: "contain",
                display: "block",
                margin: isMobile ? '5px 0' : '10px 0'
              }}
              onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
            />
          </div>
        </div>
      </div>

      {/* Founder's Statement - Imagen estática */}
      <div className={`trusted-diplomacy-subtitle ${isMobile ? 'trusted-diplomacy-subtitle-mobile' : ''}`} style={{ textAlign: 'center', margin: '30px 0' }}>
        <img 
          src="/trusted/text.png" 
          alt="Founder's Statement" 
          style={{
            maxWidth: isMobile ? '80vw' : '55vw',
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
     

          

      {/* Título inferior centrado */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <img 
          src="/trusted/footer.png" 
          alt="Together, we preserve the living heartbeat of world cultures" 
          style={{
            maxWidth: isMobile ? '90vw' : '70vw',
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
