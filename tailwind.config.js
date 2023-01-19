/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131312",
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addUtilities({
        ".highlight-remove": {
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          "-moz-tap-highlight-color": "rgba(0,0,0,0)",
          "-o-tap-highlight-color": "rgba(0,0,0,0)",
          "-ms-tap-highlight-color": "rgba(0,0,0,0)",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        },
        ".scrollbar-none": {
          "-webkit-overflow-style": "none",
          "-moz-overflow-style": "none",
          "-o-overflow-style": "none",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-none::-webkit-scrollbar": { display: "none" },
        ".image-card-small": {
          width: "300px",
          "min-width": "300px",
          height: "170px",
          "min-height": "170px",
        },
        ".image-card-medium": {
          width: "158px",
          "min-width": "158px",
          height: "280px",
          "min-height": "280px",
        },
        ".image-card-large": {
          width: "218px",
          "min-width": "218px",
          height: "434px",
          "min-height": "434 px",
        },
        ".modal-shadow": {
          "box-shadow": "0px 0px 5px 0px #ffffff8f",
        },
      });
    }),
  ],
};
