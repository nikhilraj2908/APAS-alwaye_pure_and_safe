// import React from "react";
import "./Footer.css";
// import { FaFacebookF, FaInstagram } from "react-icons/fa"; // React Icons

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left: Logo & Short Description */}
        <div className="footer-left">
          <img
            src="/src/assets/logo.png"
            alt="APAS Logo"
            className="footer-logo"
          />
          <p>APAS - Always Pure & Safe</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <span className="bi bi-instagram"></span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <span className="bi bi-facebook"></span>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <span className="bi bi-whatsapp"></span>
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Customization</li>
            <li>Private Labels</li>
            <li>Contact Us</li>
            <li>Shop By Amazon</li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>
            Near Railway Crossing, Khariphatak, Vidisha, <br />
            Madhya Pradesh 453331
          </p>
          <p>📞 7693074458, 8823827525</p>
          <p>✉ info@apas.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 APAS. All Rights Reserved.
      </div>
    </footer>
  );
}
