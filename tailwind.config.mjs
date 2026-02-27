/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00c4a7",
          50: "#edfcf9",
          100: "#d2f7f0",
          200: "#a9eee3",
          300: "#72dfd2",
          400: "#3fc9bb",
          500: "#00c4a7",
          600: "#138d7e",
          700: "#147166",
          800: "#155a53",
          900: "#164a45",
        },
        secondary: {
          DEFAULT: "#ff6b8a",
          50: "#fff1f3",
          100: "#ffe0e6",
          200: "#ffc6d3",
          300: "#ff9db2",
          400: "#ff6b8a",
          500: "#f93a65",
          600: "#e71852",
          700: "#c20d44",
          800: "#a20e40",
          900: "#8a103c",
        },
      },
      fontFamily: {
        sans: ['"Rethink Sans"', "system-ui", "sans-serif"],
        heading: ['"Space Mono"', "monospace"],
        mono: [
          '"Space Mono"',
          "Consolas",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
      maxWidth: {
        content: "672px",
      },
    },
  },
  plugins: [],
};
