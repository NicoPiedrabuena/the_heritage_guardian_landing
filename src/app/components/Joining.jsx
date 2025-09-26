import React from "react";

const CARD_MASK_URL = "/mascaras/papiro.png"; // tu PNG del borde


function PapyrusCard({ children }) {
  return (
    <div
      style={{
        position: "relative",
        padding: "26px 28px",          // ↑ más padding
        lineHeight: 1.65,
        color: "rgba(0,0,0,.86)",
        background: "#f3dfc7",
        WebkitMaskImage: `url(${CARD_MASK_URL})`,
        maskImage: `url(${CARD_MASK_URL})`,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        filter: "drop-shadow(0 10px 18px rgba(0,0,0,.20))",
        minHeight: 160,                // ↑ un poco más alta 
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",           // centrado horizontal del texto
        fontSize: 18,                  // ↑ tamaño del texto en la card
      }}
    >
      {children}
    </div>
  );
}

export default function Joining() {
  const Emph = ({ children }) => (
    <em style={{ fontFamily: "serif", fontStyle: "italic", fontWeight: 900 }}>
      {children}
    </em>
  );

  return (
    <section
      style={{
        padding: "56px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "#2b2b2b",
        gap: 14,
      }}
    >
      <h2 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>
        Joining the <Emph>Alliance</Emph>
      </h2>

      <div
        style={{
          height: 1,
          width: 200,
          background: "rgba(0,0,0,.35)",
          margin: "12px auto 18px",
        }}
      />

      <div style={{ fontSize: 14, letterSpacing: 0.4, opacity: 0.75 }}>
        By invitation only
      </div>

      <div style={{ marginTop: 18, fontSize: 20, fontWeight: 700 }}>
        What it means to <Emph>join the Alliance</Emph>:
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
          gap: 18,
          width: "min(980px, 100%)",
          marginTop: 16,
        }}
      >
        <PapyrusCard>
          <span style={{ color: "#b53a33", fontWeight: 700 }}>
            A documentary production
          </span>{" "}
          of cinematic quality, conceived as an official cultural legacy for your nation.
        </PapyrusCard>

        <PapyrusCard>
          A curated{" "}
          <span style={{ color: "#b53a33", fontWeight: 700 }}>photographic archive</span>{" "}
          with full institutional rights for press, tourism, and official communication.
        </PapyrusCard>

        <PapyrusCard>
          International visibility through our alliances with{" "}
          <span style={{ color: "#b53a33", fontWeight: 700 }}>National Geographic</span>,{" "}
          <span style={{ color: "#b53a33", fontWeight: 700 }}>History Channel</span>{" "}
          and other global platforms.
        </PapyrusCard>
      </div>

   <p
        style={{
          marginTop: 26,
          maxWidth: 980,               // ↑
          fontSize: 20,                // ↑
          lineHeight: 1.65,
          fontStyle: "italic",
        }}
      >
        Your heritage deserves more than preservation.{" "}
        <br />
        <span style={{ color: "#b53a33", fontWeight: 800, display: "inline-block" }}>
          It deserves a placein the global narrative.
        </span>
      </p>
    </section>
  );
}