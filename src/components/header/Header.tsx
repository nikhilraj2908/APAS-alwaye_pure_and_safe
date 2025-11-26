import React from "react";
import "./Header.css";
import logo from '../../assets/logo.png';
import { AppointmentModal } from "../AppointmentModal/AppointmentModal";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo}/>
        </div>

        {/* Nav links */}
        <nav className="nav">
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Customization</a>
          <a href="#">Private labels</a>
          <a href="#">Contact Us</a>
          <a href="#">Shop by Amazon</a>
        </nav>

        {/* CTA button */}
        <AppointmentModal/>
      </div>
    </header>
  );
};

export default Header;
