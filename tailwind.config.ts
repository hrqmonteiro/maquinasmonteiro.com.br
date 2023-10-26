import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3C96'
      },
      textColor: {
        primary: '#FFFFFF'
      }
    }
  },
  plugins: []
} satisfies Config
