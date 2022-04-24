module.exports = {
  content: [
    "./pages/**/*.{js,jsx,tsx,ts}",
    "./components/**/*.{js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/forms")],
};
