"use client";

import "react-tooltip/dist/react-tooltip.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
// importa la lista global
import { ACTIVE_COUNTRIES } from "../../countryData";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapSection() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [mapHeight, setMapHeight] = useState(400);
  const [windowWidth, setWindowWidth] = useState(1200);
  const router = useRouter();

  const colors = {
    baseFill: "var(--color-mapa-base)",
    activeFill: "var(--color-mapa-activo)",
    stroke:   "var(--color-mapa-stroke)",
    title:    "var(--color-mapa-titulo)",
    copy:     "var(--color-mapa-copy)",
    accent:   "var(--color-mapa-accent)",
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

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleCountryClick = (name) => {
    // Navega a la pantalla del país
    router.push(`/country/${encodeURIComponent(name)}`);
  };

  return (
    <section className="map-section">
      {/* HEADER compactado */}
      <div ref={headerRef} className="map-header">
        <h2 className="title">
          Our Global{" "}
          <em className="title-emphasis">
            Cultural Map
          </em>
        </h2>

        <p className="map-description">
          Around the world, The Heritage Guardian has worked alongside ministries, embassies, and
          cultural institutions in <b>8 countries</b>, documenting more than <b>30</b> emblematic
          cultural events and bringing them to international audiences.
        </p>

        <div className="map-instruction">
          <span style={{ fontStyle: "italic" }}>
            Click <span style={{ color: colors.accent }}>on</span> a highlighted country
          </span>{" "}
          to see more
        </div>
      </div>

      {/* MAP CONTAINER — se adapta al alto disponible y recorta cualquier extra */}
      <div
        className={`map-container ${windowWidth < 600 ? 'map-container-mobile' : ''}`}
      >
        <ComposableMap
          projectionConfig={{ scale: windowWidth < 600 ? 180 : 180 }} // escala mayor en mobile
          style={{
            width: "100%",
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
      <div ref={footerRef} className="map-metrics">
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
    <div className="map-metric">
      <div className="map-metric-big">{big}</div>
      <div className="map-metric-caption">{caption}</div>
    </div>
  );
}