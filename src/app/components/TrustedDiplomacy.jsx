"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react"; 
import TitleWithRule from "./TitleWithRule";
export default function TrustedDiplomacy({
  logosSrc, 
  logosHeight = 80,
  scrollDurationSec = 28,
  quotes = [
    {
      text:
        "The Heritage Guardian has brought our traditions to audiences we could never reach alone.",
      role: "Minister of Culture Morocco.",
      flagSrc: "/flags/morocco.png",
      flagAlt: "Morocco flag",
    },
    {
      text:
        "This collaboration positioned our heritage at the forefront of global cultural conversations.",
      role: "Ambassador of [País] to Argentina.",
      flagSrc: "/flags/mexico.png",
      flagAlt: "Mexico flag",
    },
    {
      text:
        "Their work is more than documentation — it's cultural diplomacy in action.",
      role: "Director, National Tourism Board.",
      flagSrc: "/flags/argentina.png",
      flagAlt: "Argentina flag",
    },
  ],
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
  };

  return (
    <section
      aria-label="Trusted by Global Institutions and Diplomatic Voices"
      className={`trusted-diplomacy ${isMobile ? 'trusted-diplomacy-mobile' : ''}`}
    >
      {/* Título */}
      <div className="trusted-diplomacy-title">
        <TitleWithRule text={<>Trusted by Global <i>Institutions</i></>} className={`trusted-diplomacy-h2 unified-section-title ${isMobile ? 'trusted-diplomacy-h2-mobile' : ''}`} style={{ fontSize: isMobile ? 20 : 36 }} noRule />
        <div className={`trusted-diplomacy-divider ${isMobile ? 'trusted-diplomacy-divider-mobile' : ''}`} />
      </div>

      {/* Marquee: imagen duplicada para loop perfecto */}
      <div className="trusted-diplomacy-marquee" aria-label="Institution logos scroller">
        <div className="trusted-diplomacy-scroll" style={scrollStyle}>
          {/* 1ª mitad */} 
            <img
              src={logosSrc}
              alt="Global institutions logos"
              loading="eager"
              decoding="sync"
              style={{          // más pequeños en móvil, para que entren más íconos visibles
                width: "auto",
                maxWidth: "none",
                height: "auto",
                maxHeight: displayLogoHeight,
                objectFit: "contain",
                display: "block"
              }}
              onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
            /> 
          {/* 2ª mitad (duplicada para loop) -- aria-hidden para no duplicar lectura */}
          <div className="trusted-diplomacy-scroll-half" aria-hidden="true" style={{ overflow: 'hidden' }}>
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

      {/* Subtítulo: Founder’s Statement con formato de carta, firma y título final (MEJORADO: centrado y énfasis) */}
      <div className={`trusted-diplomacy-subtitle ${isMobile ? 'trusted-diplomacy-subtitle-mobile' : ''}`}>
       <TitleWithRule text="Founder´s  Statement" className={`trusted-diplomacy-h2 unified-section-title ${isMobile ? 'trusted-diplomacy-h2-mobile' : ''}`} style={{ fontSize: isMobile ? 20 : 36 }} noRule />

        <div className={`trusted-diplomacy-subtitle-divider ${isMobile ? 'trusted-diplomacy-subtitle-divider-mobile' : ''}`} />

        <div
          className={`founder-statement ${isMobile ? 'founder-statement-mobile' : ''}`}
          style={{
            maxWidth: 820,
            margin: '28px auto', 
            // simula una carta centrada en el papel
            background: 'transparent'
          }}
        >
           

          {/* Cuerpo tipo carta: columna centrada pero texto alineado a la izquierda */}
          <div
            className={`founder-letter ${isMobile ? 'founder-letter-mobile' : ''}`}
            style={{
              whiteSpace: "normal",
              fontStyle: 'normal',
              lineHeight: 1.7,
              color: '#222',
              padding: isMobile ? '0 6px' : '0 12px',
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? 15 : 18,
              textAlign: 'left',
              margin: '18px auto'
            }}
          >
            <p style={{ margin: '0 0 12px', fontWeight: 600 }}>Culture is power.</p>

            <p style={{ margin: '0 0 12px' }}>
              Every nation holds stories, traditions, and values that deserve to be seen,
              not only locally, but on the world stage.
            </p>

            <p style={{ margin: '0 0 12px' }}>
              Today, in an era where everyone holds a screen in their hand, the desire to
              discover and connect with other cultures has never been greater. And that's
              where we come in: At The Heritage Guardian, we meet that need.
            </p>

            <p style={{ margin: '0 0 12px' }}>
              We take each nation’s culture straight to the world, transforming it into cinematic
              content that inspires, educates, and moves people. Just as football unites the
              planet with unimaginable reach, we make the culture of each nation achieve the same:
              to be impossible to ignore.
            </p>

            <p style={{ margin: '0 0 6px' }}>
              <strong>Visibility is preservation;</strong> it strengthens nation branding, attracts tourism and
              investment, and secures a cultural legacy for future generations.
            </p>
          </div>

          {/* Firma centrada grande con avatar más grande y nombre destacado */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 18,
            gap: 8
          }}>
            {/* Firma centrada arriba — aumentada */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Image
                src="/ignacio/firma.png"
                alt="Firma Ignacio Sánchez Sorondo"
                width={isMobile ? 200 : 340}
                height={isMobile ? 60 : 110}
                priority
                style={{
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.18))'
                }}
              />
            </div>

            {/* Avatar + nombre: avatar más grande y sin circunferencia externa */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              marginTop: isMobile ? -58 : -90
            }}>
              <div style={{
                width: isMobile ? 140 : 220,   // aumentado
                height: isMobile ? 140 : 220,  // aumentado
                borderRadius: 999,
                overflow: 'hidden', 
                /* bordes externos removidos intencionalmente */
              }}>
                <Image
                  src="/ignacio/foto.png"
                  alt="Ignacio Sánchez Sorondo"
                  width={isMobile ? 140 : 220}
                  height={isMobile ? 140 : 220}
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontWeight: 900, fontFamily: 'var(--font-sans)', fontSize: isMobile ? 20 : 28 }}>Ignacio Sánchez Sorondo</span>
                <small style={{ fontSize: isMobile ? 13 : 15, color: '#555', letterSpacing: 0.6 }}>FOUNDER &amp; DIRECTOR</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Título inferior centrado */}
      <div style={{ textAlign: 'center' }}>
        <h3
          className={`trusted-diplomacy-conclusion ${isMobile ? 'trusted-diplomacy-conclusion-mobile' : ''}`}
          style={{ fontWeight: 600, fontSize: isMobile ? 20 : 35, fontFamily: 'var(--font-sans)' }} // <-- aumentado
        >
          Together, we preserve the living heartbeat of world cultures.
        </h3>
      </div>
 
    </section>
  );
}
