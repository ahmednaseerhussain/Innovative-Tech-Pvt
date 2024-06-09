/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#02f9ac",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, rgba(21,248,173,1) 0%, rgba(14,233,211,1) 35%, rgba(26,217,254,1) 100%)',
      },
      textColor: {
        'primary-gradient': 'linear-gradient(135deg, rgba(21,248,173,1) 0%, rgba(14,233,211,1) 35%, rgba(26,217,254,1) 100%)',
      },
    },
  },
  plugins: [],
};
