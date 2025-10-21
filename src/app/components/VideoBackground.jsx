"use client"; 
import React, { useRef, useEffect } from "react";
export default function VideoBackground() {
  const videoRef = useRef(null); // <-- removed type annotation

  // scroll suave hacia la sección "who we are"
  const goToWhoWeAre = () => {
    const target = document.querySelector('.who-we-are');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // fallback: pequeño desplazamiento al top si no existe la sección en la página actual
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // iOS moderno usa playsInline, por compat extra seteamos el legacy via JS
    v.setAttribute("webkit-playsinline", "true");
    v.muted = true;

    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    const onFirstTouch = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("click", onFirstTouch);
    };
    window.addEventListener("touchstart", onFirstTouch, { once: true });
    window.addEventListener("click", onFirstTouch, { once: true });

    return () => {
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("click", onFirstTouch);
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
        src="/videos/video.mp4"
        preload="metadata"
        playsInline
        muted
        loop
        autoPlay
        controls={false}
        disablePictureInPicture
        onLoadedData={() => videoRef.current?.play().catch(() => {})}
      />
      <div className="video-bottom-tear" aria-hidden />
      <div className="video-overlay">
        <div className="video-content">
          <img
            src="/logo/logo_white.png"
            alt="The Heritage Guardian Logo"
            className="video-logo"
          />

          <h1 className="title-white">
            A Global Alliance for <em>Living Culture</em>
          </h1>

          <button className="cta-button" onClick={goToWhoWeAre}>Discover the alliance</button>
        </div>
      </div>
    </div>
  );
}