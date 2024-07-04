import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handlePageTransition = () => {
      const mainContent = ".main-content"; // Replace with your target selector
      gsap.set(mainContent, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
      tl.to(mainContent, { opacity: 1 });

      return tl; // Return timeline to allow cleanup
    };

    const animation = handlePageTransition();

    return () => {
      animation.kill(); // Clean up animation on unmount or route change
    };
  }, [location.pathname]);

  return <>{children}</>;
};

export default PageTransition;
