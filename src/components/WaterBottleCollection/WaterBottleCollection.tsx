import React, { useEffect, useState } from "react";
import "./WaterBottleCollection.css";

// Sample bottle images
import bottle1 from "../../assets/bottle1.png";
import bottle2 from "../../assets/bottle2.png";
import bottle3 from "../../assets/IMG-20251201-WA0009.png";

export function WaterBottleCollection() {
  const bottles = [
    { img: bottle1, alt: "Bottle 1" },
    { img: bottle2, alt: "Bottle 2" },
    { img: bottle3, alt: "Bottle 3" },
  ];

  const [bubbleList, setBubbleList] = useState<number[]>([]);

  useEffect(() => {
    // Add a new bubble every 500ms
    const interval = setInterval(() => {
      setBubbleList((prev) => [...prev, Math.random()]);
    }, 500);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bottle-collection-section">
      {/* Bubble Background */}
      <div className="bubbles">
        {bubbleList.map((b, idx) => (
          <div
            key={idx}
            className="bubble"
            style={{
              "--bubble-left-offset": `${Math.random() * 100}vw`,
              "--bubble-radius": `${Math.random() * 10 + 2}vw`,
              "--bubble-float-duration": `${Math.random() * 6 + 6}s`,
              "--bubble-sway-duration": `${Math.random() * 2 + 4}s`,
              "--bubble-float-delay": `0s`,
              "--bubble-sway-delay": `0s`,
              "--bubble-sway-type": Math.random() > 0.5 ? 'sway-left-to-right' : 'sway-right-to-left',
              animationIterationCount: 1 // play once and disappear
            }}
            onAnimationEnd={() => {
              // Remove bubble after animation
              setBubbleList((prev) => prev.filter((_, i) => i !== idx));
            }}
          ></div>
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
