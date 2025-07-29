"use client";
import { useEffect, useState } from "react";



export default function Loader() {
  return (
    <div
     style={{
  position: "fixed",
  left: 200,
  top: 250,
  inset: 0,
}}
    >
      <img
        src="/logo/logo.png"   // asegurate que esté en /public/logo/logo.png
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
          50% { transform: scale(1.35); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}