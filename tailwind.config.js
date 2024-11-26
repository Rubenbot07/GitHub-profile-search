/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#20293A',
        'stats': '#111729',
        'text': '#CDD5E0',
        'text-secondary': '#4A5567',
        'text-tertiary': '#364153',
        'gradient-left': '#20293A',
        'gradient-right': '#1D1B48',
      },
      backgroundImage: {
        'hero-image': "url('https://i.postimg.cc/0jWBWxN3/hero-image-github-profile.png')",
        'custom-gradient': 'linear-gradient(90deg, #20293A, #1D1B48)',
      }
    },
  },
  plugins: [],
}
