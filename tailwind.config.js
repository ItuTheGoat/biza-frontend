/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6ffe6",
          100: "#b3feb3",
          200: "#81fd81",
          300: "#4ffd4f",
          400: "#1cfc1c",
          500: "#03e303",
          600: "#02b002",
          700: "#027e02",
          800: "#014c01",
        },
        blackGreen: "#001900",
      },
    },
  },
  plugins: [],
};
