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
        base: "0px 2px 5px 1px #ff8700",
        card: "rgb(145, 158, 171) 0px 0px 2px 0px",
      },
      colors: {
        "main-color": "#FF5700",
        "sub-color": "#2D2624",
        "gray-border": "#f3f4f6",
        "side-color": "#FF570014",
        "active": "#403633",
        "background-active": "#f0f0f099",
        "light-brown": "#FDE6D9",
        "dark-green": "#004B50",
        "light-gray": "#919EAB",
        "para-color": "#403633",
        "gray-hover" : "#6083731c",
        "light-orange": "#FF5630",
        "gray-light" : "#F4F6F8",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      fontSize: {
        xxs : "12px",
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
        large : "30px",
        small : "20px",
      },
    },
  },
  plugins: [],
};
