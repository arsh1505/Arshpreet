/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // poppins: ["Caveat", "cursive"],
        pop:["Jacques Francois Shadow", "serif"]

      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
      
    },
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         'slide-up': {
//           '0%': { transform: 'translateY(10px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//       },
//       animation: {
//         'slide-up': 'slide-up 0.5s ease-out',
//       },
//     },
//   },
//   plugins: [],
// };


// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         'slide-up': {
//           '0%': { transform: 'translateY(10px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//       },
//       animation: {
//         'slide-up': 'slide-up 0.5s ease-out',
//       },
//     },
//   },
//   plugins: [],
// };

