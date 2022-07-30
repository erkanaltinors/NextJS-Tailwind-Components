/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1800px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",
      "gray": {
        DEFAULT: "#6B7280",
        50: "#CDD0D5",
        100: "#C2C5CC",
        200: "#ACB0BA",
        300: "#969BA7",
        400: "#7F8694",
        500: "#6B7280",
        600: "#515761",
        700: "#383C43",
        800: "#1E2024",
        900: "#050506",
      },
      "great-blue": {
        DEFAULT: "#2A669F",
        50: "#E4F7F8",
        100: "#CCEEF2",
        200: "#9CD7E5",
        300: "#6CB9D8",
        400: "#3B94CB",
        500: "#2A669F",
        600: "#234B83",
        700: "#1B3366",
        800: "#14204A",
        900: "#0C102E",
      },
    },
    extend: {},
  },
  plugins: [],
};
