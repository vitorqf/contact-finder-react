/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#272A2B",
          800: "#303435",
          700: "#2D3132",
          600: "#4c4d4e",
          500: "#5a5b5c",
          400: "#68696a",
          300: "#767778",
          200: "#858687",
          100: "#939495",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
};
