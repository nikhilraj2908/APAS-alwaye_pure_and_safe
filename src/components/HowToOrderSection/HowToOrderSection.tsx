import React from "react";
import "./HowToOrderSection.css";

// Example images (replace with your actual images)
import step1 from "../../assets/banner1.png";
import step2 from "../../assets/banner2.png";
import step3 from "../../assets/banner3.png";

export function HowToOrderSection() {
  const steps = [
    {
      img: step1,
      number: "01",
      title: "Submit A Quote",
      description:
        "Tell us about your brand and specify your needs in our convenient inquiry form.",
    },
    {
      img: step2,
      number: "02",
      title: "Approve Designs",
      description:
        "Get the best design options for your brand and finalise pricing, label and packaging.",
    },
    {
      img: step3,
      number: "03",
      title: "Place Your Order",
      description:
        "Get your custom bottled water with APAS delivered directly to your doorstep.",
    },
  ];

  return (
    <section className="how-to-order-section">
      <h2 className="section-title text-center mb-5">How To Order</h2>
      <div className="steps-container d-flex justify-content-center flex-wrap">
        {steps.map((step, index) => (
          <div key={index} className="step-card text-center m-3">
            <div className="step-img-wrapper">
              <img src={step.img} alt={step.title} />
            </div>
            <div className="step-number">{step.number}</div>
            <h5 className="step-title">{step.title}</h5>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
