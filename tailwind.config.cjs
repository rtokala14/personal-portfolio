const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        tint: "#d4ecdd",
        tertiary: "#345b63",
        secondary: "#152d35",
        primary: "#112031",
        Dtint: "#2c3333",
        Dtertiary: "#395B64",
        Dsecondary: "#a5c9ca",
        Dprimary: "#e7f6f2",
      },
    },
    fontFamily: {
      sans: ["Playfair Display", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
