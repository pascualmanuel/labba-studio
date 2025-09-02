import React from "react";
import DigitalMask from "../Assets/mask/digital-products.png";
import WebsitesMask from "../Assets/mask/websites.png";
import CustomAiMask from "../Assets/mask/custom-ai.png";
import BrandingMask from "../Assets/mask/branding.png";

const services = [
  {
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
    id: "02",
    title: "Branding",
    desc: "A brand is more than a logo or a color palette — it’s how people recognize, remember, and connect with you. At Labba, we create strong visual and verbal identities, design all the assets you need, and define clear brand guidelines so your message stays consistent everywhere.",
    bullets: [
      "Brand Strategy",
      "Voice + tone guidelines",
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
      <section className="px-6 sm:px-[53px] lg:px-16 pb-[130px]">
        <div
          className="
    mx-auto max-w-[1600px]
    rounded-2xl border-[0.5px] border-white/20
    overflow-hidden
  "
        >
          <div
            className="
      grid grid-cols-1 md:grid-cols-2
      divide-y-[0.5px] md:divide-y-[0.5px] md:divide-x-[0.5px]
      divide-white/15
    "
          >
            {services.map((s) => (
              <article
                key={s.title}
                className={`
                  group
                        aspect-square max-h-[560px]
                        p-6 sm:p-8 lg:p-10
                        flex flex-col
                        w-full
                    ${s.id === "02" ? "!border-t-0" : ""}`}
              >
                <header className="mb-3 sm:mb-4">
                  <span className="text-[12px] font-normal leading-[142%] tracking-0% text-[#5A5A5A]">
                    {s.id}
                  </span>

                  <h3 className="relative overflow-hidden text-2xl sm:text-[45px] font-bold mt-1 leading-tight">
                    {/* Base gris */}
                    <span className="relative z-[1] text-white">{s.title}</span>

                    {/* Overlay que “pinta” con imagen; oculta desde abajo y sube en hover */}
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
                <div className="min-h-0 flex-1 overflow-y-auto pr-2">
                  <p className="text-[16px] font-normal leading-[202%] tracking-0% text-[#5A5A5A] mb-4 transition-colors md:group-hover:text-[#F1F1F1]">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 text-[16px] font-normal leading-[202%] tracking-0% text-[#5A5A5A] list-disc pl-5 transition-colors md:group-hover:text-[#F1F1F1]">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
