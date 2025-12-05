import { useEffect, useState } from "react";
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
