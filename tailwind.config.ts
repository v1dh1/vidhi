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
        "potta": ["Potta One", "system-ui"], 
        "apple": ["Homemade Apple", "cursive"],
        "sofia": ["Princess Sofia", "cursive"],
        "serifDisplay": ["DM Serif Text", "serif"],
        "garamond": ["Cormorant Garamond", "serif"]

      },

      colors: {
        "purple-100": "#CEC6DB",
        "black-100": "#050505",
        "purple-200": "#4E3C57",
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
