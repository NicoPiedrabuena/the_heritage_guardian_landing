"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import PapyrusCard from "./PapyrusCard";
export default function TrustedDiplomacy({
  logosSrc, 
  logosHeight = 64,
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
        <h2 className={`trusted-diplomacy-h2 ${isMobile ? 'trusted-diplomacy-h2-mobile' : ''}`}>
          Trusted by Global <i>Institutions</i>
        </h2>
        <div className={`trusted-diplomacy-divider ${isMobile ? 'trusted-diplomacy-divider-mobile' : ''}`} />
      </div>

      {/* Marquee: imagen duplicada para loop perfecto */}
      <div
        className="trusted-diplomacy-marquee"
        aria-label="Institution logos scroller"
      >
        <div className="trusted-diplomacy-scroll" style={scrollStyle}>
          {/* 1ª mitad */}
          <div className="trusted-diplomacy-scroll-half">
            <Image
              src={logosSrc}
              alt="Global institutions logos"
              priority
              width={isMobile ? 1200 : 2400}
              height={isMobile ? 40 : logosHeight}
              style={{ height: isMobile ? 40 : logosHeight, width: "auto" }}
            />
          </div>
          {/* 2ª mitad (duplicada para loop) */}
          <div className="trusted-diplomacy-scroll-half">
            <Image
              src={logosSrc}
              alt="Global institutions logos repeat"
              priority
              width={isMobile ? 1200 : 2400}
              height={isMobile ? 40 : logosHeight}
              style={{ height: isMobile ? 40 : logosHeight, width: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Subtítulo */}
      <div className={`trusted-diplomacy-subtitle ${isMobile ? 'trusted-diplomacy-subtitle-mobile' : ''}`}>
        <h3 className={`trusted-diplomacy-h3 ${isMobile ? 'trusted-diplomacy-h3-mobile' : ''}`}>
          Diplomatic <i>Voices</i>
        </h3>
        <div className={`trusted-diplomacy-subtitle-divider ${isMobile ? 'trusted-diplomacy-subtitle-divider-mobile' : ''}`} />
        <p className={`trusted-diplomacy-description ${isMobile ? 'trusted-diplomacy-description-mobile' : ''}`}>
          What <b>world leaders</b> in culture and diplomacy say about
          <br />
          <span className="trusted-diplomacy-span">
            THE HERITAGE GUARDIAN
          </span>
        </p>
      </div>

      {/* Citas sobre papiro */}
      <div className={`trusted-diplomacy-quotes ${isMobile ? 'trusted-diplomacy-quotes-mobile' : ''}`}>
        <div className={`trusted-diplomacy-quotes-grid ${isMobile ? 'trusted-diplomacy-quotes-grid-mobile' : ''}`}>
          {quotes.map((q, i) => (
           <PapyrusCard key={i}>
              <p className={`trusted-diplomacy-quote-text ${isMobile ? 'trusted-diplomacy-quote-text-mobile' : ''}`}>
                {q.text}
              </p>
              <figcaption className={`trusted-diplomacy-quote-caption ${isMobile ? 'trusted-diplomacy-quote-caption-mobile' : ''}`}>
                {q.role}
              </figcaption>
              {/* Bandera abajo a la derecha */}
              {q.flagSrc ? (
                <div className={`trusted-diplomacy-quote-flag ${isMobile ? 'trusted-diplomacy-quote-flag-mobile' : ''}`}>
                  <Image
                    src={q.flagSrc}
                    alt={q.flagAlt || "Flag"}
                    width={isMobile ? 16 : 22}
                    height={isMobile ? 12 : 16}
                    style={{ height: "auto", width: "auto" }}
                  />
                </div>
              ) : null}
            </PapyrusCard>
          ))}
        </div>
      </div>
    </section>
  );
}
