module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a4d4d',     // Deep teal from the design
          DEFAULT: '#2d6a6f',  // Main teal color
          light: '#3d7a7f',    // Lighter teal
        },
        secondary: {
          dark: '#0f3333',     // Very dark teal for depth
          DEFAULT: '#1a4d4d',  // Dark teal background
          light: '#2d6a6f',    // Medium teal
        },
        accent: {
          DEFAULT: '#4ade80',  // Bright green accent
          light: '#6ee7b7',    // Light green
          dark: '#22c55e',     // Dark green
        },
        gradient: {
          from: '#0f3333',     // Dark teal gradient start
          via: '#1a4d4d',      // Medium teal gradient middle
          to: '#2d6a6f',       // Light teal gradient end
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}