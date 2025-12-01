import React from "react";
import "./ContactUs.css";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";
import contactus from '../../assets/contact-us.jpg';

export function ContactUs() {
  return (
    <section className="contact-section">
      {/* Banner with overlay */}
      <div className="contact-banner" style={{ backgroundImage: `url(${contactus})` }}>
        <div className="contact-banner-overlay">
          <h2>Get in Touch</h2>
          <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
        </div>
      </div>

      {/* Contact cards overlapping banner */}
      <div className="contact-cards-overlap">
        <div className="contact-card">
          <h3>Talk to Sales</h3>
          <p>Pick up the phone and chat with one of our sales team members.</p>
          <p className="highlight">+91 8823827525</p>
          <p className="highlight">+91 7693074458</p>
        </div>

        <div className="contact-card">
          <h3>Contact Customer Support</h3>
          <p>Need assistance? Our support team is here to help you.</p>
          <button className="contact-support-btn w-100">Contact Support</button>
        </div>

        <div className="contact-card">
          <h3>Mail Support</h3>
          <p>Mail us on our official email</p>
          <a href="mailto:nikhilraj2908@gmail.com" className="highlight">nikhilraj2908@gmail.com</a>
        </div>
      </div>

      {/* Google Map */}
      <div className="contact-map ps-5 pe-5 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6620.937269105863!2d77.81214281916617!3d23.52577846186255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c050004636609%3A0x2b295a713f52639a!2sApas-%20Always%20Pure%20And%20Safe!5e1!3m2!1sen!2sin!4v1764252921098!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="APAS Location"
        ></iframe>
      </div>
    </section>
  );
}
