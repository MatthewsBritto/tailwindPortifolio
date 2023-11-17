import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D71F1',
        secondary: '#191919',
        title: '#cbd4d4',
      },
      keyframes: {
        scale: {
          '100%': {
            transform: 'scale-110',
          },
        },
        changePage: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        disapear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        scale: 'scale .5s ease-in',
        changePage: 'changePage .5s ease-in',
        disapear: 'disapear .5s ease-in',
      },
    },
  },

  plugins: [],
}
export default config
