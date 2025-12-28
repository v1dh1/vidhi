import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			'potta': [
  				'Potta One',
  				'system-ui'
  			],
  			'apple': [
  				'Homemade Apple',
  				'cursive'
  			],
  			'sofia': [
  				'Princess Sofia',
  				'cursive'
  			],
  			'serifDisplay': [
  				'DM Serif Text',
  				'serif'
  			],
  			'garamond': [
  				'Cormorant Garamond',
  				'serif'
  			],
  			'space': [
  				'Space Grotesk',
  				'sans-serif'
  			],
  			custom: [
  				'Gambarino-Regular',
  				'sans-serif'
  			],
  			'melodrama': [
  				'Melodrama-Regular',
  				'sans-serif'
  			]
  		},
  		colors: {
  			'black-100': '#050505',
  			'messageblue': '#1484FE',
  			'messagegrey': '#E9E9EB',
  			'messageblack': '#212123',
  			'messagewhite': '#CAEDFF',
  			'white-200': '#FFFEF9',
  			'accentpink': '#C89EBB',
  			'accenttaupe': '#C4BAAE',
  			'babypink': '#FEEEF9',
  			'babytaupe': '#EFECE9',
  			'golden': '#C9B274',
  			'bgtaupe': '#FBF8F4',
  			'maroon-100': '#811F1F',
  			'background': '#fcf8f7',
  			'gra-end': '#6C1919',
  			'gra-start': '#FFEBEB',
  			'gra-text': '#C59A9A',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		dropShadow: {
  			xl: '0 35px 35px rgba(78,60,87)',
  			'2xl': [
  				'0 35px 35px rgba(206, 198, 219, 1)',
  				'0 45px 65px rgba(206, 198, 219, 1)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

		fontS: {
			headingToSub: '32px',
		}
  	}
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
export default config;
