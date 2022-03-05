module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black': '#262B3C',
        'lightGray': '#F3F3F3',
        'grayStrong': '#D3D6DA',
        'grayGrid': 'rgba(147, 155, 159, 0.3)',
        'darkGrayStrong': '#565F7E',
        'darkLighGray': 'rgba(218, 220, 224, 0.03)',
        'darkGrayGrid': 'rgba(147, 155, 159, 0.2)',
      },
      maxWidth: {
        '1/2': '50%',
        'keyWidth': '45px',
      },
      typography: (theme) => ({
        dark: {
          css: [
            {
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              p: {
                color: theme('colors.white'),
              },
              svg: {
                color: theme('colors.white'),
              }
            }
          ]
        }
      })
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
