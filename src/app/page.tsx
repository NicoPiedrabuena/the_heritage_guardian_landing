import Loader from "./components/Loader";

export default function Home() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundImage: "url('/logo/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex", // importante: flex para dividir en dos columnas
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        color: "white",
      }}
    >
      {/* Columna izquierda: loader */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>

      {/* Columna derecha: párrafo con efecto */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "2px",
          textTransform: "uppercase",
          textShadow: "0 2px 6px rgba(0,0,0,0.6)",
          animation: "blink 1.5s infinite", // efecto parpadeo
        }}
      >
        Under Construction
      </div>

      {/* Animación */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
