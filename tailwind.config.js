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
      },
      boxShadow: {
        valueShadow: "0 -1px #ECF0FF1A",
      },
    },
  },
  plugins: [],
};
