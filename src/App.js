import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
