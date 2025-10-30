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

  // Altura final de los logos (controla proporción, evita cruces)
  const displayLogoHeight = isMobile
    ? Math.min(logosHeight, 50)
    : Math.max(logosHeight, 120);

  return (
    <section
      aria-label="Trusted by Global Institutions and Diplomatic Voices"
      className={`trusted-diplomacy ${isMobile ? "trusted-diplomacy-mobile" : ""}`}
      style={{ "--logo-h": `${displayLogoHeight}px` }}
    >
      {/* Título */}
      <div
        className="trusted-diplomacy-title"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        <img
          src="/trusted/tit.png"
          alt="Trusted by Global Institutions"
          style={{
            maxWidth: isMobile ? "90vw" : "70vw",
            width: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Marquee (loop perfecto sin cruces) */}
      <div
        className="trusted-diplomacy-marquee"
        aria-label="Institution logos scroller"
      >
        <div
          className="trusted-diplomacy-track"
          style={{
            animationDuration: `${scrollDurationSec}s`,
          }}
        >
          {/* Copia 1 */}
          <div className="trusted-diplomacy-item">
            <img
              src={logosSrc}
              alt="Global institutions logos"
              loading="eager"
              decoding="sync"
              className="logos-img"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>

          {/* Copia 2 (idéntica) */}
          <div className="trusted-diplomacy-item" aria-hidden="true">
            <img
              src={logosSrc}
              alt=""
              loading="eager"
              decoding="sync"
              className="logos-img"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>
        </div>
      </div>

      {/* Founder's Statement */}
      <div
        className={`trusted-diplomacy-subtitle ${
          isMobile ? "trusted-diplomacy-subtitle-mobile" : ""
        }`}
        style={{ textAlign: "center", margin: "30px 0" }}
      >
        <img
          src="/trusted/text.png"
          alt="Founder's Statement"
          style={{
            maxWidth: isMobile ? "93vw" : "55vw",
            width: "100%",
            height: "auto",
            display: "block",
            margin: isMobile ? "0px 0px" : "0 auto",
          }}
        />
      </div>

      {/* Título inferior */}
      <div style={{ marginTop: "80px" }}>
        <img
          src="/trusted/footer.png"
          alt="Together, we preserve the living heartbeat of world cultures"
          style={{
            
            width: "100%",
            height: "auto",
            display: "block",
            margin: "0 ",
          }}
        />
      </div>

      {/* CSS del componente */}
      <style jsx>{`
        .trusted-diplomacy-marquee {
          overflow: hidden;
          margin: ${isMobile ? "10px 0" : "20px 0"};
        }

        /* Track en línea, sin wrap, centrado verticalmente y con gap para que no se toquen */
        .trusted-diplomacy-track {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          gap: clamp(24px, 5vw, 64px);
          width: max-content; /* se ajusta al contenido real */
          will-change: transform;
          animation-name: tg-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .trusted-diplomacy-item {
          flex: 0 0 auto; /* evita que colapse o se estire */
        }

        .logos-img {
          display: block;
          height: var(--logo-h);
          width: auto;
          max-width: none; /* evita que el contenedor la limite */
          object-fit: contain;
          margin: ${isMobile ? "5px 0" : "10px 0"};
        }

        /* Loop perfecto: dos copias idénticas => -50% cierra al medio */
        @keyframes tg-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Accesibilidad: respeta usuarios que prefieren menos movimiento */
        @media (prefers-reduced-motion: reduce) {
          .trusted-diplomacy-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
