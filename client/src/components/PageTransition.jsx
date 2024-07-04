import { gsap } from "gsap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handlePageTransition = () => {
      const mainContent = ".main-content";
      gsap.set(mainContent, { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });
      tl.to(mainContent, { opacity: 1 });

      return tl;
    };

    const animation = handlePageTransition();

    return () => {
      animation.kill();
    };
  }, [location.pathname]);

  return <>{children}</>;
};

export default PageTransition;