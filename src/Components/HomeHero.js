import { useEffect, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../Hooks/LanguageContext";

import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importa ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

function HomeHero() {
  const { userLanguage, translateText } = useLanguage();

  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the threshold value as needed
      const threshold = 800;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > threshold) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //

  return (
    <>
      <div>
        <div
          className={`mx-6 sm:mx-[10%] mt-8 ${
            isSticky ? " fixed home-hero-1" : "hidden"
          } w-screen`}
        >
          <div className="flex h-[28rem] sm:h-[35rem]">
            <div className="max-w-[900px] lg:min-w-[880px] md:min-w-[800px] sm:min-w-[400px]">
              <p className="h1-desk decoration-slate-100 w-[350px] sm:w-auto">
                {translateText(
                  "Entre el mágico y el ninja te rompes alto site",
                  "Your bussiness deserves an amazing website."
                )}
              </p>
            </div>
            <div className="home-desc-hero">
              <p className="b2-desk w-[200px] sm:w-auto">
                We design & build human-centered <br /> digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeHero;
