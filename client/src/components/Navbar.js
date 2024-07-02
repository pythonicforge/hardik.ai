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

  return (
    <>
      <div className="navbar section-gap">
        <Link to="/">
        <div className="navbar-logo">
          <img className="logo-vector" src={vector} alt="" />
          <img className="logo-text" src={text} alt="" />
        </div>
        </Link>
        
        <div className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
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
          <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
        </div>
        <div className="option option-2">
          <p>[2]</p>
          <Link to="/about" onClick={() => setMenuOpen(!menuOpen)}>About</Link>
        </div>
        <div className="option option-3">
          <p>[3]</p>
          <Link to="/projects" onClick={() => setMenuOpen(!menuOpen)}>Projects</Link>
        </div>
      </div>

    </>
  );
}

export default Navbar;
