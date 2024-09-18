/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        "theme-gray":{
          950:"#010312",
          700:"#1b1d2a",
          500:"#282a37",
        },
        "app-white":{
          700:"#ffffffde",
          500:"#ffffff99",
        },
        "theme-purple":{
          950:"#8231d3",
          700:"#8231d31a",
        },
      },
      fontFamily:{
        jost:["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
}