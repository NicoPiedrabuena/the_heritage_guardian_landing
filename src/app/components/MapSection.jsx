"use client";

import React, { useEffect, useState } from "react";

export default function MapSection() {
  // Responsive hook
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lista de países activos basada en la imagen
  const activeCountries = [
    'Argentina', 'Brazil', 'Mexico', 'Morocco', 'Saudi Arabia', 'India', 'Indonesia', 'Mongolia'
  ];

  const handleCountryHover = (country, event) => {
    setHoveredCountry(country);
    const mapContainer = event.currentTarget.closest('div').parentElement;
    const rect = mapContainer.getBoundingClientRect();
    
    // Calcular posición para que el popup no se salga de pantalla
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    
    // Ajustar posición si está muy cerca del borde derecho
    if (x > rect.width * 0.7) {
      x = x - 270; // Ancho aproximado del popup + margen
    } else {
      x = x + 15;
    }
    
    // Ajustar posición si está muy cerca del borde superior
    if (y < 120) {
      y = y + 20;
    } else {
      y = y - 100;
    }
    
    setHoverPosition({ x, y });
  };

  const handleCountryLeave = () => {
    setHoveredCountry(null);
  };

  const handleCountryClick = (country) => {
    // Navegar a la página del país
    const countryPath = country.toLowerCase().replace(' ', '');
    window.location.href = `/country/${countryPath}`;
  };

  const sectionStyle = {
    position: 'relative',
    width: '100vw',
    minHeight: isMobile ? 'auto' : '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '10px 5px' : '40px 20px',
    boxSizing: 'border-box',
    margin: '0',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw'
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '8px' : '25px'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block'
  };
  
  return (
    <section id="cultural-map" style={sectionStyle}>
      <div style={containerStyle}>
        {/* Título */}
        <img 
          src="/map/titulo.png" 
          alt="Our Global Cultural Map" 
          style={{
            ...imageStyle,
            maxWidth: isMobile ? '90vw' : '70vw',
            width: '100%'
          }}
        />

        {/* Click instruction */}
        <img 
          src="/map/click.png" 
          alt="Click on a highlighted country to see more" 
          style={{
            ...imageStyle,
            maxWidth: isMobile ? '15vw' : '20vw',
            width: '100%'
          }}
        />

        {/* Map with hover areas */}
        <div style={{ 
          position: 'relative', 
          maxWidth: isMobile ? '85vw' : '60vw',
          width: '100%',
          marginTop: isMobile ? '2px' : '10px',
          marginBottom: isMobile ? '2px' : '10px'
        }}>
          <img 
            src="/map/map.png" 
            alt="Global Cultural Map" 
            useMap="#worldmap"
            style={{
              ...imageStyle,
              width: '100%',
              cursor: 'default'
            }}
          />
          
          {/* Overlay con áreas de hover más precisas */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}>
            {/* Argentina */}
            <div
              style={{
                position: 'absolute',
                left: '28%',
                top: '80%',
                width: '4%',
                height: '8%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('Argentina', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('Argentina')}
              title="Argentina - Click to explore"
            />
            
            {/* Brazil */}
            <div
              style={{
                position: 'absolute',
                left: '30%',
                top: '62%',
                width: '6%',
                height: '12%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('Brazil', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('Brazil')}
              title="Brazil - Click to explore"
            />
            
            {/* Mexico */}
            <div
              style={{
                position: 'absolute',
                left: '18%',
                top: '48%',
                width: '5%',
                height: '6%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('Mexico', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('Mexico')}
              title="Mexico - Click to explore"
            />
            
            {/* Morocco */}
            <div
              style={{
                position: 'absolute',
                left: '44%',
                top: '43%',
                width: '3%',
                height: '4%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('Morocco', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('Morocco')}
              title="Morocco - Click to explore"
            />
            
            {/* Saudi Arabia */}
            <div
              style={{
                position: 'absolute',
                left: '57%',
                top: '48%',
                width: '4%',
                height: '5%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('Saudi Arabia', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('Saudi Arabia')}
              title="Saudi Arabia - Click to explore"
            />
            
            {/* India */}
            <div
              style={{
                position: 'absolute',
                left: '66%',
                top: '48%',
                width: '4%',
                height: '8%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('India', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('India')}
              title="India - Click to explore"
            />
            
            {/* Indonesia */}
            <div
              style={{
                position: 'absolute',
                left: '75%',
                top: '62%',
                width: '6%',
                height: '4%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('Indonesia', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('Indonesia')}
              title="Indonesia - Click to explore"
            />
            
            {/* Mongolia */}
            <div
              style={{
                position: 'absolute',
                left: '72%',
                top: '34%',
                width: '5%',
                height: '4%',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => handleCountryHover('Mongolia', e)}
              onMouseLeave={handleCountryLeave}
              onClick={() => handleCountryClick('Mongolia')}
              title="Mongolia - Click to explore"
            />
          </div>

          {/* Country Card Popup */}
          {hoveredCountry && (
            <div
              style={{
                position: 'absolute',
                left: hoverPosition.x,
                top: hoverPosition.y,
                pointerEvents: 'none',
                zIndex: 1000,
                filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.3))',
                transition: 'all 0.15s ease-in-out'
              }}
            >
              <img 
                src={`/map-cards/${hoveredCountry === 'Saudi Arabia' ? 'ArabiaSaudita' : hoveredCountry}.png`}
                alt={`${hoveredCountry} Cultural Information`}
                style={{
                  maxWidth: isMobile ? '180px' : '220px',
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  margin: 0,
                  padding: 0,
                  border: 'none',
                  borderRadius: '8px'
                }}
              />
            </div>
          )}
        </div>

        {/* Statistics */}
        <img 
          src="/map/stat.png" 
          alt="Statistics: +500M Global Impressions, +9 Countries, +30 Cultural Events, +7 Institutional Alliances" 
          style={{
            ...imageStyle,
            maxWidth: isMobile ? '30vw' : '40vw',
            width: '100%'
          }}
        />
      </div>
    </section>
  );
}