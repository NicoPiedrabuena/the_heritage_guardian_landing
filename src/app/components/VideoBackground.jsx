"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SectionVideo({ height = "100svh" }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.setAttribute("webkit-playsinline", "true");
    v.muted = true;
    v.play().catch(() => {});
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
        height,                 // usa 100svh por defecto
        minHeight: 480,         // no colapses en pantallas muy bajas
        overflow: "clip",       // recorta con mejor perf que hidden
        backgroundColor: "transparent",
      }}
    >
      {/* VIDEO de fondo con máscara en desktop */}
      <video
        ref={(el) => {
          videoRef.current = el;
        }}
        src="/videos/videito.mp4"
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
          zIndex: 0,
          pointerEvents: "none",
          ...(isMobile
            ? {}
            : {
                WebkitMaskImage: 'url("/mascaras/mascaraMargenVideo.png")',
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "bottom center",
                WebkitMaskSize: "cover",   // 👈 clave: cubre siempre la sección
                WebkitMaskMode: "alpha",
                maskImage: 'url("/mascaras/mascaraMargenVideo.png")',
                maskRepeat: "no-repeat",
                maskPosition: "bottom center",
                maskSize: "cover",
                maskMode: "alpha",
              }),
        }}
      />

      {/* CONTENIDO sobre el video */}
      <div
        style={{
          position: "absolute",
          zIndex: 25,
          // Anclado estable: se adapta con clamp; nada de márgenes negativos
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
          Explore de Nations
        </button>
      </div>
    </section>
  );
}
