import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handlePageTransition = () => {
      gsap.set(".main-content", { opacity: 0 });

      gsap.to(".main-content", {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    };

    handlePageTransition();
  }, [location.pathname]);

  return <>{children}</>;
};

export default PageTransition;
