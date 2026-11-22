/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Noto Kufi Arabic', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F3EDE0',
        },
        beige: {
          100: '#F0E9DC',
          200: '#E5DBC7',
          300: '#D4C5A8',
        },
        olive: {
          50: '#F4F6EE',
          100: '#E6EADB',
          200: '#CBD4B8',
          300: '#A8B58A',
          400: '#7F9260',
          500: '#5F7344',
          600: '#4B5C36',
          700: '#3C492C',
          800: '#2C3620',
          900: '#1E2516',
        },
        charcoal: {
          500: '#4A4A45',
          700: '#2E2E2A',
          800: '#242421',
          900: '#1B1B19',
          950: '#121210',
        },
      },
    },
  },
  plugins: [],
};
