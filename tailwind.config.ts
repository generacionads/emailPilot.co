import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      fontSize: {
      
      sm: ['var(--text-sm)', { lineHeight: '1.4' }], 
      base: ['var(--text-base)', { lineHeight: '1.6' }], 
      lg: ['var(--text-lg)', { lineHeight: '1.1' }], 
      xl: ['var(--text-xl)', { lineHeight: '1.3' }], 
      '2xl': ['var(--text-2xl)', { lineHeight: '1.15' }], 
      '3xl': ['var(--text-3xl)', { lineHeight: '1.1' }],
      },
      fontFamily: {
        sans: ['var(--font-raleway)'],
        display: ['var(--font-fractul)'], 
      },
    },
  },
  plugins: [],
}
export default config