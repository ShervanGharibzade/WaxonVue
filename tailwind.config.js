module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    keyframes: {
      wiggle: {
        '0%': { transform: 'translateY(-60px)' },
        '25%': { transform: 'translateY(-15px)' },
        '75%': { transform: 'translateY(-5px)' },
        '100%':{ transform: 'translateY(60px)' }
      }
    },
    screen: {
      mm:'420px'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
