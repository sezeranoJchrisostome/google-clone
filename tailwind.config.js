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
          "500": "#1558d6",
          "800": "#4285f4",
          "900": "#1a0dab",
        }
      },
      fontSize: {
        "vsm": "0.875rem",
        "2":"0.75rem",
        "2":"0.75rem"
      },
      fontFamily: {
        "default": "Roboto,Helvetica Neue,Arial,sans-serif"
      },
      width: {
        "vsm":"1.5rem",
        "106": "10rem",
        "94":"5.8rem",
        "560": "35rem",
        "85%": "85%"
      },
      height: {
        "vsm":"1.5rem",
        "33":"2.08rem",
        "56": "3.5rem",
        "94":"5.8rem"
      },
      padding:{
        "14": "0.875rem"
      },
      fontFamily: {
        "roboto": "'Roboto',Helvetica Neue,Arial,sans-serif"
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

      'xs': {'max': '550px'},
      // => @media (max-width: 639px) { ... }

    }
  },
  plugins: [],
}
