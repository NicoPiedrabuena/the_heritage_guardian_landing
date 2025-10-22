 "use client";

import React, { useEffect, useRef, useState } from "react";
import "./VideoBackground.css";

export default function SectionVideo({ height = "100vh" }) {
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
    const target = document.querySelector(".who-we-are");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      style={{
        position: "relative",
        height, // ahora por defecto "100vh"
        overflow: "hidden", // recorta video y máscara a la sección
        backgroundColor: "transparent", // transparente para que se vea el fondo global
      }}
    >
      {/* VIDEO: cubre la sección */}
      <video
        ref={(el) => {
          videoRef.current = el;
        }} // callback-ref válido en JS
        src="/videos/video.mp4"
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
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
          // Aplicar máscara solo en desktop
          ...(isMobile
            ? {}
            : {
                WebkitMaskImage: 'url("/mascaras/mascaraMargenVideo.png")',
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "bottom center",
                WebkitMaskSize: "100% auto",
                WebkitMaskMode: "alpha",
                maskImage: 'url("/mascaras/mascaraMargenVideo.png")',
                maskRepeat: "no-repeat",
                maskPosition: "bottom center",
                maskSize: "100% auto",
                maskMode: "alpha",
              }),
        }}
      />

      {/* (Opcional) Overlay suave para legibilidad */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 85%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* CONTENIDO sobre el video */}
      <div
        className="content-video"
        style={{
          position: "relative",
          zIndex: 25, // asegurar que el contenido quede por encima de la máscara
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "6vh 5vw",
          color: "#fff",
          textAlign: "left",
        }}
      >
        <div style={{ maxWidth: 540 }}>
          <img
            src="/logo/logo_white.png"
            alt="The Heritage Guardian"
            style={{ width: 320, height: "auto", marginBottom: 16 }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(22px, 3vw, 36px)",
              lineHeight: 1.25,
              fontWeight: 600,
              textShadow: "0 2px 10px rgba(0,0,0,.35)",
            }}
          >
            A Global Alliance for{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>
              Living Culture
            </em>
          </h1>
          <div style={{ height: 16 }} />
          <button
            onClick={goToWhoWeAre}
            style={{
              border: "1px solid rgba(255,255,255,.65)",
              background: "rgba(0,0,0,.25)",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 12,
              fontSize: 14,
              cursor: "pointer",
              backdropFilter: "blur(2px)",
            }}
          >
            Explore de Nations
          </button>
        </div>
      </div>

      {/* Nota: la capa de guarda ya no es necesaria porque el video usa la máscara.
          Asegúrate de que /mascaras/mascaraMargenVideo.png tenga canal alpha
          (zonas transparentes donde quieras ver el fondo global). */}
    </section>
  );
}
 