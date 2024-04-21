/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#8640DE",
          secondary: "#B48EE5",
        },
      },
    },
  },
  plugins: [],
};
