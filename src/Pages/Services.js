import React from "react";
import DigitalMask from "../Assets/mask/digital-products.png";
import WebsitesMask from "../Assets/mask/websites.png";
import CustomAiMask from "../Assets/mask/custom-ai.png";
import BrandingMask from "../Assets/mask/branding.png";

const services = [
  {
    uId: "01",
    id: "01",
    title: "Digital Products",
    desc: "We design and build digital products that create real connections. By combining smart design with a deep understanding of human behavior, we launch products that are not only beautiful but meaningful, helping your brand grow with purpose.",
    bullets: [
      "Digital Product Strategy",
      "User Research",
      "User Experience Design (UX)",
      "User Interface Design (UI)",
      "Design Systems",
      "Microinteraction Animation",
      "Usability Testing",
      "Design-to-Development Support",
    ],
    maskUrl: DigitalMask,
  },
  {
    uId: "02",
    id: "02",
    title: "Websites",
    desc: "Your website is where your brand truly comes alive. At Labba, we design digital spaces that clearly express who you are and what you stand for, while giving users an engaging, effortless experience.",
    bullets: [
      "Website strategy & architecture",
      "Mobile-first design & responsive",
      "Frontend & backend development",
      "E-commerce platforms & integrations",
      "Content Management Systems (CMS)",
      "SEO Optimization",
      "Accessibility & Cross-Browser Compatibility",
      "Maintenance, support & updates",
    ],
    maskUrl: WebsitesMask,
  },
  {
    uId: "03",
    id: "03",
    title: "Custom AI",
    desc: "We develop completely bespoke websites, apps, digital products, and ecommerce platforms across industries worldwide. All of our projects are tailored to meet the unique needs of every client.",
    bullets: [
      "AI Product strategy & planning",
      "AI-Powered solutions",
      "Predictive analytics & data modeling",
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Computer vision & image recognition",
      "AI integration & automation",
      "AI performance testing & optimization",
    ],
    maskUrl: CustomAiMask,
  },
  {
    uId: "04",
    id: "02",
    title: "Branding",
    desc: "A brand is more than a logo or a color palette — it’s how people recognize, remember, and connect with you. At Labba, we create strong visual and verbal identities, design all the assets you need, and define clear brand guielines so your message stays consistent everywhere.",
    bullets: [
      "Brand Strategy",
      "Voice + tone guielines",
      "Naming",
      "Logo design",
      "Campaign planning & creative",
      "Brand identity",
      "Icons",
      "Illustration",
    ],
    maskUrl: BrandingMask,
  },
];

const Services = () => {
  return (
    <>
      <section className="services-section px-6 sm:px-[53px] lg:px-16 pt-[138px] max-w-[1900px] mx-auto pb-[40px]">
        <div className="flex flex-col">
          <h1 className="h2 max-w-[1455px] mb-10">
            We help businesses grow through digital experiences.
          </h1>
        </div>
      </section>

      {/* BOX PARENT */}
      <section className="ms:px-[53px] lg:px-16 pb-[130px]">
        <div
          className="
    mx-auto max-w-[1600px]
    rounded-2xl ms:border-[0.5px] ms:border-white/20
    overflow-hidden
  "
        >
          <div
            className="
            border-b-[0.5px] border-white/15
            border-t-[0.5px] 
            ms:border-t-0
            ms:border-b-0

      grid grid-cols-1 xl:grid-cols-2
      divide-y-[0.5px] xl:divide-y-[0.5px] xl:divide-x-[0.5px]
      divide-white/15
    "
          >
            {services.map((s) => (
              <article
                key={s.title}
                className={`
                  article-services
                  min-h-[555px]
                  group
                        ms:aspect-square max-h-[590px]
                        p-6 sm:p-8 lg:p-8
                        flex flex-col
                        w-full
                    ${s.uId === "02" ? "ms:!border-t-0" : ""}`}
              >
                <header className="mb-3 sm:mb-4">
                  <span className="text-[12px] font-normal leading-[142%] tracking-0% text-[#5A5A5A]">
                    {s.id}
                  </span>

                  <h3 className="relative overflow-hidden text-[30px] sm:text-[45px] font-bold mt-1 leading-tight">
                    {/* Base gris */}
                    <span className="relative z-[1] text-transparent lg:text-white  transition-[color] duration-100 xl:group-hover:text-transparent xl:group-hover:delay-[200ms]">
                      {s.title}
                    </span>

                    <span className="title-reveal-clip absolute inset-0 z-[2] block pointer-events-none">
                      <span
                        className="title-reveal-fill block"
                        style={{ backgroundImage: `url(${s.maskUrl})` }}
                      >
                        {s.title}
                      </span>
                    </span>
                  </h3>
                </header>

                {/* Body */}
                <div className="min-h-0 flex-1  pr-2">
                  <p className="text-[16px] font-normal leading-[202%] tracking-0% text-[#5A5A5A] mb-4 transition-colors xl:group-hover:text-[#F1F1F1]">
                    {s.desc}
                  </p>
                  <div className="grid grid-cols-1 xl:grid-cols-2 xll:grid-cols-1 gap-x-6">
                    <ul className="space-y-[0.5px] text-[16px] font-normal  leading-[202%] xl:leading-[170%] xll:leading-[202%] tracking-0% text-[#5A5A5A] list-disc pl-5 transition-colors xl:group-hover:text-[#F1F1F1]">
                      {s.bullets.slice(0, 4).map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <ul className="space-y-[0.5px] text-[16px] font-normal leading-[202%] xl:leading-[170%] xll:leading-[202%] tracking-0% text-[#5A5A5A] list-disc pl-5 transition-colors xl:group-hover:text-[#F1F1F1]">
                      {s.bullets.slice(4, 8).map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div>
        
      </div>
    </>
  );
};

export default Services;
