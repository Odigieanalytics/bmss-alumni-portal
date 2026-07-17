import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#070D1D', 900: '#0B1428', 850: '#0E1930', 800: '#122040', 700: '#1B2D52' },
        ivory: '#F6F1E7',
        gold: { DEFAULT: '#F2C94C', deep: '#C9A227' },
        teal: '#2DD4BF'
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Hanken Grotesk', 'system-ui', 'sans-serif']
      },
      borderRadius: { xl2: '22px' }
    }
  },
  plugins: []
};
export default config;
