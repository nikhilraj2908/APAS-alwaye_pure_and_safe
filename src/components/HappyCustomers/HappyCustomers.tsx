import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HappyCustomers.css";


// 👉 PARTNERSHIP IMAGES
import partner1 from "../../assets/happy-customer.jpeg";
import partner2 from "../../assets/radhakirasoi.jpeg";
import partner3 from "../../assets/annapurna-caters.jpeg";
import partner4 from "../../assets/landmark.jpeg";

// 👉 EVENTS IMAGES
import event1 from "../../assets/hotelsambodhi.png";
import event2 from "../../assets/campers.jpeg";
import event3 from "../../assets/campers-gemini.png";
// import event4 from "../../assets/events/apas_event4.png";


const partnerships = [
  {
    image: partner1,
    title: "Custom Branding for Radha Ki Rasoi",
    description:
      "Premium, custom-labeled water bottles designed exclusively for Radha Ki Rasoi.",
  },
  {
    image: partner2,
    title: "Hotel Branding",
    description:
      "Elegant designer bottles crafted for hotel and restaurant dining experiences.",
  },
  {
    image: partner3,
    title: "Event Special Editions",
    description:
      "Tailored bottle designs for festivals, exhibitions and VIP gatherings.",
  },
  {
    image: partner4,
    title: "Corporate Collaborations",
    description:
      "Branded hydration solutions for corporate events and business conferences.",
  },
];

const events = [
  {
    image: event1,
    title: "Official Hydration Partner",
    description:
      "Mahabodhi Festival, Sanchi (Buddhist Society of India)",
  },
  {
    image: event2,
    title: "Large Religious Gatherings",
    description: "High-volume pure water supply for premium events.",
  },
  {
    image: event3,
    title: "Corporate Exhibitions",
    description: "Reliable on-demand hydration service at scale.",
  },
  
];


const HappyCustomers: React.FC = () => {
  return (
    <section className="happy-customers">
      {/* ---------------- Exclusive Partnerships ---------------- */}
      <h2 className="section-heading">Exclusive Partnerships</h2>

      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  slidesPerView={3}
  spaceBetween={20}
  slidesPerGroup={1}
  speed={700}
  className="partner-swiper"
  breakpoints={{
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {partnerships.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="partner-card">
        <img src={item.image} className="partner-img" />
        <h3 className="partner-title">{item.title}</h3>
        <p className="partner-desc">{item.description}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>



      {/* ---------------- Trusted for Premier Events ---------------- */}
      <h2 className="section-heading events-heading">Trusted for Premier Events</h2>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 3500 }}
        loop
        pagination={{ clickable: true }}
        className="events-swiper"
      >
        {events.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="events-slide">
              <img src={item.image} className="events-bg" />

              <div className="events-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default HappyCustomers;
