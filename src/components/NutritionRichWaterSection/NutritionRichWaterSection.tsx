import React from "react";
import "./NutritionRichWaterSection.css";

// Center bottle
import productBottle from "../../assets/NutritionRichWate.png";

// Feature icons
import deliveryIcon from "../../assets/express-delivery.png";
import ecoIcon from "../../assets/nature-product.png";
import bulkIcon from "../../assets/manifest.png";
import tdhIcon from "../../assets/laboratory.png";
import labelsIcon from "../../assets/label.png";
import hygienicIcon from "../../assets/sanitary.png";
import nutritionIcon from "../../assets/water.png";
import bottlesIcon from "../../assets/water-bottle.png";

export function NutritionRichWaterSection() {
  const features = [
    { icon: nutritionIcon, title: "Nutrition Rich Water" },
    { icon: deliveryIcon, title: "Fast Delivery" },
    { icon: ecoIcon, title: "Eco-Friendly Packaging" },
    { icon: bulkIcon, title: "Bulk & Small Orders" },
    { icon: tdhIcon, title: "Measured TDH Quality" },
    { icon: labelsIcon, title: "Custom Labels" },
    { icon: bottlesIcon, title: "Variety of Bottles" },
    { icon: hygienicIcon, title: "Hygienic Process" },
  ];

  return (
    <section className="nutrition-section">
      {/* Floating squares background */}
      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="nutrition-content">
        <h2 className="section-title text-center mb-5">Nutrition Rich Water</h2>

        <div className="nutrition-circle-container">
          <img src={productBottle} alt="APAS Bottle" className="product-bottle" />

          {features.map((feature, idx) => (
            <div key={idx} className={`feature-circle feature-circle-${idx + 1}`}>
              <img src={feature.icon} alt={feature.title} />
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
