import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { AppointmentModal } from "../AppointmentModal/AppointmentModal";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);

    // lock body scroll when menu is open
    if (next) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("nav-open");
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="APAS Water Logo" />
          </Link>
        </div>

        {/* Hamburger - visible on mobile only */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
  <button className="close-btn" onClick={closeMenu}>✕</button>

          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/products" onClick={closeMenu}>Products</Link>
          <Link to="/customization" onClick={closeMenu}>Customization</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          <a
            href="https://www.amazon.com/s?k=apas+water"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Shop by Amazon
          </a>

          {/* Mobile-only Appointment button */}
          <div className="mobile-appointment">
            <AppointmentModal />
          </div>
        </nav>

        {/* Desktop Appointment button */}
        <div className="desktop-appointment">
          <AppointmentModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
