import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'phoenix-blue': '#1457A6',
        'phoenix-blue-deep': '#0F4684',
        'slate-ink': '#18242F',
        'cool-gray': '#6C6F78',
        'chrome-100': '#E6F0FA',
        'chrome-300': '#C0C8D2',
        'chrome-500': '#9AA4B0',
        'sky-glass': '#C8E2F8',
        ember: '#C45A1E',
        bone: '#FBFCFE',
        success: '#1E8E5A',
        error: '#C0392B',
      },
      fontFamily: {
        display: ['var(--font-saira)', 'sans-serif'],
        body: ['var(--font-hanken)', 'sans-serif'],
        mono: ['var(--font-ibm)', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        pill: '9999px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(24,36,47,0.06)',
        DEFAULT: '0 4px 16px rgba(24,36,47,0.08)',
        md: '0 8px 30px rgba(24,36,47,0.10)',
        lg: '0 16px 48px rgba(24,36,47,0.14)',
      },
      maxWidth: {
        site: '1180px',
        narrow: '820px',
        wide: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
