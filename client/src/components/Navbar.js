import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";
import vector from "../images/logo.svg";
import text from "../images/logo_text.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="navbar section-gap">
        <Link to="/" onClick={closeMenu}>
          <div className="navbar-logo">
            <img className="logo-vector" src={vector} alt="Logo Vector" />
            <img className="logo-text" src={text} alt="Logo Text" />
          </div>
        </Link>
        
        <div className="navbar-links">
          <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
          <Link to="/projects" className={isActive("/projects") ? "active" : ""}>Projects</Link>
        </div>
        
        <div className={`navbar-hamburger ${menuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      
      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        {['Home', 'About', 'Projects'].map((text, index) => (
          <div
            key={index}
            className={`option option-${index + 1} ${isActive(text === 'Home' ? '/' : `/${text.toLowerCase()}`) ? "active" : ""}`}
          >
            <p>[{index + 1}]</p>
            <Link
              to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              onClick={closeMenu}
            >
              {text}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
