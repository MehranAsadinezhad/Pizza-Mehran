/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e84118",
        secondary: "#c23616",
        dark: "#353b48",
        medium: "#dcdde1",
        light: "#f5f6fa",
      },
      fontFamily: {
        vazir: ["vazir"],
        cody: ["cody"],
        shabnam: ["shabnam"],
        shabnamBold: ["shabnamBold"],
      },
    },
  },
  plugins: [],
};
