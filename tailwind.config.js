/** @type {import('tailwindcss').Config} */
module.exports = {
   important: true,
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],

   theme: {
      extend: {},
   },
   daisyui: {
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],
               primary: '#4D4D4D',
               'info-content': '#606060',
               '--glass-blur': '20px',
            },
         },
      ],
   },
   plugins: [require('daisyui')],
}
