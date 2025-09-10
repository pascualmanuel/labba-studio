import Work1 from "../Assets/work/Hyundai/hyundai-site.webp";
import Work2 from "../Assets/work/Inmobiliare/inmobiliare-site.webp";
import Work3 from "../Assets/work/Dbs/dbs-site.webp";
import Work4 from "../Assets/work/Scouting/scounting-site.webp";
import Work5 from "../Assets/work/Morgenstern/morgenstern-site.webp";
import Work6 from "../Assets/work/Galangal/galangal-website.webp";
import Work7 from "../Assets/work/Inmobiliare/inmobiliare-site.webp";
import Work8 from "../Assets/work/Ephimero/ephimero-site.webp";
import Work9 from "../Assets/work/Trebol/trebol-site.webp";
import Work10 from "../Assets/work/Daewoo/daewoo-site.webp";
import Work11 from "../Assets/work/Manno/manno-site.webp";
import Work12 from "../Assets/work/Flora/flora-app.webp";

export const worksData = [
  {
    id: "scouting-labs",
    title: "Scouting Labs",
    desc: "Connecting amateur sports passion with analysis technology, empowering player development and visibility in the sports world.",
    image: Work4,
    tags: ["Website", "AI"],
    span: "half",
    href: "/works/scouting-labs",
  },
  {
    id: "flora-plus",
    title: "Flora Plus",
    desc: "Offering a powerful tool to manage experiences, streamline operations, and enhance the journey for both providers and travelers.",
    image: Work12,
    tags: ["Digital products", "AI"],
    span: "half",
    href: "/works/flora-plus",
  },
  {
    id: "morgenstern",
    title: "Morgenstern",
    desc: "A creative and playful website for a creative and playful illustrated project.",
    image: Work5,
    tags: ["Website"],
    span: "full",
    href: "/works/morgenstern",
  },
  {
    id: "hyundai",
    title: "Hyundai",
    desc: "Showcasing models, promotions, and services while improving user experience and digital presence of Hyundai Costa Rica.",
    image: Work1,
    tags: ["Website"],
    span: "half",
    href: "/works/hyundai",
  },
  {
    id: "dbs",
    title: "De Blas Serrano",
    desc: "Elegant and functional ecommerce for a winery in Spain, enhancing the shopping experience and reflecting the premium character of its products.",
    image: Work3,
    tags: ["Website", "Ecommerce"],
    span: "half",
    href: "/works/dbs",
  },
  {
    id: "galangal",
    title: "Galangal Travel",
    desc: "Luxury travel experiences rooted in local culture, crafted with elegance, authenticity, and exceptional service.",
    image: Work6,
    tags: ["Website"],
    span: "full",
    href: "/works/galangal",
  },
  {
    id: "inmobiliare",
    title: "Inmobiliare",
    desc: "Redesigning the experience of the largest real estate news portal in Mexico.",
    image: Work7,
    tags: ["Website", "Ecommerce"],
    span: "half",
    href: "/works/inmobiliare",
  },
  {
    id: "ephimero",
    title: "Ephimero",
    desc: "Candles ecommerce with ethics & aesthetics",
    image: Work8,
    tags: ["Ecommerce"],
    span: "half",
    href: "/works/ephimero",
  },
  {
    id: "trebol",
    title: "Trebol",
    desc: "With Trebol, users can join various lotteries and keep tabs on the winning numbers, all without the need to visit a physical store.",
    image: Work9,
    tags: ["Mobile App", "AI"],
    span: "full",
    href: "/works/trebol",
  },
  {
    id: "daewoo",
    title: "Daewoo",
    desc: "Explore and find your perfect home appliance.",
    image: Work10,
    tags: ["Ecommerce"],
    span: "half",
    href: "/works/daewoo",
  },
  {
    id: "manno",
    title: "Manno",
    desc: "A trusted community app that connects people who need to outsource tasks and find local services, with people looking to earn money and ready to work.",
    image: Work11,
    tags: ["AI", "Mobile App"],
    span: "half",
    href: "/works/manno",
  },
];

// Función helper para obtener trabajos por IDs
export const getWorksByIds = (workIds) => {
  return workIds
    .map((id) => worksData.find((work) => work.id === id))
    .filter(Boolean);
};
