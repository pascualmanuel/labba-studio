import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const ScrollToTop = () => {
  const location = useLocation();
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis once when the component mounts
    if (!lenis.current) {
      lenis.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });
    }

    // Force scroll to top when route changes
    lenis.current.scrollTo(0, { immediate: true });

    // As a fallback, use window scrollTo for extra certainty
    window.scrollTo(0, 0);

    // Clean up Lenis instance if needed
    return () => {
      lenis.current.destroy();
    };
  }, [location.pathname]); // Trigger this effect on route changes

  return null;
};

export default ScrollToTop;
