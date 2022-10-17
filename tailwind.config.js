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
          "50":"",
          "100": "",
          "200": "",
          "500": "",
          "800": "#4285f4",
          "900": "#1a0dab",
        }
      },
      fontSize: {
        "vsm": "0.875rem"
      },
      width: {
        "vsm":"1.5rem"
      },
      height: {
        "vsm":"1.5rem"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      
      'xs': {'max': '380px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
