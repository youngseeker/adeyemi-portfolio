import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'navy-light': '#112240',
        'navy-lighter': '#233554',
        slate: '#8892b0',
        white: '#e6f1ff',
        cyan: '#64ffda',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        main: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
