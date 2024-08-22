
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        orange: "#EF8934",
        grey: "#F1F4F2",
        grey500: "#555555",
        green: "#12A753",
        lightorange: "#FCE7D6",
        linera: "rgba(0, 0, 0, 0.75)",
        brown: "#301B0A",
        navcolor: "#555555",
        imgbg: "#F1FEF7",
        orange100: "#FCE7D6",
        orange200: "#FAD8BB"
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
  ],
};