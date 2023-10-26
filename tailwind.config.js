/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

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
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {}
      const colors = theme('colors')
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500']
          const color2 = colors[color]['700']
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 10px ${color2}`,
          }
        }
      }
      addUtilities(neonUtilities)
    }),
  ],
}
