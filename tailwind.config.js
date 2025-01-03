/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#fafafa",
          "200": "#232038",
          "300": "#0b0b0b",
          "400": "rgba(0, 0, 0, 0.2)",
          "500": "rgba(0, 0, 0, 0.6)",
        },
        mediumslateblue: {
          "100": "#3561ff",
          "200": "#3461ff",
        },
        darkgray: "#aaa",
        yellow: "#e0ff22",
      },
      spacing: {},
      fontFamily: {
        "general-sans-variable": "'General Sans Variable'",
        helvetica: "Helvetica",
        "bagel-fat-one": "'Bagel Fat One'",
      },
      borderRadius: {
        "11xs-3": "1.3px",
        "50xl": "69px",
        "51xl": "70px",
        "18xl": "37px",
        "37xl": "56px",
        "13xl": "32px",
        "45xl": "64px",
        "21xl": "40px",
        "100xl-5": "119.5px",
        "12xs": "1px",
      },
    },
    fontSize: {
      sm: "14px",
      "17xl-6": "36.6px",
      "5xl": "24px",
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "37xl": "56px",
      "45xl": "64px",
      lg: "18px",
      "13xl": "32px",
      "77xl": "96px",
      "9xl-2": "28.2px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
