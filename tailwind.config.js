/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    fontFamily: {
      primary: "var(--font-dosis)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3F51B5",
          hover: "#3F44B5",
        },
        secondary: {
          DEFAULT: "#FF9800",
          hover: "#FF6E00",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
