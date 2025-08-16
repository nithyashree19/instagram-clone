/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping': 'ping 0.6s cubic-bezier(0, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
