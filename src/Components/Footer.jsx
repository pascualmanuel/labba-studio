import React from "react";
import { useState, useRef, useEffect } from "react";
import Facebook from "../Assets/icons/facebook.svg";
import { Link } from "react-router-dom";
import Linkedin from "../Assets/icons/linkedin.svg";
import Instagram from "../Assets/icons/instagram.svg";
import { ReactSVG } from "react-svg";
import { useLanguage } from "../Hooks/LanguageContext";
import MagneticButton from "./MagenticButton";
import FondoContact from "../Assets/fondo-contact.webp";
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
    // font-style: normal;
    // font-weight: 700;
    // font-size: 45px;
    // line-height: 61px;

    <>
      <div className="footer px-6 sm:px-[53px] lg:px-16">
        <div
          className="mb-[80px] h-[295px] mx-auto  bg-cover bg-center rounded-[20px] flex items-center justify-center flex-col"
          style={{ backgroundImage: `url(${FondoContact})` }}
        >
          <h4 className=" text-[45px] leading-[61px] font-bold pb-[40px]">
            Let’s take your idea to the next level.
          </h4>
          <p className="text-[16px] leading-[32px] font-bold">
            Book discovery call
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start ms:items-center  pb-[50px] justify-between  ">
          <div className="flex flex-col ms:flex-row">
            <div className="ms:mr-2 md:mr-5">
              <p className="sayhi mb-3">Say hi</p>
              <div
                className="btn-floral-border text-[#B5B5B5]"
                onClick={handleCopyClick}
              >
                <button
                  className=""
                  style={btnEmailCopyStyle}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => {
                    setHovered(false);
                    textToCopy.current.textContent = "click to copy";
                  }}
                >
                  <div className="b4-desk " style={beforeHover}>
                    hello@labba.studio
                  </div>
                  <div className="b4-desk " style={afterHover} ref={textToCopy}>
                    {isCopied ? "Copied!" : "click to copy"}
                  </div>
                </button>
              </div>
            </div>

            <div className="ms:mr-2 md:mr-5 sm:mb-[0px] text-[#B5B5B5]">
              <div>
                <p className="sayhi mb-3 mt-4 ms:mt-0">Spain</p>
                <a
                  href="https://wa.me/+34661173788"
                  className="whatsapp-link"
                  target="_blank"
                >
                  <div className="btn-floral-border">
                    <div className="btn-floral-scent  b4-desk before:content-['+34_661_173_788'] after:content-['Open_in_WhatsApp'] "></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="">
              <p className="sayhi mb-3 mt-4 ms:mt-0">Buenos Aires</p>
              <a
                href="https://wa.me/+5491151632960"
                className="whatsapp-link"
                target="_blank"
              >
                <div className="btn-floral-border text-[#B5B5B5]">
                  <div className="btn-floral-scent b4-desk  before:content-['+54_9_11_5163_2960'] after:content-['Open_in_WhatsApp'] "></div>
                </div>
              </a>
            </div>
            {/* <div className="ml-0 sm:ml-5">
                <p className="sayhi mb-3 mt-4 ms:mt-0">Portugal</p>
                <a
                  href="https://wa.me/+34634269453"
                  className="whatsapp-link"
                  target="_blank"
                >
                  <div className="btn-floral-border">
                    <div className="btn-floral-scent  b4-desk before:content-['+34_661_173_788'] after:content-['Open_in_WhatsApp'] "></div>
                  </div>
                </a>
              </div> */}
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
        <div className="border-t-gray pb-[55px] ">
          <p className="mt-10 font-light text-base leading-6">
            © {new Date().getFullYear()} LABBA STUDIO
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
