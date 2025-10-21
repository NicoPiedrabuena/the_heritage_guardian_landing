import React from "react";
import "./Footer.css"; 
export default function Footer() {
  const bg = `
    radial-gradient(600px 300px at 20% 20%, rgba(255,255,255,0.06), transparent 60%),
    radial-gradient(700px 380px at 80% 30%, rgba(255,255,255,0.05), transparent 65%),
    linear-gradient(#4a3a24, #3f301d)
  `;

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 700 : false;

  return (
    <footer
      className="thg-footer"
      style={{
        marginTop: isMobile ? 18 : 32,
        background: bg,
        color: "#fff",
        fontFamily: "'Work Sans', 'WorkSans', system-ui, -apple-system, sans-serif", // agregado: usar Work Sans
      }}
    >
      <div className="thg-container">
        <div className="thg-brand">
          {/* ...existing logo markup... */}
          <div className="thg-logo">
            {/* reemplazado: usar imagen del logo con ajuste responsivo inline (fallback) */}
            <img
              src="/logo/logo_white.png"
              alt="The Heritage Guardian"
              className="logo-img"
              style={{ width: isMobile ? 
                96 : 170 }} /* mayor tamaño: 96px desktop, 120px mobile */
            /> 
          </div>
          <div className="tagline">A Global Alliance for <em>Living Culture</em></div>
        </div>

        <div className="thg-columns">
          <div className="thg-col">
            <h4>HEADQUARTERS</h4>
            <p>Buenos Aires, Argentina —<br/>Projects worldwide.</p>
          </div>

          <div className="thg-col">
            <h4>CONTACT US</h4>
            <p><a href="mailto:media@theheritageguardian.com">media@theheritageguardian.com</a></p>
          </div>

          <div className="thg-col thg-follow">
            <h4>FOLLOW US</h4>
            <div className="icons">
              <span className="icon" role="img" aria-label="Instagram">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
                  <title>Instagram</title>
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor"/>
                </svg>
              </span>

              <span className="icon" role="img" aria-label="YouTube">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
                  <title>YouTube</title>
                  <rect x="2" y="6" width="20" height="12" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                  <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                </svg>
              </span>

              <span className="icon" role="img" aria-label="TikTok">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
                  <title>TikTok</title>
                  <path d="M14.5 3v8.1a3.4 3.4 0 1 1-3.4-3.4V8.2A5.8 5.8 0 1 0 20 14.8V11h-2.5V3z" fill="currentColor"/>
                </svg>
              </span>

              <span className="icon" role="img" aria-label="Facebook">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
                  <title>Facebook</title>
                  <path d="M15 3h3v4h-3v14h-4V7H9V3h3V1.9C12 1 12.7 1 13.3 1 14.7 1 15 1.2 15 3z" fill="currentColor"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="thg-copyright">The Heritage Guardian © 2022 — All rights reserved</div>
    </footer>
  );
}
