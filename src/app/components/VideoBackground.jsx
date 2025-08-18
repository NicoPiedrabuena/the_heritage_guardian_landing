import React from "react";
import styles from "./VideoBackground.module.css";

export default function VideoBackground({ children }) {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/videos/oficial.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      {/* Si quieres meter más secciones debajo */}
      {children}
    </div>
  );
}
