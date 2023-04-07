/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#13547a",
        "light-green": "#80d0c7",
      },
    },
  },
  plugins: [],
};
