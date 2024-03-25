/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "clay-card":
          "35px 35px 70px hsl(302deg 25% 50%), inset -10px -10px 20px hsl(302deg 25% 50% / 70%), inset 0 16px 32px hsl(302deg 25% 95%)",
        "clay-btn":
          "16px 16px 32px 0 hsl(277deg 50% 65% / 50%), inset -16px -16px 32px 0 hsl(277deg 50% 65%), inset 8px 8px 16px 0 hsl(227deg 65% 75% / 45%)",
      },

      colors: {
        "black-100": "#2B2C35",
        "primary-pink": {
          DEFAULT: "#FF66CC",
          100: "#f5e4e7",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        "hero-bg": "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
