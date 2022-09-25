/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        labelText: "#737BAE",
        valueBg: "#14172B",
        valueText: "#ECF0FF",
        changeText: "#00FFA3",
        bitcoinBottom: "#EAB3000F",
        bitcoinTop: "#626A881A",
        bitcoinBg: "linear-gradient(to bottom,#626A881A, #EAB3000F)",
      },
      boxShadow: {
        valueShadow: "0 -1px #ECF0FF1A",
        logoShadow: "0 -1px ##ECF0FF1A",
      },
      spacing: {
        22: "5.5rem",
      },
      scale: {
        70: "70",
      },
    },
  },
  plugins: [],
};
