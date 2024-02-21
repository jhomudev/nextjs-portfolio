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
        nunito: ["var(--font-nunito)"],
        dosis: ["var(--font-dosis)"],
      },
      colors: {
        main_color: '#f16432',
        bg: {
          light: {
            normal: '#ffffff',
            soft: '#f5f5f5',
          },
          dark: {
            normal: '#121212',
            soft: '#1b1b1b',
          },
        },
        text: {
          light: {
            normal: '#ffffff',
            soft: '#f5f5f5',
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