module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        switchSpiner: 'linear-gradient(180deg, #FFC123 0%, #F8832E 100%)'
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
