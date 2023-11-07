import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, 19rem)'
      },
      animation: {
        'small-bounce': 'smallBounce 0.2s ease-out'
      },
      keyframes: {
        smallBounce: {
          '100%': { transform: 'none' },
          '50%': { transform: 'translateY(-1%)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
