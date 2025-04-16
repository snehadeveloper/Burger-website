 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm:'480px',
      md: '768px',
      lg: '1024px',
  
    },
    extend: {
      colors: {
        primarycolor: '#010a5e',
        primarycolorlight: '#010d78',
        secondarycolor:'#FFCC00',
        paragraphcolor: '#c0c0c0',
        whitecolor: '#fff',
        blackcolor: '#000',
        greencolor: '#007936',
        redcolor: '#cc3433',
        darkcolor: '#000',
        darkcolorlight: '#171717',

      }
    },
    container: {
      center: true,
    padding:{
      DEFAULT: "1rem",
      sm: "1.5rem"
    }
  },
  fontFamily: {
    oswald: ['oswald','sans-serif'],
    dmsans: [' DM sans', 'sans-serif']
  }
  },
  plugins: [],
}