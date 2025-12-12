module.exports = {
  content: ["./view/**/*.{html,js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'frio': 'linear-gradient(to right, #00ffff, #0000ff)',
        'moderada': 'linear-gradient(to right, #ff00ff, #00ff00)',
        'quente': 'linear-gradient(to right, #ff0000, #ffff00)',
      },
      backgroundSize: {
        'size-x': '200% 200%',
      },
      keyframes: {
        frio: { '0%, 100%': { 'background-position': '0% 50%' }, '50%': { 'background-position': '100% 50%' } },
        moderada: { '0%, 100%': { 'background-position': '0% 50%' }, '50%': { 'background-position': '100% 50%' } },
        quente: { '0%, 100%': { 'background-position': '0% 50%' }, '50%': { 'background-position': '100% 50%' } },
      },
      animation: {
        frio: 'frio 3s ease-in-out infinite',
        moderada: 'moderada 3s ease-in-out infinite',
        quente: 'quente 3s ease-in-out infinite',
      },
    },
  },
  safelist: [
    'bg-frio', 'bg-moderada', 'bg-quente',
    'animate-frio', 'animate-moderada', 'animate-quente',
    'bg-size-x'
  ],
  plugins: [],
}