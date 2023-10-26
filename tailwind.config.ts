import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)'
    },
    textColor: {
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      primary: 'rgb(var(--color-text-primary) / <alpha-value>)'
    }
  },
  plugins: []
} satisfies Config
