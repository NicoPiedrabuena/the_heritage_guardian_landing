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
              A&nbsp;Global&nbsp;Alliance&nbsp;for&nbsp;Living&nbsp;Culture
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
                href="https://www.linkedin.com/company/the-heritage-guardian/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.07C13.62 8.84 15.5 8 17.74 8 22.3 8 24 10.7 24 15.1V24h-5v-7.7c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V24H8z" fill="currentColor" />
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
