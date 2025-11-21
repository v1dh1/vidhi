import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        "potta": ["Potta One", "system-ui"], 
        "apple": ["Homemade Apple", "cursive"],
        "sofia": ["Princess Sofia", "cursive"],
        "serifDisplay": ["DM Serif Text", "serif"],
        "garamond": ["Cormorant Garamond", "serif"],
        "space": ["Space Grotesk", "sans-serif"],
        custom: ["Gambarino-Regular", "sans-serif"],
      "melodrama": ["Melodrama-Regular", "sans-serif"],

        


      },



      colors: {
        "black-100": "#050505",
        "messageblue": "#1484FE",
        "messagegrey": "#E9E9EB",
        "messageblack": "#212123",
        "messagewhite": "#CAEDFF",
        "white-200": "#FFFEF9",

        "accentpink": "#C89EBB",
        "accenttaupe": "#C4BAAE",
        "babypink": "#FEEEF9",
        "babytaupe": "#EFECE9",
        "golden": "#C9B274",
        "bgtaupe": "#FBF8F4",
        "maroon-100": '#811F1F',
        "background": '#fcf8f7',

        "gra-end": '#6C1919',
        "gra-start": '#FFEBEB',
        "gra-text": '#C59A9A',

      },
      dropShadow: {
        'xl': '0 35px 35px rgba(78,60,87)',
        '2xl': [
            '0 35px 35px rgba(206, 198, 219, 1)',
            '0 45px 65px rgba(206, 198, 219, 1)'
        ]
      }
      
    },
  },
  plugins: [require("daisyui")],
};
export default config;
