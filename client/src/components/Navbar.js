import React, { useState } from "react";
import "../style/Navbar.css";
import vector from "../images/logo.svg";
import text from "../images/logo_text.svg";
import hamburger from "../images/hamburger.svg";

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
        <img
          className="navbar-hamburger"
          onClick={handleMenuToggle}
          src={hamburger}
          alt=""
        />
      </div>
      <div className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="option">
          <p>[1]</p>
          <a href="/">Home</a>
        </div>
        <div className="option">
          <p>[2]</p>
          <a href="/">About</a>
        </div>
        <div className="option">
          <p>[3]</p>
          <a href="/">Projects</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
