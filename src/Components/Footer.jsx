import React from "react";
import { useState, useRef, useEffect } from "react";
import Facebook from "../Assets/icons/facebook.svg";
import { Link } from "react-router-dom";
import Linkedin from "../Assets/icons/linkedin.svg";
import Instagram from "../Assets/icons/instagram.svg";
import { ReactSVG } from "react-svg";
import { useLanguage } from "../Hooks/LanguageContext";
import MagneticButton from "./MagenticButton";
import Rounded from "../Hooks/Rounded";
const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const { userLanguage, translateText } = useLanguage();

  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard(textToCopy) {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setIsCopied(true); // Set isCopied to true when the text is copied
  }

  const email = "hello@labba.studio";
  const textToCopy = useRef(null);

  const handleCopyClick = () => {
    copyToClipboard(email);
    if (textToCopy.current) {
      textToCopy.current.textContent = "Copied!";
    }
  };
  const btnEmailCopyStyle = {
    position: "relative",
    width: "220px",
    height: "42px",
    overflow: "hidden",
    border: "none",
    cursor: "inherit",
  };

  const beforeAfterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "all 0.3s",
  };

  const beforeHover = {
    ...beforeAfterStyle,
    top: hovered ? "-60px" : "0",
  };

  const afterHover = {
    ...beforeAfterStyle,
    top: hovered ? "0" : "60px",
  };

  const prefooterRef = useRef(null);
  const footerRef = useRef(null);

  const [shouldShrink, setShouldShrink] = useState(
    localStorage.getItem("shouldShrink") === "true"
  );

  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const prefooter = document.querySelector(".prefooter");

      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      const bottomThreshold = 100; // 100px arriba del bottom
      const scrolledToThreshold =
        scrollTop + windowHeight >= documentHeight - bottomThreshold;

      if (scrolledToThreshold) {
        prefooter.classList.add("shrink");
      } else {
        prefooter.classList.remove("shrink");
        prefooter.style.opacity = 1;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let widthButton = 247;
  let heightButton = 77;

  if (window.innerWidth <= 1040) {
    widthButton = 207;
    heightButton = 57;
  }
  if (window.innerWidth <= 768) {
    widthButton = 218;
  }
  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <div className={`prefooter ${shouldShrink ? "shrink" : ""}`}>
          <Link to={"/contact"}>
            <div
              className={` cursor next-level ${
                isMoving ? "is-moving" : ""
              } flex flex-row h-[100%] sm:items-center justify-center  sm:ml-0`}
            >
              <p className="b1-desk py-0 pb-[45px] sm:pb-[0px] 	pl-0 sm:pr-[100px] text-white	text-center ls:text-left ">
                {translateText(
                  "Llevamos tu idea a otro level",
                  " Let’s take your idea to the next level."
                )}
              </p>

              <Rounded
                widthButton={widthButton}
                heightButton={heightButton}
                buttonBorderColor={"white"}
              >
                <p className="button-font" style={{ color: "white" }}>
                  Drop us a line
                </p>
              </Rounded>
            </div>
          </Link>
        </div>
        <div className="h-[45px] sm:h-[65px]"></div>
        <div className="footer" ref={footerRef}>
          <div className="flex flex-col lg:flex-row items-start ms:items-center  pb-[50px] justify-between  mx-6 lg:mx-20 xl:mx-40">
            <div className="flex flex-col ms:flex-row">
              <div className="ms:mr-2 md:mr-5">
                <p className="sayhi mb-3">Say hi</p>
                <div className="btn-floral-border" onClick={handleCopyClick}>
                  <button
                    className=""
                    style={btnEmailCopyStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => {
                      setHovered(false);
                      textToCopy.current.textContent = "click to copy";
                    }}
                  >
                    <div className="b4-desk text-red" style={beforeHover}>
                      hello@labba.studio
                    </div>
                    <div
                      className="b4-desk text-red"
                      style={afterHover}
                      ref={textToCopy}
                    >
                      {isCopied ? "Copied!" : "click to copy"}
                    </div>
                  </button>
                </div>
              </div>

              <div className="ms:mr-2 md:mr-5 sm:mb-[0px]">
                <div>
                  <p className="sayhi mb-3 mt-4 ms:mt-0">Argentina</p>
                  <a
                    href="https://wa.me/+5491151632960"
                    className="whatsapp-link"
                    target="_blank"
                  >
                    <div className="btn-floral-border">
                      <div className="btn-floral-scent b4-desk  before:content-['+54_9_11_5163_2960'] after:content-['Open_in_WhatsApp'] "></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="">
                <p className="sayhi mb-3 mt-4 ms:mt-0">Spain</p>
                <a
                  href="https://wa.me/+34634269453"
                  className="whatsapp-link"
                  target="_blank"
                >
                  <div className="btn-floral-border">
                    <div className="btn-floral-scent  b4-desk before:content-['+34_0634_0269_453'] after:content-['Open_in_WhatsApp'] "></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <Link to={"https://instagram.com/labbastudio/"} target="_blank">
                <ReactSVG src={Instagram} className="mr-[20px]" />
              </Link>
              <Link
                to={"https://linkedin.com/company/labba-studio"}
                target="_blank"
              >
                <ReactSVG src={Linkedin} className="mr-[20px]" />
              </Link>
              {/* <ReactSVG src={Facebook} className="" /> */}
            </div>
          </div>
          <div className="border-t-gray  ">
            <p className="mt-10 font-light text-base leading-6">
              © 2024 LABBA STUDIO
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
