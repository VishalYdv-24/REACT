/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(255, 246, 179)',
        taskColor: 'rgb(106, 128, 185)',
        addButton: 'rgb(21, 94, 149)',
        hoverColor: 'rgb(246, 199, 148)',
      },
    },
  },
  plugins: [],
}