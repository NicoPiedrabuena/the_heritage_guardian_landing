import React, { useRef } from "react";

const MASK_URL = "/mascaras/mascara_vertical.png";

function TitleWithRule({ text }) {
  return (
    <div>
      <h2 className="title-h2">
        {text}
      </h2>
      <div className="rule-line" style={{ marginTop: '4px' }} />
    </div>
  );
}
function P({ children }) {
  return (
    <p className="texto-parrafos">
      {children}
    </p>
  );
}

export default function Whoweare() {
  const videoRef = useRef(null);

  return (
    <section className="who-we-are">
      {/* Columna de texto */}
      <div className="who-we-are-content">
        <TitleWithRule text="WHO WE ARE" />
        <P className="">
          The Heritage Guardian is an <b><i>international cultural alliance</i></b>{" "}
          dedicated to turning <b><i>living heritage into global presence.</i></b>
        </P>

        <TitleWithRule text="WHAT WE DO" />
        <P className="">
          We position and promote the <b><i>culture and identity</i></b>, of each country on the global stage through cinematic documentaries, digital capsules, books, and educational content.
        </P>

        <TitleWithRule text="HOW WE DO IT" />
        <P className="">
          Through <b><i>alliances with ministries, embassies, and cultural institutions.</i></b> <br></br> Also with brands and banks that seek to associate with that identity, becoming cultural sponsors and amplifying international reach.
        </P>

        <TitleWithRule text="WHY WE DO IT" />
         <P className="">
          Because culture shared beyond borders becomes influence. Just as <b><i>football unites across borders</i></b>, culture has the same power, to inspire, to connect.<br></br> We believe that <b><i>visibility is preservation</i></b>: it strengthens nation branding, attracts tourism and investment, and secures a cultural legacy for future generations.
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
