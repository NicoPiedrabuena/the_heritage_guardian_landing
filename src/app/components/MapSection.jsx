'use client';

import 'react-tooltip/dist/react-tooltip.css';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

const ACTIVE_COUNTRIES = ['ARG','MAR','IND','SAU','MNG'];
const FLAGS = [
  { iso: 'MAR', name: 'Morocco',       src: '/flags/maruecos.png' },
  { iso: 'SAU', name: 'Saudi Arabia',  src: '/flags/arabia.png' },
  { iso: 'IND', name: 'India',         src: '/flags/india.png' },
  { iso: 'MNG', name: 'Mongolia',      src: '/flags/mongolia.png' },
  { iso: 'ARG', name: 'Argentina',     src: '/flags/argentina.png' },
];

export default function MapSection() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',        // ocupa toda la ventana
      overflow: 'hidden',
      background: '#fafafa'
    }}>
      {/* Encabezado */}
      <div style={{
        flex: 'none',
        padding: '1rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '5rem',
          color: '#333'
        }}>
          Cultural Alliances
        </h2>
        <p style={{
          margin: '0.5rem 0',
          fontSize: '2rem',
          color: '#555'
        }}>
          We are proud to walk this path together.
        </p>
      </div>

      {/* Banderas */}
      <div style={{
        flex: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '0 2rem 1rem'
      }}>
        {FLAGS.map(f => (
          <div key={f.iso} style={{ textAlign: 'center' }}>
            <img
              src={f.src}
              alt={f.name}
              style={{ width: 100, height: 70, objectFit: 'cover', }}
            />
            <div style={{ fontSize: '0.8rem', color: '#333' }}>{f.name}</div>
          </div>
        ))}
      </div>

      {/* Mapa */}
      <div style={{
        flex: 1,              // toma todo el espacio restante
        minHeight: 0,         // permite que flex-shrink funcione
        position: 'relative'
      }}>
        <ComposableMap
          projectionConfig={{ scale: 200 }}
          style={{ width: '100%', height: '100%' }}
          data-tip=""
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map(geo => {
                const iso = geo.properties.ISO_A3;
                const isActive = ACTIVE_COUNTRIES.includes(iso);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id="tooltip"
                    data-tooltip-content={geo.properties.NAME}
                    style={{
                      default: {
                        fill:     isActive ? '#ADD8E6' : '#E0E0E0',
                        stroke:   '#FFF',
                        strokeWidth: 0.5,
                        outline:  'none'
                      },
                      hover: {
                        fill: isActive ? '#40E0D0' : '#BDBDBD',
                        outline: 'none'
                      },
                      pressed: {
                        fill: isActive ? '#40E0D0' : '#9E9E9E',
                        outline: 'none'
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        <Tooltip
          id="tooltip"
          place="top"
          style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}
        />
      </div>
    </section>
  );
}
