/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LatoFont: ["Lato", "serif"],
      },
      screens: {
        xs: { min: "320px" },
      },
    },
  },
};
