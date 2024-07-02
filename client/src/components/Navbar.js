import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import vector from "../images/logo.svg";
import text from "../images/logo_text.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        
        <div className={`navbar-hamburger ${menuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      
      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        {['Home', 'About', 'Projects'].map((text, index) => (
          <div key={index} className={`option option-${index + 1}`}>
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
