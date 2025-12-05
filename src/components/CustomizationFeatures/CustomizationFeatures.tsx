// import React from "react";
import "./CustomizationFeatures.css";
import bottle from "../../assets/bottle1.1.png"; // floating bottle image
import leafIcon from "../../assets/leaf.gif";
import recycleIcon from "../../assets/recycle.gif";
import shieldIcon from "../../assets/security.gif";
import designIcon from "../../assets/customise-gif.gif";

export const CustomizationFeatures = () => {
  const features = [
    { icon: leafIcon, text: "No Added Preservatives" },
    { icon: recycleIcon, text: "100% Recyclable" },
    { icon: shieldIcon, text: "Best Quality Plastic Bottles" },
    { icon: designIcon, text: "Best Customised Design" },
  ];

  return (
    <section className="customization-features">
      <div className="features-container">
        {/* Left Text + Features */}
        <div className="features-left">
          <h2>Customize Your Way</h2>
          <p>
            We produce numerous bottles in various shapes and sizes to suit your needs. All bottles include custom
            labels applied, so when you receive your order, they are ready for distribution, sale, or consumption.
          </p>
          <div className="features-cards">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <img src={feature.icon} alt={feature.text} />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Bottle */}
        <div className="features-right">
          <img src={bottle} alt="Custom Bottle Example" className="bottle-img" />
        </div>
      </div>
    </section>
  );
};
