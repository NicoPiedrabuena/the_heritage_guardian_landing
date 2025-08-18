"use client";

import "react-tooltip/dist/react-tooltip.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const ACTIVE_COUNTRIES = [
  "Argentina",
  "Morocco",
  "India",
  "Saudi Arabia",
  "Indonesia",
  "Isla Mauricio",
  "Mexico",
  "Brazil",
  "Mongolia",
];
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  

export default function MapSection() { 
  const handleCountryClick = (countryName) => {
    console.log("País clickeado:", countryName);
    // ejemplo: ir a una URL con query
    // window.location.href = `/country?name=${encodeURIComponent(countryName)}`;
  };
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        background: "#fafafa",
      }}
    >
      {/* Encabezado */}
      <div style={{ flex: "none", padding: "1rem 2rem", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "5rem", color: "#333" }}>
          Cultural Alliances
        </h2>
        <p style={{ margin: "0.5rem 0", fontSize: "2rem", color: "#555" }}>
          We are proud to walk this path together.
        </p>
      </div>

      {/* Mapa */}
      <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
        <ComposableMap
          projectionConfig={{ scale: 200 }}
          style={{ width: "100%", height: "100%" }}
          data-tip=""
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => {
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
                        fill: isActive
                          ? "var(--brand-primary, #d97706)"
                          : "var(--map-inactive, #e5e7eb)",
                        stroke: "var(--map-stroke, #ffffff)",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isActive
                          ? "var(--brand-primary-hover, #f59e0b)"
                          : "var(--map-inactive-hover, #d1d5db)",
                        outline: "none",
                      },
                      pressed: {
                        fill: isActive
                          ? "var(--brand-primary-hover, #f59e0b)"
                          : "var(--map-inactive-hover, #d1d5db)",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        <Tooltip
          id="map-tip"
          place="top"
          style={{
            padding: "0.25rem 0.5rem",
            fontSize: "0.8rem",
            background: "rgba(17,24,39,0.9)", // gris muy oscuro (tailwind gray-900/90)
            color: "white",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      </div>
    </section>
  );
}
