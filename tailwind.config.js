/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['JetBrains Mono', 'sans-serif']
    },
    extend: {
      screens: {
        "xl": "1200px",
        "2xl": "1440px",
        "2k": "2560px",
        "4k": "3840px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#1A1443"
        },
        secondary: {
          DEFAULT: "#16F2B3"
        },
        linkedin:{
          DEFAULT: "#0077B5"
        }
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss", require('tailwind-scrollbar')],
}
