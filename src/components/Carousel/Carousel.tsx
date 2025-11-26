import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

// 👉 IMPORT IMAGES FROM src/assets
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

interface SlideData {
  title: string;
  subtitle: string;
  image: string;
}

const slides: SlideData[] = [
  {
    title: "Customised Water Bottle, For Your Brand",
    subtitle:
      "Get the best custom-designed, high-quality water bottles with a wide variety of shapes and sizes.",
    image: banner1,
  },
  {
    title: "Premium Packaging For Hotels & Events",
    subtitle:
      "Elegant bottles tailored for hotels, restaurants and large events.",
    image: banner2,
  },
  {
    title: "Hydration Solutions For Every Occasion",
    subtitle:
      "From corporate events to private labels, we create bottles that match your brand.",
    image: banner3,
  },
];

const Carousel: React.FC = () => {
  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3500 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-content">
                <p className="hero-tagline">BEST CUSTOM LABEL WATER BRAND</p>
                <h1>{slide.title}</h1>
                <p className="hero-subtitle-carousel">{slide.subtitle}</p>
                <div className="hero-buttons">
                  <button className="hero-btn hero-btn-primary">
                    READ MORE
                  </button>
                  <button className="hero-btn hero-btn-dark">
                    GET A QUOTE
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
