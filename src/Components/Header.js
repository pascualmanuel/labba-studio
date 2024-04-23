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
                zIndex: "10006",
              }}
            >
              <ReactSVG
                src={LabbaLogo}
                className=" sm:ml-[80px] ml-[18px] "
                style={{ zIndex: "10006" }}
              />
            </div>
          </Link>

          {isMobile ? (
            <Link to={"/contact"} className="">
              <div
                className="fixed right-0 mt-[-7px]  mr-[18px]"
                style={{
                  mixBlendMode: "difference",
                  zIndex: "10006",
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
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-row justify-between items-center h-[77px] sm:h-24 ">
          <Link to="/#home">
            <div
              className={logoPosition}
              style={{
                mixBlendMode: "difference",
                zIndex: "10006",
              }}
            >
              <ReactSVG
                src={LabbaLogo}
                className=" sm:ml-[80px] ml-[18px] "
                style={{ zIndex: "10006" }}
              />
            </div>
          </Link>

          {isMobile ? (
            <Link to={"/#home"} className="">
              <div
                className="absolute right-0 mt-[-7px]  mr-[18px]"
                style={{
                  mixBlendMode: "difference",
                  zIndex: "10006",
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
            <Pruebas text={"Back"} link={"/#home"} />
          )}
        </div>
      </>
    );
  }
}
export default Header;
