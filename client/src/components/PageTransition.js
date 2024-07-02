import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handlePageTransition = () => {
      gsap.set('.main-content', { scale: 0.8, opacity: 0 });

      gsap.to('.main-content', {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    };
    handlePageTransition();
  }, [location.pathname]);

  return <>{children}</>;
};

export default PageTransition;
