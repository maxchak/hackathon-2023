/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      red: '#da5155',
      grey: '#747474',
      lightGrey: '#f5f5f5',
      blue: '#213a8b',
    },
    fontFamily: {
      header: 'Montserrat, sans-serif',
      body: 'Roboto, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
