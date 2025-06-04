// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // DOUBLE quotes around font name
      },
       keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        jump: 'jump 0.7s ease-in-out',
      },
    },
  },
  plugins: [],
};
