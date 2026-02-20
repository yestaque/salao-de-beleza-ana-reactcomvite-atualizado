// src/components/Header.jsx
import { useState, useEffect } from "react";

export default function Header() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 8000); // troca de vídeo a cada 8 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
      <video
        key={current}
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={videos[current]}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
          Transforme seu visual hoje
        </h1>
        <a
          href="https://wa.me/5584992160269"
          style={{
            padding: "12px 25px",
            background: "#ff4d5a",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Agende pelo WhatsApp
        </a>
      </div>
    </header>
  );
}