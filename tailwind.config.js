/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        'slide': 'slide 2s linear infinite',
      },
      keyframes: {
        slide: {
          '0%, 100%': {
            'margin-top': '-270px',
          },
          '5%, 33%': {
            'margin-top': '-180px',
          },
          '38%, 66%': {
            'margin-top': '-90px',
          },
          '71%, 99.99%': {
            'margin-top': '0px'
          }
        },
      },
      colors: {
        'primaryFgLight': '#11181C',
        'secondaryFgLight': '#687076',
        'primaryBgLight': '#F8F9FA',
        'secondaryBgLight': '#11181C',
        'primaryFgDark': '#EDEDEDED',
        'secondaryFgDark': '#909090',
        'primaryBgDark': '#181818',
        'secondaryBgDark': '#323232',
        'primaryAccent': '#3FCF8E',
        'secondaryAccent': '#3fcf8e65',
      },
      keyframes: {
        slide: {
          'from': {
            transform: 'translateY(-4px)',
            opacity: 0,
          },
          'to': {
            transform: 'translateY(0)',
            opacity: 1,
          }
        },
      },
      animation: {
        'slide': 'slide 100ms',
        'slidereverse': 'slide 2000ms reverse ease-in',
      }
    }
  },
  plugins: [
  ],
}
