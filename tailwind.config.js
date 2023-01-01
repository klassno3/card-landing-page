/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mb: "375px",
      tb: "900px",
      dt: "1100px",
    },
    extend: {
      backgroundImage: {
        heropattern:
          "linear-gradient(to right bottom, rgba(170, 52, 219, 0.7), rgba(170, 52, 219, 0.7)), url('../images/image-header-mobile.jpg')",
        DTheropattern:
          "linear-gradient(to right bottom, rgba(170, 52, 219, 0.7), rgba(170, 52, 219, 0.7)), url('../images/image-header-desktop.jpg')",
      },
      fontFamily: {
        inter: ["Inter"],
        lexend: ["Lexend Deca"],
      },
      colors: {
        VeryDarkBlue: "hsl(233, 47%, 7%)",
        DarkDesaturatedBlue: "hsl(244, 38%, 16%)",
        SoftViolet: "hsl(277, 64%, 61%)",
        White: "hsl(0, 0%, 100%)",
        SlightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
      },
    },
  },
  plugins: [],
};
//bg-gradient-to-r from-violet-500 to-fuchsia-500">
