"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SectionVideo({ height = "100svh" }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Autoplay resiliente (móviles y desktop)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Asegurar inline + muted ANTES de reproducir
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("muted", "");
    v.defaultMuted = true;
    v.muted = true;
    v.autoplay = true;
    v.preload = "metadata";

    const tryPlay = () => v.play().catch(() => {});

    // 1) Intento inmediato
    tryPlay();

    // 2) Reintentos suaves
    const onVis = () => document.visibilityState === "visible" && tryPlay();
    const onScroll = () => tryPlay();
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3) Último recurso: primer toque en cualquier parte
    const onFirstPointer = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onFirstPointer, true);
    };
    window.addEventListener("pointerdown", onFirstPointer, true);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onFirstPointer, true);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToWhoWeAre = () => {
    const target = document.querySelector(".cultural-map");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      style={{
        position: "relative",
        height,                 // 100svh por defecto
        minHeight: 480,         // no colapses en pantallas muy bajas
        overflow: "clip",
        backgroundColor: "transparent",
      }}
    >
      {/* Wrapper con máscara (aplica también en mobile) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          // --- Máscara universal (incluye prefijos WebKit para iOS/Android) ---
          WebkitMaskImage: 'url("/mascaras/mascaraMargenVideo.png")',
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "bottom center",
          WebkitMaskSize: "cover",
          WebkitMaskComposite: "source-over",
          maskImage: 'url("/mascaras/mascaraMargenVideo.png")',
          maskRepeat: "no-repeat",
          maskPosition: "bottom center",
          maskSize: "cover",
          // Forzar composición por GPU en móviles
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {/* VIDEO de fondo (sin máscara directa) */}
        <video
          ref={(el) => {
            videoRef.current = el;
          }}
          src={isMobile ? "/videos/videitoVertical.mp4" : "/videos/videito.mp4"}
          poster="/videos/videito_poster.jpg"
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
            pointerEvents: "none",
          }}
        />
      </div>

      {/* CONTENIDO sobre el video */}
      <div
        style={{
          position: "absolute",
          zIndex: 25,
          left: "clamp(16px, 5vw, 120px)",
          bottom: "clamp(72px, 12vh, 180px)",
          right: "clamp(16px, 5vw, 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "#fff",
          pointerEvents: "auto",
        }}
      >
        <img
          src="/logo/heroLogo.png"
          alt="The Heritage Guardian"
          style={{
            width: isMobile ? "clamp(220px, 60vw, 360px)" : "clamp(320px, 26vw, 520px)",
            height: "auto",
            display: "block",
            marginBottom: 16,
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,.45))",
          }}
          loading="eager"
        />

        <button
          onClick={goToWhoWeAre}
          style={{
            border: "1px solid rgba(255,255,255,.65)",
            background: "rgba(0,0,0,.25)",
            color: "#fff",
            padding: "12px 22px",
            borderRadius: 20,
            fontSize: "clamp(14px, 1.8vw, 18px)",
            cursor: "pointer",
            backdropFilter: "blur(2px)",
            boxShadow: "0 2px 10px rgba(0,0,0,.25)",
          }}
        >
          Explore the Nations
        </button>
      </div>
    </section>
  );
}
