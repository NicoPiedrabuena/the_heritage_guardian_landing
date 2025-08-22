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
          
        }}
      />
    
 
    </div>
  );
}