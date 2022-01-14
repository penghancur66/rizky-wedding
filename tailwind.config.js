const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito : ['nunito', 'sans-serif'],
        aladin: ['Aladin', 'cursive'],
        rancho: ['Rancho', 'cursive'],
        mclaren: ['McLaren', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        //sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        nude: '#866548',
        pinkrose: '#F4DFBC',
        formulir: '#0A0A0A',
        latar: '#F4EDE4',
        company: '#C7A27D',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
