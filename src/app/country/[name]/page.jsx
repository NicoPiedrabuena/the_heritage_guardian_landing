"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import CountryNavbar from "../../components/CountryNavbar";
import Footer from "../../components/Footer";

/** Manifest por país (JS puro) */
const TIMELINE_MANIFEST = {
  argentina: {
    banner: "/timeline/argentina/argentina.png",
    text: "/timeline/argentina/text.png",
	footer: "/timeline/argentina/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/argentina/eventos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "f6QFJUkORmQ", // <- reemplaza por tu ID de YouTube
            top: "1%",  // distancia desde el borde superior de la imagen
            left: "34%", // distancia desde el borde izquierdo
            width: "45%", // ancho del video
            title: "Argentina From Above",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "JTGcQ535Rc0",
            top: "25%",
           left: "34%", // distancia desde el borde izquierdo
            width: "45%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "3n-yLLKnjgE",
            top: "70%",
           left: "34%", // distancia desde el borde izquierdo
            width: "45%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
  saudiArabia: {
    banner: "/timeline/saudiArabia/saudiArabia.png",
    text: "/timeline/saudiArabia/text.png",
	footer: "/timeline/saudiArabia/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/saudiArabia/eventos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "f6QFJUkORmQ", // <- reemplaza por tu ID de YouTube
            top: "0%",  // distancia desde el borde superior de la imagen
            left: "42%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "Argentina From Above",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "JTGcQ535Rc0",
            top: "58%",
           left: "42%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          }, 
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
  morocco: {
    banner: "/timeline/morocco/morocco.png",
    text: "/timeline/morocco/text.png",
		footer: "/timeline/morocco/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/morocco/eventos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "rn08zkcQYd8", // <- reemplaza por tu ID de YouTube
            top: "1%",  // distancia desde el borde superior de la imagen
            left: "34%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "CAMELS, SHIPS OF THE DESERT",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "JTGcQ535Rc0",
            top: "47%",
           left: "34%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          }, 
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
  india: {
    banner: "/timeline/india/india.png",
    text: "/timeline/india/text.png",
	footer: "/timeline/india/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/india/eventos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "oFdIkCbc9-s", // <- reemplaza por tu ID de YouTube
            top: "1%",  // distancia desde el borde superior de la imagen
            left: "34%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "CAMELS, SHIPS OF THE DESERT",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "JTGcQ535Rc0",
            top: "45%",
           left: "34%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          }, 
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
  mongolia: {
    banner: "/timeline/mongolia/mongolia.png",
    text: "/timeline/mongolia/text.png",
    footer: "/timeline/mongolia/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/mongolia/evetos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "JTGcQ535Rc0", // <- reemplaza por tu ID de YouTube
            top: "1%",  // distancia desde el borde superior de la imagen
            left: "34%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "CAMELS, SHIPS OF THE DESERT",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "JTGcQ535Rc0",
            top: "54%",
           left: "34%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          }, 
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
  brazil: {
    banner: "/timeline/brazil/brazil.png",
    text: "/timeline/brazil/text.png",
    footer: "/timeline/brazil/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/brazil/eventos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "JTGcQ535Rc0", // <- reemplaza por tu ID de YouTube
            top: "1%",  // distancia desde el borde superior de la imagen
            left: "40%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "CAMELS, SHIPS OF THE DESERT",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "oJ3zIhxMXXw",
            top: "60%",
           left: "40%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          }, 
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
  mexico: {
    banner: "/timeline/mexico/mexico.png",
    text: "/timeline/mexico/text.png",
    footer: "/timeline/mexico/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/mexico/eventos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "JTGcQ535Rc0", // <- reemplaza por tu ID de YouTube
            top: "0%",  // distancia desde el borde superior de la imagen
            left: "34%", // distancia desde el borde izquierdo
            width: "45%", // ancho del video
            title: "CAMELS, SHIPS OF THE DESERT",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },
          {
            videoId: "JTGcQ535Rc0",
            top: "56%",
           left: "34%", // distancia desde el borde izquierdo
            width: "45%", // ancho del video
            title: "Horses & Humans",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          }, 
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
  indonesia: {
    banner: "/timeline/indonesia/indonesia.png",
    text: "/timeline/indonesia/text.png",
    footer: "/timeline/indonesia/footer.png",
    layers: [
      {
        type: "image",
        src: "/timeline/indonesia/eventos.png",
        alt: "events blocks",
        maxWidth: 3060,
        marginTop: 20,
        zIndex: 2,

        /** 👇 Videos superpuestos sobre la imagen (usar %).  */
        overlayVideos: [
          // EJEMPLOS — cambia videoId y posiciones a gusto
          {
            videoId: "oQHQJWoXTbo", // <- reemplaza por tu ID de YouTube
            top: "1%",  // distancia desde el borde superior de la imagen
            left: "34%", // distancia desde el borde izquierdo
            width: "50%", // ancho del video
            title: "CAMELS, SHIPS OF THE DESERT",
			 mask: {
      src: "/mascaras/maskyoutube.png",
      size: "100% 100%",   // "cover" o "contain" si preferís
      repeat: "no-repeat", // casi siempre no-repeat
      position: "center"   // "top left", "bottom center", etc.
    }
          },  
          // Agrega los que necesites
        ],
      },
      { type: "spacer", height: 24 },
    ],
  },
};

export default function CountryScreen() {
  const params = useParams();

  // Soporta name como string o string[]
  const rawName = Array.isArray(params?.name) ? params.name[0] : (params?.name || "");
  const countryKey = useMemo(() => String(rawName).toLowerCase().replaceAll("-", " "), [rawName]);

  // Normaliza para mostrar “Argentina”, “Saudi Arabia”, etc.
  const countryTitle = useMemo(() => {
    if (!countryKey) return "";
    return countryKey
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }, [countryKey]);
  console.log(countryKey,'arre nakewe');
  // Usa manifest según el país; fallback a argentina si no existe
  const manifest = TIMELINE_MANIFEST[countryKey] || TIMELINE_MANIFEST["saudiArabia"];

  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => setFade(true), 60);
    return () => clearTimeout(t);
  }, [rawName]);

  return (
    <div
      style={{
        flexDirection: "column",
        transition: "opacity 0.4s ease",
        opacity: fade ? 1 : 0,
      }}
    >
		
      {/* === HERO / BANNER === */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          overflow: "hidden",
        }}
      >

        <img
          src={manifest.banner}
          alt={countryTitle}
          style={{ width: "100vw", height: "auto", display: "block", objectFit: "cover" }}
        />

        {/* Navbar encima del banner */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 20,
            backdropFilter: "blur(2px)",
          }}
          className="nav-desktop"
        >
          <CountryNavbar />
        </div>
		<div>
			
        <img
          src={manifest.text}
          alt={countryTitle}
           style={{
    width: "100%",
    maxWidth: "1400px",
    height: "auto",
    display: "block",
    margin: "40px auto 0", // top 40px, centrado horizontal con auto
    objectFit: "cover",
  }}
        /> 
		</div>

        {/* Título (si quieres texto en vez de imagen) */}
         
      </div>

      {/* === LAYERS / TIMELINE EN IMÁGENES === */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "24px 16px 32px" }}>
        <div
          style={{
            width: "min(1500px, 100%)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {manifest.layers.map((layer, i) => {
            if (layer.type === "spacer") {
              return <div key={`spacer-${i}`} style={{ height: layer.height, width: "100%" }} />;
            }

            // Capa de imagen con posibles videos superpuestos
            const hasVideos = Array.isArray(layer.overlayVideos) && layer.overlayVideos.length > 0;

            return (
              <div
                key={`${layer.src}-${i}`}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  marginTop: layer.marginTop || 0,
                  marginBottom: layer.marginBottom || 0,
                  zIndex: layer.zIndex || 2,
                }}
              >
                {/* Contenedor relativo para poder posicionar los iframes por % */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: layer.maxWidth ? `${layer.maxWidth}px` : "1000px",
                  }}
                >
                  <img
                    src={layer.src}
                    alt={layer.alt || ""}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transform: layer.offsetX ? `translateX(${layer.offsetX}px)` : undefined,
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.10))",
                    }}
                  />

                  {hasVideos &&
                    layer.overlayVideos.map((v, idx) => (
                      <div
                        key={`ov-${idx}`}
                        style={{
                          position: "absolute",
                          top: v.top || "0%",
                          left: v.left || "0%",
                          width: v.width || "30%",
                          aspectRatio: "16 / 9", // mantiene 16:9
                          // Para bordes suaves, opcional:
                          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                          borderRadius: 8,
                          overflow: "hidden",
                          zIndex: 5,
						   ...(v.mask?.src
      ? {
          // 2 capas: [tu máscara, rectángulo blanco] -> XOR para invertir
          WebkitMaskImage: `url(${v.mask.src}), linear-gradient(#fff, #fff)`,
          maskImage: `url(${v.mask.src}), linear-gradient(#fff, #fff)`,

          WebkitMaskSize: `${v.mask.size || "100% 100%"}, 100% 100%`,
          maskSize: `${v.mask.size || "100% 100%"}, 100% 100%`, 
          WebkitMaskComposite: "xor",   // Chrome/Edge/Safari
          maskComposite: "exclude",     // estándar (cuando esté disponible)
          maskMode: v.mask.mode || "alpha",
        }
      : {}),
  }}
>
                        <iframe
                          loading="lazy"
                          src={`https://www.youtube.com/embed/${v.videoId}?rel=0&modestbranding=1&playsinline=1`}
                          title={v.title || "video"}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "0",
                            display: "block",
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
		  <img
          src={manifest.footer}
          alt={countryTitle}
          style={{
    width: "90%",
    maxWidth: "1200px",
    height: "auto",
    display: "block",
    margin: "40px auto 0", // top 40px, centrado horizontal con auto
    objectFit: "cover",
  }}
        />

      {/* CTA back */}
    <div style={{ textAlign: "center", margin: "50px 10px 240px 0px" }}>
  <button
    onClick={() => {
      window.location.href = "https://www.instagram.com/nachosaso/?hl=en";
    }}
    style={{
      color: "#5a3c22",
      border: "2px solid #5a3c22",
      borderRadius: 25,
      padding: "12px 32px",
      fontWeight: 600,
      fontSize: 16,
      cursor: "pointer",
      fontFamily: "var(--font-family-primary)",
      transition: "all 0.25s ease",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      background: "transparent",
    }}
  >
    Discover more on our channel
  </button>
</div>

<div style={{ textAlign: "center", margin: "8px 0 0 0" }}>
  <button
    onClick={() => {
      window.location.href = "/#cultural-map";
    }}
    style={{
      color: "#5a3c22",
      border: "2px solid #5a3c22",
      borderRadius: 25,
      marginBottom: "25px",
      padding: "12px 32px",
      fontWeight: 600,
      fontSize: 16,
      cursor: "pointer",
      fontFamily: "var(--font-family-primary)",
      transition: "all 0.25s ease",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      background: "transparent",
    }}
  >
    Back to Cultural Map
  </button>
</div>


      <Footer />
    </div>
  );
}
