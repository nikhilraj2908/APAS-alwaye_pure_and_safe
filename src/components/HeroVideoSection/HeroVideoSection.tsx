// import React from "react";
import "./HeroVideoSection.css";

export function HeroVideoSection() {
  return (
    <section className="hero-video-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        // poster="/images/video-poster.jpg"
      >
    <source src="/src/assets/APAS_Water_Bottle_video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Gradient Overlay */}
      <div className="video-gradient-overlay"></div>

      <div className="hero-video-overlay">
        <h1 className="hero-title">Premium APAS Bottled Water</h1>
        <p className="hero-subtitle">
          Nutrition-rich and high-quality water for your brand
        </p>
        <button className="hero-btn hero-btn-dark">Get a Quote</button>
      </div>
    </section>
  );
}
