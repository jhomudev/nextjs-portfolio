import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xl": "1160px",
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        titillium: ["var(--font-titillium)"],
      },
      colors: {
        main_color: '#14A297',
        second_color: '#719EBD',
        bg: {
          light: {
            normal: '#ffffff',
            soft: '#f5f5f5',
          },
          dark: {
            normal: '#181818',
            soft: '#1b1b1b',
          },
        },
        text: {
          light: {
            normal: '#ffffff',
            soft: '#b1b1b1',
          },
          dark: {
            normal: '#000000',
            soft: '#1b1b1b',
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config