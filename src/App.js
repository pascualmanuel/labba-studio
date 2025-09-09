import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Hooks/ScrollToTop";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Loader from "./Components/Loader";
import { LanguageProvider } from "./Hooks/LanguageContext";
import useCursorEffect from "./Hooks/useCursorEffect";
import "./Styles/App.css";

import Morgenstern from "./Pages/Works/Morgenstern";
import Inmobiliare from "./Pages/Works/Inmobiliare";
import Ephimero from "./Pages/Works/Ephimero";
import Daewoo from "./Pages/Works/Daewoo";
import Manno from "./Pages/Works/Manno";
import Trebol from "./Pages/Works/Trebol";
import Work from "./Pages/Work";
import BlogPage from "./Pages/BlogPage.js";
import BlogArticle from "./Pages/BlogArticle.js";
import BlogEditor from "./Components/BlogEditor.jsx";
import BlogEdit from "./Pages/BlogEdit.jsx";
import About from "./Pages/About.js";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Galangal from "./Pages/Works/Galangal";
import FloraPlus from "./Pages/Works/FloraPlus";
import ScoutingLabs from "./Pages/Works/ScoutingLabs";
import Dbs from "./Pages/Works/Dbs";
import Hyundai from "./Pages/Works/Hyundai";
import BlogTagPage from "./Pages/BlogTagPage";

function App() {
  useCursorEffect();

  // 👇 Calculamos si debe mostrarse el loader ANTES del primer render
  const computeInitialShowLoader = () => {
    if (typeof window === "undefined") return false;
    try {
      const isHome = window.location.pathname === "/";
      const already = sessionStorage.getItem("homeLoaderShown") === "true";
      return isHome && !already;
    } catch {
      return window.location?.pathname === "/";
    }
  };

  const [showLoader, setShowLoader] = useState(computeInitialShowLoader);
  const [lenis, setLenis] = useState(null);

  // Cuando el loader termina su fade (evento del Loader), lo apagamos en estado
  useEffect(() => {
    const off = () => setShowLoader(false);
    window.addEventListener("home-loader-done", off, { once: true });
    return () => window.removeEventListener("home-loader-done", off);
  }, []);

  // Inicializar Lenis SOLO cuando el loader no está visible
  useEffect(() => {
    if (showLoader) return; // no iniciar mientras el loader esté activo
    if (lenis) return;

    const lenisInstance = new Lenis();

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    // Si tu versión de Lenis soporta destroy:
    // return () => lenisInstance.destroy?.();
  }, [showLoader, lenis]);

  return (
    <>
      <GoogleAnalytics />
      {showLoader && <Loader />}

      <BrowserRouter>
        <div className="grain"></div>

        <ScrollToTop lenis={lenis} />
        <LanguageProvider>
          <div id="circleCursor" className="hidden sm:block"></div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/pruebas" element={<PruebaPage />} /> */}
            <Route path="/works/morgenstern" element={<Morgenstern />} />
            <Route path="/works/inmobiliare" element={<Inmobiliare />} />
            <Route path="/works/ephimero" element={<Ephimero />} />
            <Route path="/works/daewoo" element={<Daewoo />} />
            <Route path="/works/manno" element={<Manno />} />
            <Route path="/works/trebol" element={<Trebol />} />
            <Route path="/works/galangal" element={<Galangal />} />
            <Route path="/works/flora-plus" element={<FloraPlus />} />
            <Route path="/works/scouting-labs" element={<ScoutingLabs />} />
            <Route path="/works/dbs" element={<Dbs />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/tag/:tag" element={<BlogTagPage />} />
            <Route path="/blog/create" element={<BlogEditor />} />
            <Route path="/blog/edit/:id" element={<BlogEdit />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/works/hyundai" element={<Hyundai />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
