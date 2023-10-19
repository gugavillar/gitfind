/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        appColumns: '400px 1fr',
      },
      colors: {
        app: '#1D2128',
        header: '#2D333B',
        input: '#999999',
        button: '#2D333B',
        profile: '#E5E5E533',
        link: '#539BF5',
      },
    },
  },
  plugins: [],
}
