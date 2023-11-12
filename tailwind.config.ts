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
      },
      animation: {
        scale: 'scale .5s ease-in',
      },
    },
  },
  plugins: [],
}
export default config
