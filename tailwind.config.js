/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#e0e5fe",
          500: "#6f6ac6",
          600: "#4f45e1",
        },
      },
      fontFamily: {
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      // boxShadow: {
      //   custom: "0px 0px 5px rgba(0, 0, 0, 0.3)",
      //   inverted: "-5px -10px 15px rgba(0,0,0,0,3) ",
      // },
    },
  },
  plugins: [],
};
