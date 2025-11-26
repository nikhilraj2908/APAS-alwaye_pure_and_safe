import React from "react";
import "./AboutApasSection.css";

// Example images
import mainBottle from "../../assets/banner1.png";
import sideBottle from "../../assets/banner2.png";

export function AboutApasSection() {
  return (
    <section className="about-apas-section " style={{marginTop:'10vh'}}>
      <div className="about-apas-container">
        {/* Left image */}
        <div className="about-apas-image">
          <img src={mainBottle} alt="APAS Bottle" />
          <div className="badge">
            <p>APAS-'Always Pure And Safe'</p>
          </div>
        </div>

        {/* Right text content */}
        <div className="about-apas-content">
          <p className="tagline">ABOUT APAS</p>
          <h2>The Best Custom Label Bottled Water</h2>
          <p className="description">
            Get custom bottled water that's just right for you with APAS – Always Pure and Safe! 
            We provide our customers with high-quality plastic and glass bottles that are sustainable, 
            safe, and reliable. Trust us to deliver the best product for your needs.
          </p>

          <div className="highlight">
            <i className="bi bi-award-fill"></i>
            <span>Best Customised Water Bottle Brand In Central India</span>
          </div>

          <button className="btn btn-apas">
            More About APAS
          </button>
        </div>
      </div>
    </section>
  );
}
