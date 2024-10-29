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

  if (location.pathname != "/contact") {
    return (
      <>
        <div
          className={`z-[100] top-0 left-0 right-0 center flex flex-row justify-between items-center 
        h-[77px] max-w-[1500px] sm:h-32 px-[15px] sm:px-[50px] pointer-events-none
         ${isWorkPage ? "" : "fixed"}`}
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

          <div>
            <div className="sm:mr-[-30px]  pointer-events-auto">
              {isMobile ? (
                <Link to="/contact">
                  <div
                    className={`w-[108px] h-[38px] border border-[#2b2b2b] rounded-lg flex items-center justify-center bg-[#ffffff33] 
                    ${isWorkPage ? "text-white" : ""}`}
                  >
                    <span>Contact us</span>
                  </div>
                </Link>
              ) : (
                <MagneticButton
                  text={
                    <span className={`${isWorkPage ? "text-white" : ""}`}>
                      Contact us
                    </span>
                  }
                  link={"/contact"}
                />
              )}
            </div>
          </div>
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
            <div className="sm:mr-[-30px]">
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
                  <div className="w-[108px] h-[38px] border border-[#2b2b2b] rounded-lg flex items-center justify-center bg-[#ffffff33]">
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

// {isMobile ? (
//   <Link to={"/#home"} className="">
//     <div
//       className="absolute right-0 mt-[-7px]  mr-[18px]"
//       style={{
//         zIndex: "10006",
//       }}
//     >
//       <div className="contact">
//         <p className=" text-LaBlack flex items-center">
//           <ReactSVG src={BackIcon} onClick={toggleContact} />
//           <p className="b3-des pl-2.5 text-LaBlack ">Back</p>
//         </p>
//       </div>
//     </div>
//   </Link>
// ) : (
//   <div className="mr-[-30px]">
//     <MagneticButton
//       text={
//         <span className="text flex flex-row items-center text-base">
//           <ReactSVG src={BackIcon} className="mr-3" /> Back
//         </span>
//       }
//       link={"/#home"}
//     />
//   </div>
// )}
