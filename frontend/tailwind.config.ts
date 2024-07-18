import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '8dvh': '8dvh',
      },
      colors: {
        themeBlues: {
          light: '#0afcfe',
          default: '#025597',
          dark: '#030b20',
        },
        themeReds: {
          light: '#ff3844',
          default: '#cb2018',
          dark: '#200303',
        },
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
        'sm': '480px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1440px',  // Extra large devices
        '2xl': '1536px', // 2x Extra large devices
        'xs': '375px',   // Extra small devices
        'xxl': '1800px', // Extra extra large devices
      },
      fontFamily: {
        custom1: ['Functional_Sans', 'sans-serif'],
        custom2: ['Functional_Serif', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
