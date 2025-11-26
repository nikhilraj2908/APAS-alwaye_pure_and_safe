import React, { useEffect } from "react";
import "./WaterBottleCollection.css";

// Sample bottle images
import bottle1 from "../../assets/bottle1.png";
import bottle2 from "../../assets/bottle2.png";
import bottle3 from "../../assets/bottle3.png";

export function WaterBottleCollection() {
  const bottles = [
    { img: bottle1, alt: "Bottle 1" },
    { img: bottle2, alt: "Bottle 2" },
    { img: bottle3, alt: "Bottle 3" },
  ];

  // Generate random CSS variables for bubbles
 useEffect(() => {
  const bubbles = document.querySelectorAll('.bubble');

  bubbles.forEach((bubble) => {
    const el = bubble as HTMLElement; // Cast to HTMLElement
    el.style.setProperty('--bubble-left-offset', `${Math.random() * 100}vw`);
    el.style.setProperty('--bubble-radius', `${Math.random() * 10 + 2}vw`);
    el.style.setProperty('--bubble-float-duration', `${Math.random() * 6 + 6}s`);
    el.style.setProperty('--bubble-sway-duration', `${Math.random() * 2 + 4}s`);
    el.style.setProperty('--bubble-float-delay', `${Math.random() * 4}s`);
    el.style.setProperty('--bubble-sway-delay', `${Math.random() * 4}s`);
    el.style.setProperty('--bubble-sway-type', Math.random() > 0.5 ? 'sway-left-to-right' : 'sway-right-to-left');
  });
}, []);


  return (
    <section className="bottle-collection-section">
      {/* Bubble Background */}
      <div className="bubbles">
        {Array.from({ length: 20 }).map((_, idx) => (
          <div key={idx} className="bubble"></div>
        ))}
      </div>

      {/* Bottle content */}
      <div className="bubble-content">
        <h2 className="section-title text-center mb-5">
          Our Collection Of Water Bottles
        </h2>

        <div className="bottle-collection">
          {bottles.map((bottle, idx) => (
            <div key={idx} className="bottle-card">
              <img src={bottle.img} alt={bottle.alt} className="bottle-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
