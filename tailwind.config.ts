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
        primary: '#3f3d56',
        secondary: '#6f848c',
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
