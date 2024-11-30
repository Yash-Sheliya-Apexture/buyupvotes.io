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
      boxShadow: {
        Sidebar: "0px 0px 20px 2px #00000036",
      },
    },
  },
  plugins: [],
};
