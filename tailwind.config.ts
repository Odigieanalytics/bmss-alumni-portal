import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 
          950: '#070D1D', 
          900: '#0B1428', 
          850: '#0E1930', 
          800: '#122040', 
          700: '#1B2D52' 
        },
        ivory: {
          DEFAULT: '#F6F1E7',
          70: 'rgba(246, 241, 231, 0.72)',
          50: 'rgba(246, 241, 231, 0.52)',
          30: 'rgba(246, 241, 231, 0.30)',
          10: 'rgba(246, 241, 231, 0.08)'
        },
        gold: { 
          DEFAULT: '#F2C94C', 
          deep: '#C9A227',
          12: 'rgba(242, 201, 76, 0.12)',
          25: 'rgba(242, 201, 76, 0.25)'
        },
        teal: '#2DD4BF',
        green: '#4ADE80',
        red: '#F87171'
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
