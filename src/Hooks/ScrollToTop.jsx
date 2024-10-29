import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ lenis }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default ScrollToTop;
