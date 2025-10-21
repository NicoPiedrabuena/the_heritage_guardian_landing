import React, { useEffect, useState } from "react";
import PapyrusCard from "./PapyrusCard"; 
import TitleWithRule from "./TitleWithRule";
 

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

  // Unified responsive styles
  const styles = {
    section: {
      padding: isMobile ? '20px 12px' : '48px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    description: {
      fontSize: isMobile ? 14 : 16,
      marginBottom: isMobile ? 8 : 12,
      textAlign: 'center',
      maxWidth: isMobile ? '98vw' : 980
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(420px, 1fr))',
      gap: isMobile ? 12 : 20,
      width: isMobile ? '100%' : 'min(1180px, 100%)',
      marginTop: isMobile ? 8 : 16,
      justifyItems: 'center'
    },
    cardInner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // start at top so titles align
      height: '100%',
      textAlign: 'center',
      paddingTop: isMobile ? 22 : 50,    // más espacio arriba 
      paddingLeft: isMobile ? 12 : 20,
      paddingRight: isMobile ? 12 : 20
    },
    cardTitle: {
      fontWeight: 700,
      margin: 0,
      marginBottom: '12px',
      fontSize: isMobile ? 18 : 22,
      minHeight: isMobile ? 48 : 56 // garantiza que todos los títulos queden a la misma altura
    },
    cardText: {
      fontSize: isMobile ? 15 : 18,
      lineHeight: 1.6
    },
    paragraph: {
      marginTop: isMobile ? 14 : 26,
      maxWidth: isMobile ? '98vw' : 980,
      fontSize: isMobile ? 16 : 20,
      lineHeight: 1.5,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    highlight: {
      color: '#b53a33',
      fontWeight: 700,
      fontStyle: 'italic',
      display: 'inline-block',
      fontSize: isMobile ? 16 : 20
    }
  };

  // Card style to make papyrus wider than tall and increase outer shadow
  const cardStyle = {
    width: isMobile ? '100%' : 'min(520px, 100%)',
    aspectRatio: isMobile ? '3/2' : '16/9', // ensures wider than tall
    boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
    borderRadius: 12,
    overflow: 'hidden'
  };

  return (
    <section
      className={`joining-alliance ${isMobile ? 'joining-alliance-mobile' : ''}`}
      style={styles.section}
    >
     <TitleWithRule  text="WHAT YOU GET"  ruleWidth="450px"  style={{ fontSize: 'clamp(30px, 3.2vw, 60px)', lineHeight: 1.05, margin: 0 }} />
 

      <div style={{ fontSize: 'clamp(12px, 3.2vw, 30px)', lineHeight: 1.05, margin: 0 , paddingTop: isMobile ? 12 : 20}}>
        What it means to join the Alliance:
      </div>

      <div style={styles.grid}>
        <PapyrusCard style={cardStyle}>
          <div style={styles.cardInner}>
            <h3 style={styles.cardTitle}>CULTURAL FILM</h3>
            <div style={styles.cardText}>
              A <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                cinematic documentary
              </span> as cultural legacies to promote your nation's identity or associate your brand with its most iconic events, plus short digital features for your own channels.
            </div>
          </div>
        </PapyrusCard>

        <PapyrusCard style={cardStyle}>
          <div style={styles.cardInner}>
            <h3 style={styles.cardTitle}>PHOTOGRAPHIC ARCHIVE</h3>
            <div style={styles.cardText}>
              A <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                curated collection of photographs
              </span> ready to boost tourism, press, and official communication.
            </div>
          </div>
        </PapyrusCard>

        <PapyrusCard style={cardStyle}>
          <div style={styles.cardInner}>
            <h3 style={styles.cardTitle}>GLOBAL VISIBILITY</h3>
            <div style={styles.cardText}>
              Opportunities for placement on leading <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                international platforms
              </span> such as National Geographic and History Channel, with amplification across <span style={{ color: "#b53a33", fontWeight: 700, fontStyle: "italic" }}>
                The Heritage Guardian channels
              </span>
            </div>
          </div>
        </PapyrusCard>
      </div>

      <p style={styles.paragraph}>
        Your heritage deserves more than preservation. <br />
        It deserves a place in the <span style={styles.highlight}>global narrative</span>.
      </p>
    </section>
  );
}