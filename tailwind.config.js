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
      },
      colors: {
        primary: '#1a202c',    // Dark background
        secondary: '#2d3748',  // Darker background
        accent: '#4a5568',     // Accent color
        highlight: '#ed64a6',  // Bright accent for buttons/links
        neutral: '#e2e8f0',    // Light text/background
        danger: '#e53e3e',     // Error color
      },
    },
  },
  plugins: [],
}
