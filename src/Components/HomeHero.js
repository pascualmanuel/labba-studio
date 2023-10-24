import { useLanguage } from "../Hooks/LanguageContext";

function HomeHero() {
  const { userLanguage, translateText } = useLanguage();
  // {translateText(
  //   " Let’s take your idea to the next level.",
  //   "Llevamos tu idea a otro level"
  // )}

  let homeClaim = "w-2/3	min-w-[880px]";

  return (
    <>
      <div style={{ position: "sticky" }} className="mx-6 sm:mx-20 mt-8	">
        <div className="flex h-[28rem] sm:h-[35rem]">
          <div className="max-w-[900px] lg:min-w-[880px] md:min-w-[800px] sm:min-w-[600px]">
            <p className="h1-desk decoration-slate-100">
              {translateText(
                "Entre el mágico y el ninja te rompes alto site",
                "Your bussiness deserves an amazing website."
              )}
            </p>
          </div>
          <div className="absolute bottom-20 right-0">
            <p className="b2-desk">
              We design & build human-centered <br /> digital experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeHero;
