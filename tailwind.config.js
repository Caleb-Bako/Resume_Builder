/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'a4-width': '210mm', // A4 width
        'a4-height': '297mm', // A4 height
      },
      maxWidth: {
        'a4': '210mm', // A4 max-width
      },
      maxHeight: {
        'a4': '297mm', // A4 max-height
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['print'], 
    },
  },
}

