/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#ffffff',
        bgSecondary: '#f8f9fa',
        bgCard: '#ffffff',
        bgGlass: 'rgba(255, 255, 255, 0.8)',
        accentPrimary: '#5A4BDA', // PW Purple
        accentSecondary: '#f0f0ff', // Light purple background
        accentWarm: '#ffc107', // Yellow accent for badges/highlights
        textPrimary: '#1f2937', // Dark gray for main text
        textSecondary: '#4b5563', // Medium gray for secondary text
        textMuted: '#9ca3af', // Light gray
        borderColor: '#e5e7eb', // Subtle border
        borderHover: '#a5b4fc', // Light purple hover border
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #5A4BDA, #818cf8)',
        'hero-gradient': 'linear-gradient(90deg, #6c1b1b, #8a2424)', // Maroon gradient for hero banner
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease backwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
