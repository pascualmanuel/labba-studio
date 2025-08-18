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
import { useLanguage } from "../Hooks/LanguageContext";

import MagneticButton from "./MagenticButton";

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  const isWorkPage =
    location.pathname.includes("/works") || location.pathname.includes("/");

  // }
  // transition-transform duration-300 will-change-transform
  // ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}

  if (location.pathname != "/contact") {
    return (
      <>
        <div
          className={`z-[100] fixed w-screen center flex flex-row justify-between items-center 
        h-[77px] max-w-[1500px] sm:h-32 px-[15px] sm:px-[50px] pointer-events-none transition-transform duration-300 will-change-transform
        ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}
         ${isWorkPage ? "" : "fixed"} `}
        >
          <Link to="/#home">
            <div
              className=" pointer-events-auto"
              style={{
                zIndex: "10006",
              }}
            >
              <ReactSVG
                src={isWorkPage ? LabbaWhiteLogo : LabbaLogo}
                className=" "
                style={{ zIndex: "10006" }}
              />
            </div>
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
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="z-[100] top-0 left-0 right-0 center flex flex-row justify-between items-center h-[77px] max-w-[1500px] sm:h-32 px-[15px] sm:px-[50px] ">
          <Link to="/#home">
            <div
              className=""
              style={{
                zIndex: "1006",
              }}
            >
              <ReactSVG
                src={LabbaLogo}
                className=" "
                style={{ zIndex: "10006" }}
              />
            </div>
          </Link>

          <div>
            <div className="sm:mr-[-30]">
              {!isMobile ? (
                <MagneticButton
                  text={
                    <span
                      className={`text flex flex-row items-center text-base`}
                    >
                      <ReactSVG src={BackIcon} className="mr-3" />
                      Back
                    </span>
                  }
                  link={"/#home"}
                />
              ) : (
                <Link to="/#home">
                  <div className="w-[108px] h-[38px] border border-[#2b2b2b] rounded-[8px] flex items-center justify-center bg-[#ffffff33]">
                    <span className="text flex flex-row items-center text-base">
                      <ReactSVG src={BackIcon} className="mr-3" /> Back
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
