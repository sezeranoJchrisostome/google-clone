/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-color": "#202124",
        "secondary": {
          "50":"#f2f2f2",
          "100": "#f8f9fa",
          "200": "#dfe1e5",
          "500": "#70757a",
          "600":"#2e2e31",
          "800": "#3c4043",
          "900": "#171717",
        },
        "primary": {
          "50":"#f2f2f2",
          "100": "#f8f9fa",
          "200": "#dfe1e5",
          "500": "#70757a",
          "800": "#3c4043",
          "900": "#1a0dab",
        }
      },
      fontSize: {
        "vsm": "0.875rem"
      },
      fontFamily: {
        "default": "Roboto,Helvetica Neue,Arial,sans-serif"
      },
      width: {
        "vsm":"1.5rem"
      },
      height: {
        "vsm":"1.5rem"
      }
    },
  },
  plugins: [],
}
