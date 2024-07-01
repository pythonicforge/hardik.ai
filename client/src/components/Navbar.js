import React, { useState } from "react";
import "../styles/Navbar.css";
import vector from "../images/logo.svg";
import text from "../images/logo_text.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar section-gap">
        <div className="navbar-logo">
          <img className="logo-vector" src={vector} alt="" />
          <img className="logo-text" src={text} alt="" />
        </div>
        <div className="navbar-links">
          <a href="/">About</a>
          <a href="/">Projects</a>
        </div>
        <div
          className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="option option-1">
          <p>[1]</p>
          <a href="/">Home</a>
        </div>
        <div className="option option-2">
          <p>[2]</p>
          <a href="/">About</a>
        </div>
        <div className="option option-3">
          <p>[3]</p>
          <a href="/">Projects</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
