import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Hooks/ScrollToTop";
import PruebaPage from "./Pages/PruebaPage";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Loader from "./Components/Loader";
import { LanguageProvider } from "./Hooks/LanguageContext";
import useCursorEffect from "./Hooks/useCursorEffect";
import "./Styles/App.css";
import AnimatedWords from "./Hooks/AnimatedWord";
import Morgenstern from "./Pages/Works/Morgenstern";
import Inmobiliare from "./Pages/Works/Inmobiliare";
import Ephimero from "./Pages/Works/Ephimero";
import Daewoo from "./Pages/Works/Daewoo";
import Manno from "./Pages/Works/Manno";
import Trebol from "./Pages/Works/Trebol";

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

  return (
    <>
      <GoogleAnalytics />
      <Loader />
      <BrowserRouter>
        <div className="grain"></div>

        <ScrollToTop lenis={lenis} />
        <LanguageProvider>
          <div id="circleCursor" className="hidden sm:block"></div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pruebas" element={<PruebaPage />} />
            <Route path="/works/morgenstern" element={<Morgenstern />} />
            <Route path="/works/inmobiliare" element={<Inmobiliare />} />
            <Route path="/works/ephimero" element={<Ephimero />} />
            <Route path="/works/daewoo" element={<Daewoo />} />
            <Route path="/works/manno" element={<Manno />} />
            <Route path="/works/trebol" element={<Trebol />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
