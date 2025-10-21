"use client";

import "react-tooltip/dist/react-tooltip.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import TitleWithRule from "./TitleWithRule";
// importa la lista global
import { ACTIVE_COUNTRIES } from "../../countryData";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapSection() {
  const headerRef = useRef(null);
  const mapRef = useRef(null); // ref al contenedor del mapa para posicionar la card
  const footerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(1200);
  const router = useRouter();
  const [hovered, setHovered] = useState(null); // { name, slug }
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const colors = {
    baseFill: "var(--color-mapa-base)",
    activeFill: "var(--color-mapa-activo)",
    stroke:   "var(--color-mapa-stroke)",
    title:    "var(--color-mapa-titulo)",
    copy:     "var(--color-mapa-copy)",
    accent:   "var(--color-mapa-accent)",
  };

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // simple flag para estilos responsive en este componente
  const isMobile = windowWidth < 700;

  // estilos inline para las métricas: en fila, centradas; en móvil permiten scroll horizontal
  const metricsStyle = {
    display: "flex",
    flexDirection: "row",
    gap: isMobile ? 12 : 28,
    justifyContent: isMobile ? "space-between" : "center",
    alignItems: "center",
    flexWrap: isMobile ? "wrap" : "nowrap",         // permite 2 filas en móvil
    overflowX: isMobile ? "visible" : "auto",
    padding: isMobile ? "8px 6px" : "12px 0",
    width: "100%",
    boxSizing: "border-box"
  };

  const handleCountryClick = (name) => {
    // Navega a la pantalla del país
    router.push(`/country/${encodeURIComponent(name)}`);
  };

  // helper: slug simple para buscar imagen/flag
  const toSlug = (name = "") =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // escala responsive: valores ajustados para mostrar el mapamundi completo
  const scale = (() => {
    if (windowWidth < 360) return 70;
    if (windowWidth < 480) return 80;
    if (windowWidth < 768) return 95;
    if (windowWidth < 1024) return 140;
    return 200;
  })();

  // configuración de proyección: usar una versión "normal" en móvil para evitar zoom extraño
  const projectionConfig = (() => {
    // aumentar escala en móviles para que el mapa se vea más grande
    if (windowWidth < 360) return { scale: 130, center: [0, 0] };   // very small screens — mayor
    if (windowWidth < 600) return { scale: 180, center: [0, 0] };  // mobile: mostrar mundo más grande
    return { scale, center: [0, 10] };                             // tablet/desktop: configuración más amplia
  })();
  
  return (
    <section className="map-section">
      {/* HEADER compactado: agrupar para estilos móviles */}
      <div className="map-header">
        <TitleWithRule text="Our Global cultural Map" ruleWidth="600px" style={{ fontSize: 'clamp(28px, 4.8vw, 46px)', lineHeight: 1.05, margin: 0 }} />
        {/* Texto actualizado a 9 países y 30+ eventos (más pequeño y centrado) */}
        <p
          className="map-intro"
          style={{
            lineHeight: 1.05,
            margin: isMobile ? '8px 0 6px' : '12px 0 6px',
            fontWeight: 600,
            fontSize: isMobile ? 13 : 16,
            textAlign: 'center'
          }}
        >
          In 9 countries, documenting 30+ iconic cultural events with ministries, embassies, and institutions worldwide.
        </p>

        <div
          className="map-intro-cta"
          style={{
            textAlign: 'center',
            fontSize: isMobile ? 13 : 15,
            marginBottom: isMobile ? 6 : 10
          }}
        >
          <span style={{ lineHeight: 1.05, fontWeight: 700 }}>
            Click <span style={{ color: colors.accent }}>on</span> a highlighted country to see more
          </span>
        </div>
      </div> 

      {/* MAP CONTAINER — ahora el CSS controla altura/proporción */}
      <div
        ref={mapRef}
        className={`map-container ${windowWidth < 600 ? 'map-container-mobile' : ''}`}
        style={{ position: "relative" }} // defensa adicional si CSS no aplica
      >
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={projectionConfig}
          width={1000}
          height={600}
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",     // rellena el contenedor sin deformar
            height: "100%",
            background: "transparent",
          }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.properties.name !== "Antarctica")
                .map((geo) => {
                  const name = geo.properties.name;
                  const isActive = ACTIVE_COUNTRIES.includes(name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      data-tooltip-id="map-tip"
                      data-tooltip-content={name}
                      onClick={() => { if (isActive) handleCountryClick(name); }}
                      onMouseEnter={(evt) => {
                        if (!isActive) return;
                        const rect = mapRef.current?.getBoundingClientRect();
                        const x = evt.clientX - (rect?.left || 0);
                        const y = evt.clientY - (rect?.top || 0);
                        setHovered({ name, slug: toSlug(name) });
                        setHoverPos({ x, y });
                      }}
                      onMouseMove={(evt) => {
                        if (!isActive) return;
                        const rect = mapRef.current?.getBoundingClientRect();
                        const x = evt.clientX - (rect?.left || 0);
                        const y = evt.clientY - (rect?.top || 0);
                        setHoverPos({ x, y });
                      }}
                      onMouseLeave={() => {
                        setHovered(null);
                      }}
                      style={{
                        default: {
                          fill: isActive ? colors.activeFill : colors.baseFill,
                          stroke: colors.stroke,
                          strokeWidth: 0.6,
                          outline: "none",
                          cursor: isActive ? "pointer" : "default",
                        },
                        hover: {
                          fill: isActive ? "#c77a4a" : "#efe0c8",
                          outline: "none",
                          cursor: isActive ? "pointer" : "default",
                        },
                        pressed: {
                          fill: isActive ? "#c77a4a" : "#efe0c8",
                          outline: "none",
                          cursor: isActive ? "pointer" : "default",
                        },
                      }}
                    />
                  );
                })
             }
           </Geographies>
         </ComposableMap>

        {/* Hover card para países activos */}
        {hovered && (
          (() => {
            const cardW = windowWidth < 600 ? 180 : 220;
            const cardH = 120;
            const container = mapRef.current;
            const maxLeft = (container?.clientWidth || 0) - cardW - 8;
            const left = Math.max(8, Math.min(maxLeft, hoverPos.x + 12));
            const top = Math.max(8, hoverPos.y - cardH - 12);
            const imgSrc = `/banners/${hovered.slug}.png`; // ahora carga desde public/banners/
            const flagFallback = `/flags/${hovered.slug}.png`;
            console.log(imgSrc);
            return (
              <div
                className="map-hover-card"
                style={{
                  position: "absolute",
                  left,
                  top,
                  width: cardW,
                  background: "#ffffff",
                  borderRadius: 10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  overflow: "hidden",
                  zIndex: 40,
                  pointerEvents: "none" // solo informativo
                }}
              >
                <div style={{ width: "100%", height: 70, overflow: "hidden", background: "#222" }}>
                  <img
                    src={imgSrc}
                    alt={hovered.name}
                    onError={(e) => { e.currentTarget.src = flagFallback; e.currentTarget.style.objectFit = "contain"; }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "8px 10px" }}> 
                  <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Click to see more</div>
                </div>
              </div>
            );
          })()
        )}
      </div>

      {/* FOOTER / MÉTRICAS compactas */}
      <div ref={footerRef} className="map-metrics" style={metricsStyle} aria-label="Map metrics">
        <Metric big="+ 500M" caption="Global Impressions" isMobile={isMobile} />
        <Metric big="+ 9"    caption="Countries"            isMobile={isMobile} />
        <Metric big="+ 30"   caption="Cultural Events"      isMobile={isMobile} />
        <Metric big="+ 7"    caption="Institutional Alliances" isMobile={isMobile} />
      </div>

      <Tooltip
        id="map-tip"
        place="top"
        style={{
          padding: "6px 8px",
          fontSize: "0.85rem",
          background: "rgba(0,0,0,.85)",
          color: "white",
          borderRadius: 6,
          border: "1px solid rgba(255,255,255,.12)",
        }}
      />
    </section>
  );
}

function Metric({ big, caption, isMobile = false }) {
  // tamaño más compacto en móvil
  const bigStyle = {
    fontSize: isMobile ? "clamp(18px, 8vw, 28px)" : undefined,
    fontWeight: undefined
  };
  const captionStyle = {
    fontSize: isMobile ? 12 : undefined,
    marginTop: 6
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: isMobile ? "48%" : 140,    // en móvil cada métrica ocupa ~48% para formar dos columnas
    flex: isMobile ? "0 0 48%" : "0 0 auto",
    boxSizing: "border-box",
    padding: isMobile ? "8px 6px" : undefined
  };

  return (
    <div className="map-metric" style={containerStyle}>
      <div className="map-metric-big" style={bigStyle}>{big}</div>
      <div className="map-metric-caption" style={captionStyle}>{caption}</div>
    </div>
  );
}