import logo from "./logo.svg";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./Hooks/CustomCursor";
import { useEffect } from "react";
import Contact from "./Pages/Contact";
import { LanguageProvider } from "./Hooks/LanguageContext";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <CustomCursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
