import { useState } from "react"
import './carousel-box.css'

// Import your images
import waterIcon from "../../assets/water.png"; // or adjust path based on actual location
import pencilIcon from "../../assets/water.png";
import bottleIcon from "../../assets/water.png";

export function CarouselBox(){
  const [cardItems] = useState([
    {
      icon: waterIcon, // Use imported image
      title: "Best Quality Water",
      description: "Providing water infused with essential minerals and high purity standards.",
    },
    {
      icon: pencilIcon, // Use imported image
      title: "Custom Designs",
      description: "Get fully customized bottle and label designs tailored to your brand.",
    },
    {
      icon: bottleIcon, // Use imported image
      title: "Premium Bottles",
      description: "Durable, safe and stylish bottles made with high-quality materials.",
    },
  ]);

  return(
    <div className="carousel-box d-flex justify-content-center">
      {cardItems.map((item, index) => (
        <div key={index} className="card m-4">
          <div className="card-body">
            {/* Icon wrapper for water theme */}
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.title} />
            </div>
            <h5 className="card-title">{item.title}</h5>  
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}