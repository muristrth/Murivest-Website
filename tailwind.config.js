/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '!./src/**/*.xml',
    '!./public/**/*.xml'
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1: Navy & Gold
        navy: {
          50: '#f0f4ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc',
          400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca',
          800: '#3730a3', 900: '#1e1b4b', 950: '#0f0c29',
        },
        gold: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
          800: '#92400e', 900: '#78350f', 950: '#451a03',
        },
        // Theme 2: Forest & Brass
        'forest': '#1B4332',
        'forest-light': '#2D5A45',
        'cream': '#FAF9F6',
        'cream-dark': '#F5F4F0',
        'brass': '#B8956B',
        'brass-light': '#C9A87C',
        'charcoal': '#2C2C2C',
        'stone': '#8B8680',
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'elegant': ['Inter', 'sans-serif'],
        'times': ['Times New Roman', 'serif'],
        // Merged sans and serif definitions
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['var(--font-montserrat)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.3em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.8)' },
        }
      }
    },
  },
  plugins: [],
};