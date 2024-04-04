import React from "react";

const Landing = () => {
  return (
    <div style={{
      backgroundImage: `url('https://wallpapercrafter.com/sizes/2048x1152/16620-flowers-leaves-plant-dark-green-4k.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      animation: "dropdown 20s infinite alternate"
    }}>
      <div style={{
        maxWidth: "1200px",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "10px"
      }}>
        <h1 style={{ color: "#f3f3f3", fontSize: "2rem", fontWeight: "bold" }}>
          Diagnose Plant Diseases with Ease
        </h1>
        <p style={{ color: "#f3f3f3", fontSize: "1.2rem", marginBottom: "2rem" }}>
          Upload a photo of your plant to identify diseases and get expert-backed remedies.
        </p>
        <a href="/login" style={{ textDecoration: "none" }}>
          <button style={{
            backgroundColor: "#008000",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
          }}>
            Get Started Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Landing;