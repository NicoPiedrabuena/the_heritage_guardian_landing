import React from "react";
import "./Footer.css";

export default function Footer() {
  const bg =
    "radial-gradient(600px 300px at 20% 20%, rgba(255,255,255,0.06), transparent 60%)," +
    "radial-gradient(700px 380px at 80% 30%, rgba(255,255,255,0.05), transparent 65%)," +
    "linear-gradient(#4b3621, #4b3621)";

  return (
    <footer className="thg-footer" style={{ background: bg, paddingTop: "75px" }}>
      <div className="thg-wrap">
        <div className="thg-panel">
          {/* Brand */}
          <div className="thg-brand">
            <a href="/" aria-label="Go to homepage" style={{ display: "inline-block" }}>
              <img
                src="/logo/logo_white.png"
                alt="The Heritage Guardian"
                style={{ width: "260px", height: "auto" }}
              />
            </a>

            {/* ⬇️ Forzar un solo renglón */}
            <p className="thg-tagline">
            Visibility&nbsp;is&nbsp;Preservation
            </p>
          </div>

          {/* HQ */}
          <div className="thg-col">
            <p>UBICATION</p>
            <p>
              Buenos Aires, Argentina —<br /> Projects worldwide.
            </p>
          </div>

          {/* Contact */}
          <div className="thg-col">
            <p>CONTACT US</p>
            <p>
              <a href="mailto:media@theheritageguardian.com">
                media@theheritageguardian.com
              </a>
            </p>
          </div>

          {/* Follow */}
          <div className="thg-col thg-follow">
            <div className="icons" style={{ paddingTop: "20px" }}>
              <a
                href="https://www.youtube.com/@WorldCulturesChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="6" width="20" height="12" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
              </a>

              <a
  href="https://www.facebook.com/TheHeritageGuardian/"
  target="_blank"
  rel="noopener noreferrer"
  className="icon"
  aria-label="Facebook"
>
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    fill="currentColor"
    d="M13.5 8H15V5.5h-2c-2.4 0-3.5 1.85-3.5 3.5V11H7.5v2.5H9.5V19h2.6v-5.5h2.1L14.5 11H12v-1.7c0-.7.5-1.3 1.5-1.3z"
  />
</svg>
</a>


              <a
                href="https://www.instagram.com/nachosaso/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="thg-copyright" style={{ marginTop: "100px" }}>
          The Heritage Guardian © 2022 — All rights reserved
        </div>
      </div>
    </footer>
  );
}
