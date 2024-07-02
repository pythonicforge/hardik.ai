// components/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss'; // Create or import your NotFound component styling here

const NotFound = () => {
  return (
    <div className="not-found-container section-gap">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="not-found-link">Go back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
