import { ReactSVG } from "react-svg";
import LabbaISO from "../Assets/svg-iso-labba.svg";
import LabbaLogo from "../Assets/labba/logo-labba.svg";
import Burger from "../Assets/Burger.svg";
import BurgerClose from "../Assets/Burger-close.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../Assets/Back.svg";
import { useState, useEffect } from "react";
import { useLanguage } from "../Hooks/LanguageContext";
import Pruebas from "../Components/Pruebas";
import HeaderMagneticButton from "./HeaderMagneticButton";
function Header() {
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

  if (location.pathname === "/") {
    return (
      <>
        <div className="flex flex-row justify-between items-center h-[77px] sm:h-24 ">
          <Link to="/">
            <div
              className="fixed "
              style={{
                mixBlendMode: "difference",
                zIndex: "100000",
              }}
            >
              <ReactSVG
                src={LabbaLogo}
                className=" sm:ml-[80px] ml-[18px] "
                style={{ zIndex: "100000" }}
              />
            </div>
          </Link>

          {isMobile ? (
            <Link to={"/contact"} className="">
              <div
                className="fixed right-0 mt-[-7px]  mr-[18px]"
                style={{
                  mixBlendMode: "difference",
                  zIndex: "100000",
                }}
              >
                <div className="contact">
                  <p className="different text-white">Contact</p>
                </div>
              </div>
            </Link>
          ) : (
            <Pruebas text={"Contact"} link={"/contact"} />
          )}

          {/* <div
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
          </div> */}
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <div className="flex flex-row justify-between items-center h-[77px] sm:h-24">
          <Link to="/">
            <div
              className=" mt-[28px]"
              style={{
                mixBlendMode: "difference",
                zIndex: "100000",
              }}
            >
              <ReactSVG
                src={LabbaLogo}
                className=" sm:ml-[80px] ml-[18px] "
                style={{ zIndex: "100000" }}
              />
            </div>
          </Link>
          <Link to="/">
            <div className="contact-page absolute">
              <ReactSVG src={BackIcon} onClick={toggleContact} />
              <p className="b3-des pl-2.5 "> Back </p>
            </div>
          </Link>
        </div> */}

        <div className="flex flex-row justify-between items-center h-[77px] sm:h-24 ">
          <Link to="/">
            <div
              className={logoPosition}
              style={{
                mixBlendMode: "difference",
                zIndex: "100000",
              }}
            >
              <ReactSVG
                src={LabbaLogo}
                className=" sm:ml-[80px] ml-[18px] "
                style={{ zIndex: "100000" }}
              />
            </div>
          </Link>
          {/* <Link to={"/"} className="">
            <div
              className="fixed right-0 mt-[-10px] mr-[80px]"
              style={{
                mixBlendMode: "difference",
                zIndex: "100000",
              }}
            >
              <div
                className="contact"
                style={{
                  backgroundColor: "black",
                  border: "1px solid white",
                }}
              >
                <ReactSVG src={BackIcon} onClick={toggleContact} />
                <p className="b3-des pl-2.5 text-white"> Back </p>
              </div>
            </div>
          </Link> */}
          {/* <Pruebas /> */}

          {isMobile ? (
            <Link to={"/"} className="">
              <div
                className="absolute right-0 mt-[-7px]  mr-[18px]"
                style={{
                  mixBlendMode: "difference",
                  zIndex: "100000",
                }}
              >
                <div className="contact">
                  <p className="different text-white flex items-center">
                    <ReactSVG src={BackIcon} onClick={toggleContact} />
                    <p className="b3-des pl-2.5 text-white ">Back</p>
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <Pruebas text={"Back"} link={"/"} />
          )}
        </div>
      </>
    );
  }
}
export default Header;
