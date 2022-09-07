/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        redHat: ['Red Hat Display', 'sans-serif']
      },
      colors: {
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
        brightBlueShadow: 'hsl(245, 75%, 88%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)'
      },
      backgroundImage: {
        mobile: "url('./src/assets/images/pattern-background-mobile.svg')",
        desktop: "url('./src/assets/images/pattern-background-desktop.svg')"
      }
    }
  },
  plugins: []
}
