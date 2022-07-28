/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./components/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hero': "url('https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT5YVqUhcNmtvEspaHJIdQ-IlJrQJh-N2Inf7IUREVdb_P9aX6wmmrLyYTRHNdYlceRU61rYR5qFjiaBPFGJ3o')",
      },
      colors: {
        blue: {
          500: '#014DAB',
        },
        yellow: {
          500: '#BDDD1A',
        },
        gray: {
          500: '#121214',
        }
      }
    },
  },
  plugins: [],
}
