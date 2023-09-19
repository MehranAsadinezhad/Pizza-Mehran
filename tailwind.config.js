/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E70E2E",
        secondary: "#C60C29",
        lightRed: "#EE2744",
        dark: "#353b48",
        medium: "#dcdde1",
        light: "#f5f6fa",
      },
      fontFamily: {
        vazir: "Vazir",
        cody: "Codystar",
        shabnam: "Shabnam",
        shabnamBold: "shabnamBold",
      },
      screens: {
        sm: "370px",
        // => @media (min-width: 576px) { ... }

        md: "498px",
        // => @media (min-width: 960px) { ... }

        lg: "742px",
        // => @media (min-width: 1440px) { ... }

        xl: "1022px",
      },
    },
  },
  plugins: [],
};
