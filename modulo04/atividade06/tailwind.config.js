/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#E50914",
        "input-text": "#8C8C8C",
        "input-background": "#333333",
        "blue-link": "rgb(0, 128, 255)",
      },
    },
    fontFamily: {
      sans: [
        "Netflix Sans",
        "Helvetica Neue",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};

// font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",

// font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
//     monospace;
