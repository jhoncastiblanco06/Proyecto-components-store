/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Asegúrate de que Tailwind revise tus archivos de Angular
  ],
  theme: {
    extend: {
      // Mapeamos tus variables CSS a la configuración de Tailwind
      colors: {
        'background': '#0d0c1d',
        'surface': '#17162a',
        'text': '#e0e0e0',
        'text-dark': '#a0a0a0',
        'primary-cyan': '#61d4b3',
        'secondary-magenta': '#f038ff',
      },
      fontFamily: {
        'primary': ['Orbitron', 'sans-serif'], // --font-primary
        'secondary': ['Rajdhani', 'sans-serif'], // --font-secondary
      },
      // Creamos una utilidad personalizada para el efecto de neón
      textShadow: {
        'primary': '0 0 5px #61d4b3, 0 0 10px #61d4b3, 0 0 20px #61d4b3',
        'secondary': '0 0 5px #f038ff, 0 0 10px #f038ff, 0 0 20px #f038ff',
      },
    },
  },
  plugins: [
    // Plugin para agregar la utilidad text-shadow
    plugin(function({ theme, addUtilities }) {
      const newUtilities = {};
      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: value,
        };
      });
      addUtilities(newUtilities);
    })
  ],
}