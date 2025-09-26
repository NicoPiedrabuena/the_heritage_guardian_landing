import React, { useRef } from "react";

const MASK_URL = "/mascaras/mascara_vertical.png";

function Title({ lead, emph }) {
  return (
    <h2 style={{ fontSize: 36, fontWeight: 800, margin: "12px 0 6px" }}>
      {lead}{" "}
      <em style={{ fontFamily: "serif", fontWeight: 900, fontStyle: "italic" }}>
        {emph}
      </em>
    </h2>
  );
}
function Rule() {
  return (
    <div
      style={{
        height: 1,
        width: "72%",
        background: "rgba(0,0,0,.45)",
        margin: "6px 0 14px",
      }}
    />
  );
}
function P({ children }) {
  return (
    <p style={{ margin: "0 0 12px", lineHeight: 1.6, color: "rgba(0,0,0,.82)" }}>
      {children}
    </p>
  );
}

export default function Whoweare() {
  const videoRef = useRef(null);

  return (
    <section
      style={{
        padding: "56px 16px",
        display: "flex",
        flexWrap: "wrap",
        gap: 40,
        justifyContent: "center",
        alignItems: "stretch",
        color: "#1b1b1b",
      }}
    >
      {/* Columna de texto */}
      <div
        style={{
          flex: "1 1 520px",
          maxWidth: 760,
          minWidth: 280,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title lead="Who" emph="we are" />
        <Rule />
        <P>
          The Heritage Guardian is an <b><i>international cultural alliance</i></b>{" "}
          dedicated to transforming <b><i>living heritage into global presence</i></b>.
        </P>

        <Title lead="What do" emph="we do" />
        <Rule />
        <P>
          We <b>highlight nations</b> as cultural leaders by <b>showcasing</b> their
          traditions, stories, and identity on the world stage.
        </P>

        <Title lead="How do" emph="we do it" />
        <Rule />
        <P>
          Through <b>strategic alliances</b> with ministries, embassies, and cultural
          institutions, we create <b>high-impact productions</b> and initiatives that
          connect cultures with global audiences.
        </P>

        <Title lead="How do" emph="we do it" />
        <Rule />
        <P>
          Because in today’s world, the nations that share their culture are the ones{" "}
          <b>shaping</b> the global narrative. At The Heritage Guardian{" "}
          <b>we believe that visibility is preservation</b>.
        </P>
      </div>

      {/* Columna de video */}
      <div
        style={{
          flex: "1 1 360px",
          minWidth: 280,
          maxWidth: 460,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "2 / 3" }}>
          {/* tenue overlay para contraste */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0) 60%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <video
            ref={videoRef}
            src="/videos/video.mp4"
            preload="metadata"
            playsInline
            muted
            loop
            autoPlay
            controls={false}
            disablePictureInPicture
            onLoadedData={() => videoRef.current?.play().catch(() => {})}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              background: "transparent",

              /* --- MÁSCARA INVERTIDA (2 capas) --- */
              WebkitMaskImage: `linear-gradient(#fff,#fff), url(${MASK_URL})`,
              WebkitMaskRepeat: "no-repeat, no-repeat",
              WebkitMaskSize: "100% 100%, cover",   // si tu PNG calza exacto: "100% 100%, 100% 100%"
              WebkitMaskPosition: "center, center",
              WebkitMaskComposite: "xor",

              maskImage: `linear-gradient(#fff,#fff), url(${MASK_URL})`,
              maskRepeat: "no-repeat, no-repeat",
              maskSize: "100% 100%, cover",
              maskPosition: "center, center",
              maskComposite: "exclude",

              boxShadow: "0 8px 24px rgba(0,0,0,.25)",
            }}
          />

          {/* Fallback: si no hay soporte de mask-composite, mostramos sin recorte */}
          <noscript />
        </div>
      </div>
    </section>
  );
}
