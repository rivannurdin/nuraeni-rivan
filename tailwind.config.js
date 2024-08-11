/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    // colors: {
    //   'black': '#000',
    //   'white': '#fff',
    //   'dark': '#1a1a1a',
    //   'light': '#f5f5f5',
    //   'gray': '#bfbfbf',
    //   'accent': '#0ea5e9',
    //   'accent-hover': '#0284c7',
    // }
  },
  plugins: [],
}

