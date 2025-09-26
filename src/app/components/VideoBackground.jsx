"use client"; 
import React, { useRef, useEffect } from "react";
import styles from "./VideoBackground.module.css";
export default function VideoBackground() {
  const videoRef = useRef(null); // <-- removed type annotation

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
    <div className={styles.videoContainer}>
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
    <div className={styles.bottomTear} aria-hidden />
      <div className={styles.overlay}>
  <div className={styles.content}>
    <img
      src="/logo/logo_white.png"
      alt="The Heritage Guardian Logo"
      className={styles.logo}
    />

    <h1 className={styles.title}>
      A Global Alliance for <em>Living Culture</em>
    </h1>

    <button className={styles.cta}>Discover the alliance</button>
  </div>
</div>

    </div>
  );
} 