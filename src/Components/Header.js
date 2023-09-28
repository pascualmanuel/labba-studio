import { ReactSVG } from "react-svg";
import LabbaISO from "../Assets/svg-iso-labba.svg";
import LabbaLogo from "../Assets/svg-labba.svg";
import Burger from "../Assets/Burger.svg";
import BurgerClose from "../Assets/Burger-close.svg";

import { useState } from "react";
function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleContact = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center h-24">
        <div className="">
          <ReactSVG src={LabbaISO} className="mr-2.5 ml-12 fixed	" />
          <ReactSVG src={LabbaLogo} className="ml-12 ml-[80px]" />
        </div>
        <div className="fixed top-6 right-10" style={{ zIndex: "100" }}>
          <div
            className={`contact ${expanded ? "expanded" : ""}`}
            onClick={toggleContact}
          >
            {expanded ? (
              <div className="expanded-content w-full h-full">
                <div
                  style={{
                    marginTop: "15px",
                    marginLeft: "28px",
                    marginBottom: "44px",
                  }}
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
                  <p
                    className="b1-desk"
                    style={{ fontSize: "24px", marginBottom: "10px" }}
                  >
                    Contact
                  </p>
                </div>
              </div>
            ) : null}
            <div className="menu-icon">
              {expanded ? null : <p className="b3-desk pl-2.5"> Contact </p>}
              <ReactSVG
                src={expanded ? BurgerClose : Burger}
                style={{
                  position: "fixed",
                  top: "4px",
                  right: "10px",
                  zIndex: "101",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
