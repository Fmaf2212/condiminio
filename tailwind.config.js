/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primaryFontBold: ['MontserratBold', 'sans'],
        primaryFontSemiBold: ['MontserratSemiBold', 'sans'],
        primaryFontMedium: ['MontserratMedium', 'sans'],
        secondaryFont: ['Fontspring', 'sans'],
      },
      colors: {
        mediumPrimary: '#F4AF14',
        mediumText: '#4A4A49',
      },
      maxWidth: {
        idealMaximumWidth: '1300px'
      },
      textShadow: {
        custom: '1px 1px 5px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}
