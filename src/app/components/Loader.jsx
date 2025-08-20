"use client";
import { useEffect, useState } from "react";



export default function Loader() {
  return (
    <div 
    >
      <img
        src="/logo/logo_white.png"   // asegurate que esté en /public/logo/logo.png
        alt="Logo"
        style={{
          width: "400px",
          height: "auto",
          animation: "pulse 3s infinite", // animación leve para que no quede tan plano
        }}
      />
    

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}