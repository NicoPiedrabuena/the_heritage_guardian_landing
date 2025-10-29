import React, { useEffect, useState } from "react";

export default function Joining() {
  // Responsive hook
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    position: "relative",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "32px 16px",
  };

  // Contenedor general en columna para apilar header, cards y footer
  const containerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "min(92vw, 1600px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: isMobile ? "20px" : "30px",
  };

  // Header: apila título y subtítulo centrados
  const headerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: isMobile ? "10px" : "12px",
  };

  const imgResponsive = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  };

  // Fila de cards fluida y centrada
  const cardsRowStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: isMobile ? "nowrap" : "wrap",
    gap: isMobile ? "20px" : "30px",
    width: "100%",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "stretch",
    marginTop: isMobile ? "10px" : "0",
  };

  // Estilo de cada card (img)
  const cardStyle = {
    ...imgResponsive,
    flex: "1 1 330px",
    minWidth: "clamp(260px, 28vw, 420px)",
    maxWidth: "410px",
  };

  // Footer centrado
  const footerStyle = {
    ...imgResponsive,
    maxWidth: isMobile ? "300px" : "600px",
    margin: isMobile ? "30px auto 0" : "50px auto 0",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header centrado: tit.png y sub.png uno debajo de otro */}
        <div style={headerStyle}>
          <img
            src="/whatyouget/tit.png"
            alt="WHAT YOU GET"
            style={{
              ...imgResponsive,
              maxWidth: isMobile ? "600px" : "800px",
              margin: "0 ",
            }}
            loading="lazy"
          />
          <img
            src="/whatyouget/sub.png"
            alt="What it means to join the Alliance:"
            style={{
              ...imgResponsive,
              maxWidth: isMobile ? "250px" : "520px",
              margin: "0 auto",
            }}
            loading="lazy"
          />
        </div>

        {/* Cards */}
        <div style={cardsRowStyle}>
          <img
            src="/whatyouget/c.png"
            alt="Cultural Film"
            style={cardStyle}
            loading="lazy"
          />
          <img
            src="/whatyouget/p.png"
            alt="Photographic Archive"
            style={cardStyle}
            loading="lazy"
          />
          <img
            src="/whatyouget/g.png"
            alt="Global Visibility"
            style={cardStyle}
            loading="lazy"
          />
        </div>

        {/* Footer centrado */}
        <img
          src="/whatyouget/footer.png"
          alt="Your heritage deserves more than preservation. It deserves a place in the global narrative."
          style={footerStyle}
          loading="lazy"
        />
      </div>
    </section>
  );
}
