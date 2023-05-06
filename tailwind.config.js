/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#0E1735",
        lightGreen: "#d1fae5",
        darkGreen: "#10b981",
        lightBlue: "#dbeafe",
        darkBlue: "#1b1c57",
        gray: {
          100: "#E0E3EB",
          200: "#626687",
          300: "#3C4563",
        },
        yellow: "#F59E0B",
        lightRed: "#fee2e2",
        darkRed: "#ef4646",
      },
      container: {
        padding: "15px",
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        introBg: 'url("../public/images/intro/bg.png")',
        subscribeBg: 'url("../public/images/subscribe/bg.png")',
      },
    },
  },
  plugins: [],
};
