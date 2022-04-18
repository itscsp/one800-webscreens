module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'green-900': '#18927F',
      'green-400':  '#B1DAD3',
      'green-100': '#F3FCF0',
      'white': '#ffffff',
      'black':'#000000',
      'grey-300':"#F5F5F5",
      'grey-200':"#797979",
      "blue-900" : "#152F52",
      "red":"#ff0000"
    },
    screens: {
      'sm': '450px',
      // => @media (min-width: 450px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
