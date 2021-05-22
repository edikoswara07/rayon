// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Quicksand", "Open Sans"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        lightblue: colors.lightBlue,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        coolgray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
