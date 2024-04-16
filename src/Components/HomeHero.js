import { useEffect, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../Hooks/LanguageContext";
import { useLocation } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importa ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

function HomeHero() {
  const { userLanguage, translateText } = useLanguage();
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(true);
  const [isKeyFrame, setIsKeyFrame] = useState(true);
  const [revealText, setRevealText] = useState("reveal-text");

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 1200;
      const scrollY = window.scrollY || window.pageYOffset;
      setRevealText("no-reveal");
      if (scrollY > threshold) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(revealText);

  const [showDelayedElement, setShowDelayedElement] = useState(false);

  let yesOrNo = 3400;

  useEffect(() => {
    if (window.location.hash === "#home") {
      console.log("first");
      yesOrNo = 0;
      setRevealText("no-reveal");
    }
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowDelayedElement(true);
    }, yesOrNo);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div>
        <div
          className={`mx-6 sm:mx-[10%] mt-8 ${
            isSticky ? "fixed home-hero-1" : "hidden "
          } w-screen`}
        >
          <div className="flex h-[28rem] sm:h-[35rem]">
            <div className="max-w-[900px] lg:min-w-[880px] md:min-w-[800px] sm:min-w-[400px]">
              {showDelayedElement && (
                <>
                  <p
                    className={`h1-desk decoration-slate-100 w-[350px] sm:w-auto ${revealText}`}
                  >
                    <span>Your business </span>
                  </p>
                  <p
                    className={`h1-desk decoration-slate-100 w-[350px] sm:w-auto ${revealText}`}
                  >
                    <span> deserves an </span>
                  </p>
                  <p
                    className={`h1-desk decoration-slate-100 w-[350px] sm:w-auto ${revealText}`}
                  >
                    <span className="pb-[30px]"> amazing website.</span>
                  </p>
                </>
              )}
            </div>
            <div className="home-desc-hero">
              {showDelayedElement && (
                <p className="b2-desk w-[200px] sm:w-auto ">
                  <p className={`${revealText}`}>
                    <span>We design & build human-centered </span>
                  </p>
                  <p className={`${revealText}`}>
                    <span>digital experiences.</span>
                  </p>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
