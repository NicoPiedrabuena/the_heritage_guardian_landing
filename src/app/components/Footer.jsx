import React from "react";

export default function Footer() {
  const bg = `
    radial-gradient(600px 300px at 20% 20%, rgba(255,255,255,0.06), transparent 60%),
    radial-gradient(700px 380px at 80% 30%, rgba(255,255,255,0.05), transparent 65%),
    linear-gradient(#4a3a24, #3f301d)
  `;

  const labelStyles = {
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
    opacity: 0.9,
    marginBottom: 8,
  };

  const textStyles = {
    fontSize: 14,
    lineHeight: 1.6,
    opacity: 0.9,
  };

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 700 : false;

  return (
    <footer
      style={{
        marginTop: isMobile ? 18 : 32,
        borderTop: "6px solid #d9c29a",
        background: bg,
        color: "#fff",
      }}
    >
      {/* Cuerpo */}
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile ? "18px 6px 12px" : "28px 16px 18px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr 1fr 1fr",
          gap: isMobile ? 12 : 24,
          justifyItems: isMobile ? "center" : "start", // centra columnas en mobile
          textAlign: isMobile ? "center" : "left",     // centra texto en mobile
        }}
      >
        {/* Logo */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // siempre centrado
        }}>
          <img
            src="/logo/logo_white.png"
            alt="The Heritage Guardian"
            style={{ maxWidth: isMobile ? 140 : 220, height: "auto" }}
          />
        </div>

        {/* Headquarters */}
        <div>
          <div style={{ ...labelStyles, fontSize: isMobile ? 11 : 12, marginBottom: isMobile ? 4 : 8 }}>Headquarters</div>
          <div style={{ ...textStyles, fontSize: isMobile ? 13 : 14 }}>
            Buenos Aires, Argentina —<br />
            Projects worldwide.
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ ...labelStyles, fontSize: isMobile ? 11 : 12, marginBottom: isMobile ? 4 : 8 }}>Contact Us</div>
          <div style={{ ...textStyles, fontSize: isMobile ? 13 : 14 }}>
            <a
              href="mailto:media@theheritageguardian.com"
              style={{
                color: "#fff",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,.35)",
                fontSize: isMobile ? 13 : 14,
              }}
            >
              media@theheritageguardian.com
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <div style={{ ...labelStyles, fontSize: isMobile ? 11 : 12, marginBottom: isMobile ? 4 : 8 }}>Follow Us</div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start", // centra íconos en mobile
          }}>
            <SocialIcon href="https://www.youtube.com/" label="YouTube" mobile={isMobile}>
              {/* YouTube */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.7 3 12 3 12 3s-6.7 0-8.7.4A4 4 0 0 0 .5 6.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8c2 .5 8.7.5 8.7.5s6.7 0 8.7-.5a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.4 3.5-6.4 3.5Z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/" label="LinkedIn" mobile={isMobile}>
              {/* LinkedIn */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1C13.2 9.3 14.7 8 17 8c3.3 0 3.9 2.2 3.9 5v10h-4v-8.9c0-2.1-.1-4.7-2.9-4.7-2.9 0-3.3 2.3-3.3 4.6V23h-4V8.5h3.8z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/" label="Instagram" mobile={isMobile}>
              {/* Instagram */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 2 .3 2.5.6.6.3 1 .7 1.3 1.3.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 2-.6 2.5-.3.6-.7 1-1.3 1.3-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-2-.3-2.5-.6a3.2 3.2 0 0 1-1.3-1.3c-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.3-2 .6-2.5.3-.6.7-1 1.3-1.3.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.7.3 3.9.7 3.1 1.1 2.4 1.8 2 2.6.6 3.4.3 4.4.1 5.7 0 7 0 7.3 0 10.7s0 3.7.1 5c.2 1.3.5 2.3 1.9 3.1.8.4 1.8.7 3.1.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.2 2.3-.5 3.1-.9 1.4-.8 1.7-1.8 1.9-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-1.3-.5-2.3-1.9-3.1C19.3.3 18.3 0 17 0 15.7 0 15.3 0 12 0z" />
                <circle cx="18.4" cy="5.6" r="1.2" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Línea de copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.15)",
          textAlign: "center",
          padding: isMobile ? "8px 6px 10px" : "10px 16px 16px",
          fontSize: isMobile ? 11 : 12,
          opacity: 0.7,
        }}
      >
        The Heritage Guardian © {new Date().getFullYear()} — All rights reserved
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children, mobile }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: mobile ? 28 : 36,
        height: mobile ? 28 : 36,
        borderRadius: "9999px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255,255,255,.35)",
        color: "#fff",
        textDecoration: "none",
        marginRight: mobile ? 6 : 10,
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
