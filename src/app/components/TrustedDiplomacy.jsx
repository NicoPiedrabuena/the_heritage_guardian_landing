"use client";

import Image from "next/image";
import React from "react";
 
export default function TrustedDiplomacy({
  logosSrc,
  parchmentSrc,
  logosHeight = 64,       // alto de la franja de logos (px)
  scrollDurationSec = 28, // velocidad del loop
  quotes = [
    {
      text:
        "“The Heritage Guardian has brought our traditions to audiences we could never reach alone.”",
      role: "Minister of Culture Morocco.",
      flagSrc: "/flags/morocco.png",
      flagAlt: "Morocco flag",
    },
    {
      text:
        "“This collaboration positioned our heritage at the forefront of global cultural conversations.”",
      role: "Ambassador of [País] to Argentina.",
      flagSrc: "/flags/mexico.png",
      flagAlt: "Mexico flag",
    },
    {
      text:
        "“Their work is more than documentation — it’s cultural diplomacy in action.”",
      role: "Director, National Tourism Board.",
      flagSrc: "/flags/argentina.png",
      flagAlt: "Argentina flag",
    },
  ],
}) {
  const scrollStyle = {
    animation: `tg-scroll ${scrollDurationSec}s linear infinite`,
  };

  return (
    <section
      aria-label="Trusted by Global Institutions and Diplomatic Voices"
      className="w-full max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14"
    >
      {/* Título */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide">
          Trusted by Global <i>Institutions</i>
        </h2>
        <div className="h-[2px] w-24 md:w-40 bg-black/60 mx-auto mt-3 mb-6" />
      </div>

      {/* Marquee: una sola imagen duplicada para loop perfecto */}
      <div
        className="relative overflow-hidden select-none group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        aria-label="Institution logos scroller"
      >
        <div
          className="flex w-[200%] will-change-transform"
          style={scrollStyle}
        >
          {/* 1ª mitad */}
          <div className="w-1/2 flex items-center justify-center">
            <Image
              src={logosSrc}
              alt="Global institutions logos"
              priority
              width={2400}
              height={logosHeight}
              style={{ height: logosHeight, width: "auto" }}
            />
          </div> 
        </div>
      </div>

      {/* Subtítulo */}
      <div className="text-center mt-10 md:mt-14">
        <h3 className="text-2xl md:text-3xl font-extrabold">
          Diplomatic <i>Voices</i>
        </h3>
        <div className="h-[2px] w-20 md:w-32 bg-black/60 mx-auto mt-3" />
        <p className="text-sm md:text-base mt-4 opacity-80">
          What <b>world leaders</b> in culture and diplomacy say about
          <br />
          <span className="font-semibold tracking-wide">THE HERITAGE GUARDIAN</span>
        </p>
      </div>

      {/* Citas sobre papiro */}
      <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {quotes.map((q, i) => (
          <figure
            key={i}
            className="relative isolate"
            style={{
              // Papiro como fondo
              backgroundImage: `url(${parchmentSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              // padding generoso para que el contorno “irregular” respire
              padding: "22px 22px 36px 22px",
              minHeight: 180,
              borderRadius: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
            }}
          >
            <blockquote className="text-sm md:text-base leading-relaxed italic">
              {q.text}
            </blockquote>
            <figcaption className="mt-3 text-xs md:text-sm opacity-80 pr-10">
              {q.role}
            </figcaption>

            {/* Bandera abajo a la derecha */}
            {q.flagSrc ? (
              <div className="absolute right-3 bottom-3">
                <Image
                  src={q.flagSrc}
                  alt={q.flagAlt || "Flag"}
                  width={22}
                  height={16}
                  style={{ height: "auto", width: "auto" }}
                />
              </div>
            ) : null}
          </figure>
        ))}
      </div>

      {/* Estilos clave */}
      <style jsx>{`
        @keyframes tg-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        /* Pausa al hover (opcional, accesible) */
        .group:hover > div {
          animation-play-state: paused;
        }
        /* Respeta reduce motion */
        @media (prefers-reduced-motion: reduce) {
          div[style*="tg-scroll"] {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
