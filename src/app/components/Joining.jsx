import React, { useEffect, useState } from "react";
import PapyrusCard from "./PapyrusCard"; 
 

export default function Joining() {
  const Emph = ({ children }) => (
    <em className="title-emphasis">
      {children}
    </em>
  );

  // Responsive hook
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`joining-alliance ${isMobile ? 'joining-alliance-mobile' : ''}`}>
      <h2 className="title">
        WHAT YOU GET
      </h2>

      <div className={`joining-alliance-divider ${isMobile ? 'joining-alliance-divider-mobile' : ''}`} />

      <div className={`joining-alliance-description ${isMobile ? 'joining-alliance-description-mobile' : ''}`} style={{ fontSize: "24px" }}>
        What it means to join the Alliance:
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(220px, 1fr))",
          gap: isMobile ? 10 : 18,
          width: isMobile ? "100%" : "min(980px, 100%)",
          marginTop: isMobile ? 8 : 16,
          justifyItems: "center",
        }}
      >
        <PapyrusCard>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center"
          }}>
            <h3 style={{ fontWeight: 700, marginBottom: "16px", fontSize: "24px" }}>CULTURAL FILM</h3>
            <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
              A <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                cinematic documentary
              </span> as cultural legacies to promote your nation's identity or associate your brand with its most iconic events, plus short digital features for your own channels.
            </div>
          </div>
        </PapyrusCard>

        <PapyrusCard>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center"
          }}>
            <h3 style={{ fontWeight: 700, marginBottom: "16px", fontSize: "24px" }}>PHOTOGRAPHIC ARCHIVE</h3>
            <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
              A <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                curated collection of photographs
              </span> ready to boost tourism, press, and official communication.
            </div>
          </div>
        </PapyrusCard>

        <PapyrusCard>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center"
          }}>
            <h3 style={{ fontWeight: 700, marginBottom: "16px", fontSize: "24px" }}>GLOBAL VISIBILITY</h3>
            <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
              Opportunities for placement on leading <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                international platforms
              </span> such as National Geographic and History Channel, with amplification across <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                The Heritage Guardian channels
              </span>
            </div>
          </div>
        </PapyrusCard>
      </div>

   <p
        style={{
          marginTop: isMobile ? 14 : 26,
          maxWidth: isMobile ? "98vw" : 980,
          fontSize: isMobile ? 16 : 24,
          lineHeight: 1.5,
          fontStyle: "italic",
          textAlign: "center"
        }}
      >
        Your heritage deserves more than preservation.{" "}
        <br />
        It deserves a place in the <span style={{
          color: "#b53a33",
          fontWeight: 700,
          fontStyle: "italic",
          display: "inline-block",
          fontSize: isMobile ? 16 : 24,
        }}>
          global narrative
        </span>.
      </p>
    </section>
  );
}