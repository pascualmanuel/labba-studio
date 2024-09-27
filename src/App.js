import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import GoToTop from "./Hooks/ScrollToTop";
import PruebaPage from "./Pages/PruebaPage";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Loader from "./Components/Loader";
import { LanguageProvider } from "./Hooks/LanguageContext";
import useCursorEffect from "./Hooks/useCursorEffect";
import "./Styles/App.css";
import AnimatedWords from "./Hooks/AnimatedWord";
import Morgenstern from "./Pages/Works/Morgenstern";
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  // const [scrollXEnabled, setScrollXEnabled] = useState(true);
  useCursorEffect();

  const [loading, setLoading] = useState(true);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Simulate loader duration for testing
    setTimeout(() => setLoading(false), 3800); // Simulated 3 second loading time
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize Lenis only after the loading is done
      const lenisInstance = new Lenis();

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      setLenis(lenisInstance);
    }
  }, [loading]);
  // const cursorRef = useRef(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 1 && window.innerHeight < 10000) {
  //       setScrollXEnabled(false);
  //     } else {
  //       setScrollXEnabled(true);
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <GoogleAnalytics />
      {/* <Loader /> */}
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          {/* <div id="circleCursor" className="hidden sm:block"></div> */}
          <div id="circleCursor" className="hidden sm:block"></div>

          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ScrollToTop />
                  <Home />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pruebas" element={<PruebaPage />} />
            <Route path="/morgenstern" element={<Morgenstern />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
