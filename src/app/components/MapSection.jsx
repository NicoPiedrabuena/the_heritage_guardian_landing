"use client";

import "react-tooltip/dist/react-tooltip.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import React, { useEffect, useRef, useState } from "react";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const ACTIVE_COUNTRIES = [
  "Argentina","Morocco","India","Saudi Arabia","Indonesia","Mauritius",
  "Mexico","Brazil","Mongolia",
];

export default function MapSection() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [mapHeight, setMapHeight] = useState(400);

  const colors = {
    baseFill: "#f5ebdb",
    activeFill: "#b6693b",
    stroke:   "#5a3c22",
    title:    "#2a2017",
    copy:     "rgba(42,32,23,.9)",
    accent:   "#b53a33",
  };

  // Calcula alto exacto disponible para el mapa (sin blancos arriba/abajo)
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      const head = headerRef.current?.offsetHeight || 0;
      const foot = footerRef.current?.offsetHeight || 0;
      const available = Math.max(window.innerHeight - head - foot - 8, 220); // margen mínimo
      setMapHeight(available);
    });
    const onResize = () => ro.callback && ro.callback([]);
    ro.observe(document.body);
    window.addEventListener("resize", onResize);
    // medición inicial
    const head = headerRef.current?.offsetHeight || 0;
    const foot = footerRef.current?.offsetHeight || 0;
    setMapHeight(Math.max(window.innerHeight - head - foot - 8, 220));
    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  const handleCountryClick = (name) => console.log("País:", name);

  return (
    <section
      style={{
        background: "transparent",
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        rowGap: 0,
        padding: "4px 6px",
      }}
    >
      {/* HEADER compactado */}
      <div ref={headerRef} style={{ textAlign: "center" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(26px, 4vw, 44px)",
            color: colors.title,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Our Global{" "}
          <em style={{ fontFamily: "serif", fontStyle: "italic", fontWeight: 900 }}>
            Cultural Map
          </em>
        </h2>

        <p
          style={{
            margin: "4px auto 2px",
            maxWidth: 760,
            color: colors.copy,
            lineHeight: 1.4,
            fontSize: "clamp(12px, 1.5vw, 15px)",
          }}
        >
          Around the world, The Heritage Guardian has worked alongside ministries, embassies, and
          cultural institutions in <b>8 countries</b>, documenting more than <b>30</b> emblematic
          cultural events and bringing them to international audiences.
        </p>

        <div
          style={{
            fontWeight: 700,
            marginTop: 0,
            fontSize: "clamp(11px, 1.4vw, 14px)",
          }}
        >
          <span style={{ fontStyle: "italic" }}>
            Click <span style={{ color: colors.accent }}>on</span> a highlighted country
          </span>{" "}
          to see more
        </div>
      </div>

      {/* MAP CONTAINER — se adapta al alto disponible y recorta cualquier extra */}
      <div
        style={{
          placeSelf: "center",
          width: "min(96vw, 1100px)",
          height: mapHeight + "px",
          overflow: "hidden",                // <-- sin blancos
        }}
      >
        <ComposableMap
          projectionConfig={{ scale: 158 }}
          preserveAspectRatio="xMidYMid slice" // <-- llena y recorta
          style={{ width: "100%", height: "100%", background: "transparent" }}
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
                      onClick={() => handleCountryClick(name)}
                      style={{
                        default: {
                          fill: isActive ? colors.activeFill : colors.baseFill,
                          stroke: colors.stroke,
                          strokeWidth: 0.6,
                          outline: "none",
                        },
                        hover: {
                          fill: isActive ? "#c77a4a" : "#efe0c8",
                          outline: "none",
                        },
                        pressed: {
                          fill: isActive ? "#c77a4a" : "#efe0c8",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* FOOTER / MÉTRICAS compactas */}
      <div
        ref={footerRef}
        style={{
          placeSelf: "center",
          width: "min(96vw, 860px)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          textAlign: "center",
          color: colors.title,
          marginTop: 0,
        }}
      >
        <Metric big="+ 500M" caption="Global Impressions" />
        <Metric big="+ 9"    caption="Countries" />
        <Metric big="+ 30"   caption="Cultural Events" />
        <Metric big="+ 7"    caption="Institutional Alliances" />
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

function Metric({ big, caption }) {
  return (
    <div style={{ display: "grid", gap: 1, justifyItems: "center" }}>
      <div style={{ fontSize: "clamp(20px, 2.6vw, 600px)", fontWeight: 900 }}>{big}</div>
      <div style={{ fontSize: "clamp(11px, 1.2vw, 23px)", opacity: 0.85 }}>{caption}</div>
    </div>
  );
}
