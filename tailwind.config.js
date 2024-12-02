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
        base : "0px 2px 5px 1px #ff8700"
      },
      colors: {
        slate: "#cbd5e1",
        background: "#F0F5FF",
        "main-color": "#FF5700",
        "heading-color": "#222222",
        "title-color": "#495057",
        "slate-color": "rgba(203,213,225,0.3)",
        "gray-border": "#d1d5db",
        heading: "#403e57",
        para: "#5e5d72",
        lights: "rgba(0,0,0,0.6)",
        darks: "rgba(0,0,0,0.8)",
        "data-color": "#212529",
        "sub-color": "#f1ffff",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      fontSize: {
        xs: "14px",
        small: "16px",
        base: "20px",
        basic: "24px",
        large: "30px",
      },
      borderRadius: {
        base: "4px",
        round: "4px 0px 0px 4px",
        exta: "0px 4px 4px 0px",
      },
    },
  },
  plugins: [],
};
