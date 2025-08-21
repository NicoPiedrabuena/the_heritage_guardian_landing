"use client";
import Loader from "./components/Loader";
import { useEffect, useRef } from "react";
import styles from "./components/VideoBackground.module.css";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
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
        className={styles.video}
        preload="auto"
        playsInline
        // @ts-ignore (compat iOS viejo)
        webkit-playsinline="true"
        muted
        loop
        autoPlay
        poster="/logo/bg.jpg"
      >
        <source
          src="/videos/video.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        Tu navegador no soporta video.
      </video>

      {/* Capa para contenido (dos columnas en desktop, una en mobile) */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Loader />
          </div>

          <div className={styles.right}>
            <p className={styles.title}>Under Construction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
