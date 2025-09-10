import { ReactSVG } from "react-svg";
import LabbaISO from "../Assets/svg-iso-labba.svg";
import LabbaLogo from "../Assets/labba/labba-iso.svg";
import LabbaWhiteLogo from "../Assets/labba/labba-iso-white.svg";
import Burger from "../Assets/Burger.svg";
import BurgerClose from "../Assets/Burger-close.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../Assets/Back.svg";
import BackWhiteIcon from "../Assets/BackWhite.svg";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

import useBodyClass from "../Hooks/useBodyClass";
import { useLanguage } from "../Hooks/LanguageContext";
import { gsap } from "gsap";

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

  const links = [
    { to: "/services", label: "Services" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    // { to: "/blog", label: "Blog" },
  ];

  const linksWrapRef = useRef(null); // contenedor relative de los links
  const dotRef = useRef(null); // el dot que se mueve
  const linkRefs = useRef({}); // refs por path

  const assignLinkRef = (to) => (el) => {
    if (el) linkRefs.current[to] = el;
  };

  const moveDot = () => {
    if (!linksWrapRef.current || !dotRef.current) return;
    const pathname = location.pathname;

    // ocultar en home si querés (opcional)
    if (pathname === "/") {
      gsap.set(dotRef.current, { autoAlpha: 0 });
      return;
    }

    const activeEl = linkRefs.current[pathname];
    if (!activeEl) {
      gsap.set(dotRef.current, { autoAlpha: 0 });
      return;
    }

    const wrapRect = linksWrapRef.current.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();

    // Centro X del link y 12px por debajo del bottom
    const targetX = linkRect.left - wrapRect.left + linkRect.width / 2;
    const targetY = linkRect.top - wrapRect.top + linkRect.height + 12;

    gsap.to(dotRef.current, {
      x: targetX,
      y: targetY,
      duration: 0.4,
      ease: "power2.out",
      autoAlpha: 1,
    });
  };

  // mover dot en mount, cambio de ruta y resize
  useLayoutEffect(() => {
    moveDot();
    const onResize = () => moveDot();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

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
            <div className="pointer-events-auto">
              <ReactSVG
                src={isWorkPage ? LabbaWhiteLogo : LabbaWhiteLogo}
                className=""
              />
            </div>
          </Link>

          <div className="flex flex-row items-center gap-4">
            {/* Links desktop + DOT activo */}
            <div
              className="hidden md:flex items-center"
              style={{ color: "#F2F2F2" }}
            >
              <div ref={linksWrapRef} className="relative mt-[2px] mr-6">
                <div className="flex items-baseline space-x-6">
                  {links.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      ref={assignLinkRef(to)}
                      className="text-[14px] mb-2 relative hover:opacity-80 transition-opacity"
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                {/* DOT activo (desktop only) */}
                <div
                  ref={dotRef}
                  className="hidden md:block absolute left-0 top-[-8px] w-[4px] h-[4px] rounded-full"
                  style={{
                    backgroundColor: "#F2F2F2",
                    transform: "translate(-9999px, -9999px)",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* CTA (igual que ya lo tenías) */}
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
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
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

            {/* Botón mobile */}
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
          <div className="w-full h-full flex flex-col px-4 ">
            <div className="flex-1 flex flex-col  justify-end pb-10 ">
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
                {/* <Link
                  to="/blog"
                  className="flex items-center vigo leading-[103%] text-[50px] font-bold text-white tracking-[-2%] hover:text-[#c7c7c7] transition-colors duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Blog
                </Link> */}
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
