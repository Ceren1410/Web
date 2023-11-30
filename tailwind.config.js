/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        96: '22rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        96: '26rem',
        128: '30rem',
      },
      height: {
        96: '26rem',
        128: '30rem',
        'screen/2': '90vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}