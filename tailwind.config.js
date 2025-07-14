/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(110vh)' },
        },
      },
      animation: {
        fall: 'fall linear infinite',
      },
    },
  },
  plugins: [],
}

