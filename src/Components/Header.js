import { ReactSVG } from "react-svg";
import LabbaISO from "../Assets/svg-iso-labba.svg";
import LabbaLogo from "../Assets/svg-labba.svg";
import Burger from "../Assets/Burger.svg";
import BurgerClose from "../Assets/Burger-close.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../Assets/Back.svg";
import { useState, useEffect } from "react";
import { useLanguage } from "../Hooks/LanguageContext";

function Header() {
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

  if (location.pathname === "/") {
    return (
      <>
        <div className="flex flex-row justify-between items-center h-24">
          <Link to="/">
            <div className="">
              <ReactSVG
                src={LabbaISO}
                className="sm:mr-2.5 sm:ml-12 ml-6 fixed "
                style={{ zIndex: "10000" }}
              />
              <ReactSVG
                src={LabbaLogo}
                className="ml-12 sm:ml-[80px] ml-[60px]"
                style={{ zIndex: "10000" }}
              />
            </div>
          </Link>
          <div
            className="fixed top-6 right-3 sm:right-10"
            style={{ zIndex: "100" }}
          >
            <div className={`contact ${expanded ? "expanded" : ""}`}>
              {expanded ? (
                <div className="expanded-content w-full h-full">
                  <div
                    style={{
                      paddingTop: "15px",
                      paddingLeft: "28px",
                      paddingBottom: "44px",
                      userSelect: "none",
                    }}
                    onClick={changeLanguage}
                  >
                    <span className="b3-desk mr-4" style={{ fontSize: "16px" }}>
                      EN
                    </span>
                    <span className="b3-desk" style={{ fontSize: "16px" }}>
                      ES
                    </span>
                  </div>
                  <div
                    style={{
                      marginLeft: "28px",
                    }}
                  >
                    <p
                      className="b1-desk"
                      style={{ fontSize: "24px", marginBottom: "10px" }}
                    >
                      Work
                    </p>
                    <p
                      className="b1-desk"
                      style={{ fontSize: "24px", marginBottom: "10px" }}
                    >
                      Services
                    </p>
                    <p
                      className="b1-desk"
                      style={{ fontSize: "24px", marginBottom: "10px" }}
                    >
                      Process
                    </p>
                    <Link to="/contact">
                      <p
                        className="b1-desk"
                        style={{ fontSize: "24px", marginBottom: "10px" }}
                      >
                        Contact
                      </p>
                    </Link>
                  </div>
                </div>
              ) : null}
              <div className="menu-icon">
                {expanded ? null : (
                  <Link to="/contact">
                    <p className="b3-desk pl-2.5"> Contact </p>
                  </Link>
                )}
                <ReactSVG
                  src={expanded ? BurgerClose : Burger}
                  style={{
                    position: "absolute",
                    top: "4px",
                    right: "6px",
                    zIndex: "101",
                  }}
                  onClick={toggleContact}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-row justify-between items-center h-24">
          <Link to="/">
            <div className="">
              <ReactSVG
                src={LabbaISO}
                className="mr-2.5 ml-12 fixed"
                style={{ zIndex: "10000" }}
              />
              <ReactSVG
                src={LabbaLogo}
                className="ml-12 ml-[80px]"
                style={{ zIndex: "10000" }}
              />
            </div>
          </Link>
          <Link to="/">
            <div className="contact-page">
              <ReactSVG src={BackIcon} onClick={toggleContact} />
              <p className="b3-desk pl-2.5"> Back </p>
            </div>
          </Link>
        </div>
      </>
    );
  }
}
export default Header;
