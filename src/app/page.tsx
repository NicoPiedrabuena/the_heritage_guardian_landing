"use client";
import Loader from "./components/Loader";
import { useEffect, useRef } from "react";
import styles from "./components/VideoBackground.module.css";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
        className={styles.video}
        preload="auto"
        playsInline
        muted
        loop
        autoPlay
         
      >
        <source
          src="/videos/video.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        Tu navegador no soporta video.
      </video>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.loaderWrap}>
              <Loader />
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>Under Construction</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
