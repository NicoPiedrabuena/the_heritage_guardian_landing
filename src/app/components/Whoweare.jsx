"use client";

import React, { useRef, useEffect, useState } from "react";
import TitleWithRule from "./TitleWithRule";

const MASK_URL = "/mascaras/maskwhoweare.png";
function P({ children }) {
  return (
    <p className="texto-parrafos">
      {children}
    </p>
  );
}

export default function Whoweare() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <section className=""
>
        <div>
          <img
            src="/images/whoweare.png"
            alt="Who We Are"
            style={{
              width: isMobile ?  "98%" : "100%",   //
              marginTop: "20px",
              padding: "10px", 
            }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="who-we-are">
      {/* Columna de imagen */}
      <div className="who-we-are-content" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="/images/whoweare.png"
          alt="Who We Are"
          style={{
            width: "76%",
            height: "auto",
            maxWidth: "600px",
            objectFit: "contain", 
          }}
        />
      </div>

      {/* Columna de video (oculta en móvil) */}
      {!isMobile && (
        <div
          style={{
            flex: "1 1 360px",
            minWidth: 280,
            maxWidth: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "2 / 3" }}>
          {/* tenue overlay para contraste */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0, 
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <video
            ref={videoRef}
            src="/videos/videoVertical.mp4"
            preload="metadata"
            playsInline
            muted
            loop
            autoPlay
            controls={false}
            disablePictureInPicture
            onLoadedData={() => videoRef.current?.play().catch(() => {})}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              background: "transparent",

              /* --- MÁSCARA NORMAL (mostrar solo la forma) --- */
              WebkitMaskImage: `url(${MASK_URL})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              WebkitMaskPosition: "center",

              maskImage: `url(${MASK_URL})`,
              maskRepeat: "no-repeat",
              maskSize: "cover",
              maskPosition: "center", 
            }}
          />

          {/* Fallback: si no hay soporte de mask-composite, mostramos sin recorte */}
          <noscript />
          </div>
        </div>
      )}
    </section>
  );
}
