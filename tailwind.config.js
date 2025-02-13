/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Přepínání dark mode podle atributu
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      },
      colors: {
        default: {
          50: "var(--default-50)",
          100: "var(--default-100)",
          200: "var(--default-200)",
          300: "var(--default-300)",
          400: "var(--default-400)",
          500: "var(--default-500)",
          600: "var(--default-600)",
          700: "var(--default-700)",
          800: "var(--default-800)",
          900: "var(--default-900)",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "rounded-xs",
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-none",
    "rounded-full",
  ],
};
