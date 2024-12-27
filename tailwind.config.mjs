/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#f9e0ae",
        primaryButton:'#c24914',
        muted:"rgba(0, 0, 0, 0.46)",
        secondaryButton:'#682c0e'
      },
    },
  },
  plugins: [],
};
