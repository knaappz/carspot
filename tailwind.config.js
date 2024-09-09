/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'footer-bg': '#282828',
        'button-bg': '#0147FF',
        'black': '#000',
        'white': '#ffffff',
        'heading-txt': '#1D1D1B',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        babas: ['Babas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

