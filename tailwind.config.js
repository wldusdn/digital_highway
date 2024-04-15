/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumaquamarine: "#59bea6",
        gray: {
          "100": "#fffefe",
          "200": "rgba(0, 0, 0, 0)",
        },
        black: "#000",
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#e0e0e0",
          "300": "#d9d9d9",
          "400": "rgba(217, 217, 217, 0)",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f4f4f4",
          "300": "#ebebeb",
        },
        lightgray: {
          "100": "#d6d6d6",
          "200": "#cdcdcd",
          "300": "#ccc",
        },
        darkgray: {
          "100": "#adadad",
          "200": "#a7a7a7",
        },
        dimgray: "rgba(110, 108, 108, 0.75)",
        silver: {
          "100": "#bdbdbd",
          "200": "#b7b7b7",
        },
        cornflowerblue: "#6084e1",
        lightseagreen: "#4a9f8b",
        lightcyan: "#d9f7ef",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "13xl": "32px",
      mini: "15px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "9xl": "28px",
      "11xl": "30px",
      lg: "18px",
      "3xl": "22px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
