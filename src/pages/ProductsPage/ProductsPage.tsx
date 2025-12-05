// import React from "react";
import "./ProductsPage.css";

// Import product images
import customBottle from "../../assets/product1.png";
import normalBottle from "../../assets/product2.png";
import camper from "../../assets/campers-gemini2.png";
import wedding from "../../assets/product3.png";
import bulk from "../../assets/product4.png";

interface Product {
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Custom Water Bottles",
    description: "Create your own branded water bottles with unique labels and designs.",
    image: customBottle,
  },
  {
    name: "Normal Water Bottles",
    description: "High-quality standard water bottles for everyday use.",
    image: normalBottle,
  },
  {
    name: "Camper Services",
    description: "Water supply solutions for campers and outdoor activities.",
    image: camper,
  },
  {
    name: "Wedding Orders",
    description: "Customised bottles for weddings and special events.",
    image: wedding,
  },
  {
    name: "Bulk Orders",
    description: "Large quantity orders with cost-effective pricing and customised labels.",
    image: bulk,
  },
];

export function ProductsPage() {
  return (
    <section className="products-section">
      <h2 className="section-title text-center mb-5">Our Products</h2>
      
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
