// import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/aboutus.png"; // Replace with your About Us image
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";

export function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About APAS" />
        </div>
        <div className="about-content">
          <p className="about-tagline">ABOUT APAS</p>
          <h2 className="about-title">The Best Custom Label Bottled Water</h2>
          <p className="about-text">
            APAS – Always Pure And Safe provides high-quality, fully customizable bottled water solutions for hotels, events, corporates, and private labels. 
            Our bottles are crafted using premium materials, ensuring safety, hygiene, and sustainability.
            Trust APAS to deliver the perfect combination of quality, design, and reliability for your brand.
          </p>

          <ul className="about-highlights">
            <li>💧 Best Customised Water Bottle Brand in Central India</li>
            <li>🏅 Premium Quality Plastic & Glass Bottles</li>
            <li>🌿 Sustainable, Safe, and Eco-Friendly Packaging</li>
            <li>🎨 Fully Customizable Labels and Designs</li>
          </ul>

          <a href="/contact" className="about-cta-btn">
            Get in Touch
          </a>
        </div>
      </div>
            <HappyCustomers/>

    </section>

  );
}
