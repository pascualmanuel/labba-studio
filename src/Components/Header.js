import { ReactSVG } from "react-svg";
import LabbaISO from "../Assets/svg-iso-labba.svg";
import LabbaLogo from "../Assets/labba/labba-iso.svg";
import LabbaWhiteLogo from "../Assets/labba/labba-iso-white.svg";
import Burger from "../Assets/Burger.svg";
import BurgerClose from "../Assets/Burger-close.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../Assets/Back.svg";
import BackWhiteIcon from "../Assets/BackWhite.svg";
import { useState, useEffect } from "react";
import useBodyClass from "../Hooks/useBodyClass";
import { useLanguage } from "../Hooks/LanguageContext";

import MagneticButton from "./MagenticButton";

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY && lastScrollY < 90) setIsNavbarVisible(true);
      else if (y > lastScrollY) setIsNavbarVisible(false);
      else setIsNavbarVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const navigate = useNavigate();

  const isMobile = window.innerWidth <= 768; // Adjust the width as needed

  const handleNavigation = () => {
    navigate("/contact");
  };

  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { userLanguage, toggleLanguage } = useLanguage();
  const isEnSelected = userLanguage === "EN";
  const isEsSelected = userLanguage === "ES";

  const handleEsClick = () => {
    toggleLanguage(); // Cambiar a EN
  };

  const handleEnClick = () => {
    toggleLanguage(); // Cambiar a ES
  };

  const translateText = (enText, esText) => {
    return userLanguage === "EN" ? enText : esText;
  };

  const changeLanguage = () => {
    toggleLanguage("EN");
  };

  const toggleContact = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-conexion")) {
        setExpanded(false);
      }
    };

    const handleScroll = () => {
      setExpanded(false);
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let logoPosition = "fixed";
  if (isMobile) {
    logoPosition = "absolute";
  }

  const isWorkPage = location.pathname.includes("/works");

  // }
  // transition-transform duration-300 will-change-transform
  // ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);

  // Lock page scroll when mobile menu is open
  useBodyClass("menu-open", isMenuOpen);

  return (
    <>
      <div
        className={`fixed w-full center flex flex-row justify-between items-center z-[999] 
        h-[120px] md:h-[90px]  sm:h-32   transition-transform duration-300 will-change-transform
        ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}
         ${isWorkPage ? "bg-header" : "fixed"} `}
      >
        <div
          className="
     
    flex items-center justify-between mx-auto max-w-[1500px] w-full px-4 sm:px-16
          
          "
        >
          <Link to="/#home" onClick={closeMenu}>
            <div className=" pointer-events-auto">
              <ReactSVG
                src={isWorkPage ? LabbaWhiteLogo : LabbaWhiteLogo}
                className=" "
              />
            </div>
          </Link>

          <div className="flex flex-row gap-4 items-center">
            <Link className="hidden md:block" to="/services">
              Services
            </Link>
            <Link className="hidden md:block" to="/work">
              Work
            </Link>
            <Link className="hidden md:block" to="/about">
              About
            </Link>
            <Link className="hidden md:block mr-6" to="/blog">
              Blog
            </Link>

            <Link to="/contact" className="btn-contact">
              <span>Get in touch</span>
              <svg
                className="btn-border"
                viewBox="0 0 100 46"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="glass-shimmer"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="rgba(255,255,255,0)" />
                    <stop offset="50%" stop-color="rgba(255,255,255,1)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                <rect
                  x="1"
                  y="1"
                  width="98"
                  height="38"
                  rx="7"
                  ry="7"
                  pathLength="100"
                  fill="none"
                  stroke="url(#glass-shimmer)"
                  strokeWidth="2px"
                  strokeLinecap="round"
                  strokeDasharray="16 84"
                />
              </svg>
            </Link>
            <div className="md:hidden z-999">
              <button
                onClick={toggleMenu}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  height: 40,
                  width: 40,
                }}
                className="inline-flex items-center justify-center p-2 rounded-[999px] relative"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg
                  className="h-6 w-6 mt-[2px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={"#F2F2F2"}
                  aria-hidden="true"
                >
                  <path
                    className={`hamburger-line top ${
                      isMenuOpen ? "cross" : ""
                    }`}
                    strokeWidth="2"
                    d="M4 8h16"
                  />
                  <path
                    className={`hamburger-line bottom ${
                      isMenuOpen ? "cross" : ""
                    }`}
                    strokeWidth="2"
                    d="M4 14h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div
          className={`${
            isMenuOpen
              ? "bg-mobile-menu"
              : "transition-opacity duration-600 opacity-0"
          } fixed top-0 left-0 w-full h-full`}
          style={{ position: "fixed", zIndex: 900 }}
        >
          <div className="w-full h-full flex flex-col px-4 pb-8">
            <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center justify-end pb-10 ">
              <div
                className={`  md:flex-row ${
                  isMenuOpen ? "block md:flex z-[10000]" : "hidden"
                }`}
              >
                <Link
                  to="/services"
                  className="flex items-center vigo leading-[103%] text-[50px] font-bold text-white tracking-[-2%] hover:text-[#c7c7c7] transition-colors duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  to="/work"
                  className="flex items-center vigo leading-[103%] text-[50px] font-bold text-white tracking-[-2%] hover:text-[#c7c7c7] transition-colors duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Work
                </Link>
                <Link
                  to="/about"
                  className="flex items-center vigo leading-[103%] text-[50px] font-bold text-white tracking-[-2%] hover:text-[#c7c7c7] transition-colors duration-200 mb-2"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center vigo leading-[103%] text-[50px] font-bold text-white tracking-[-2%] hover:text-[#c7c7c7] transition-colors duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </div>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="btn-contact mt-12 z-[999]"
                style={{ width: "100%" }}
              >
                <span>Get in touch</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Header;
