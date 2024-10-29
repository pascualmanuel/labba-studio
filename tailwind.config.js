/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    screens: {
      ssm: "500px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      ms: "700px",

      md: "768px",
      // => @media (min-width: 768px) { ... }
      lm: "840px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      mg: "1135px",

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        LaBlack: "#2b2b2b",
      },
    },
  },
  plugins: [],
};
