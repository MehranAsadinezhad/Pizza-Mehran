/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C60C29",
        secondary: "#9C0A21",
        lightRed: "#C60C29",
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
        sm: "520px",
        // => @media (min-width: 576px) { ... }

        md: "640px",
        // => @media (min-width: 960px) { ... }

        lg: "885px",
        // => @media (min-width: 1440px) { ... }

        xl: "1022px",
      },
    },
  },
  plugins: [],
};
