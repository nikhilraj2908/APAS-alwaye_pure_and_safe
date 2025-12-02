import React from "react";
import "./CustomizationPage.css";
import bannerImage from "../../assets/customization.png"; // your top banner
import bottle1 from "../../assets/bottle1.png";
import bottle2 from "../../assets/bottle2.png";
import bottle3 from "../../assets/bottle1.1.png";
import bottle4 from "../../assets/bottle1.1.png";
import bottle5 from "../../assets/bottle1.1.png";
import label1 from "../../assets/customize-process-1.png"
import label2 from "../../assets/customize-process-2.png"
import label3 from "../../assets/customise-process-3.png"
import label4 from "../../assets/customize-process-4.png"
import label5 from "../../assets/shipment-tracking.png"
import { CustomizationFeatures } from "../../components/CustomizationFeatures/CustomizationFeatures";
export const CustomizationPage = () => {
  const bottleList = [bottle1, bottle2, bottle3, bottle4, bottle5];

  return (
    <section className="customization-page">
      {/* Top Banner */}
      <div className="customization-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-overlay">
          <h1>Customize Your Bottle</h1>
          <p>Make your brand shine with our fully customizable water bottles.</p>
        </div>
      </div>

      {/* Step by Step Process */}
      <div className="customization-process">
        <h2 className="fw-bold">Walking Billboard For Your Brand</h2>
        <p>
          Are you looking for a unique and stylish way to represent your brand? With our bottles, you can add elegance
          and sophistication to your marketing strategy. Showcase your logo and message effectively.
        </p>
        <div className="process-icons">
          <div className="process-step">
            <img src={label1} alt="Pick Design" />
            <p>Pick the design</p>
          </div>
          <div className="process-step">
            <img src={label2} alt="Design Label" />
            <p>Design your label</p>
          </div>
          <div className="process-step">
            <img src={label3} alt="Label Printing" />
            <p>Label printing</p>
          </div>
          <div className="process-step">
            <img src={label4} alt="Packaging" />
            <p>Packaging</p>
          </div>
          <div className="process-step">
            <img src={label5} alt="Shipping" />
            <p>Shipping</p>
          </div>
        </div>
      </div>

      {/* Features / Customizable info */}
      {/* <div className="customization-features">
        <h2>Customize Your Way</h2>
        <div className="features-content">
          <p>
            We produce numerous bottles in various shapes and sizes to suit your needs. All bottles include custom
            labels applied, so when you receive your order, they are ready for distribution, sale, or consumption.
          </p>
          <div className="features-icons">
            <div>No Added Preservatives</div>
            <div>100% Recyclable</div>
            <div>Best Quality Plastic Bottles</div>
            <div>Best Customised Design</div>
          </div>
          <img src={bottle1} alt="Custom Bottle Example" />
        </div>
      </div> */}
      
<CustomizationFeatures/>
      {/* Bottle Types Carousel */}
      <div className="bottle-types">
        <h2 className="fw-bold ">Our Customised Bottle Types</h2>
        <div className="bottle-carousel">
          {bottleList.map((bottle, idx) => (
            <div key={idx} className="bottle-item">
              <img src={bottle} alt={`Bottle ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
