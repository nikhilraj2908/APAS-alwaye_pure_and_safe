import React from "react";
import "./Header.css";
import logo from '../../assets/logo.png';
import { AppointmentModal } from "../AppointmentModal/AppointmentModal";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to='/'>
          <img src={logo}/>
          </Link>
          
        </div>

        {/* Nav links */}
        <nav className="nav">
  <Link to="/about">About Us</Link>
  <Link to="/products">Products</Link>
  <Link to="/customization">Customization</Link>
  <Link to="/private-labels">Private Labels</Link>
  <Link to="/contact">Contact Us</Link>
  <a href="https://www.amazon.com/s?k=apas+water" target="_blank" rel="noopener noreferrer">
    Shop by Amazon
  </a>
</nav>

        {/* CTA button */}
        <AppointmentModal/>
      </div>
    </header>
  );
};

export default Header;
