import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        bg: {
          0: "#05080f",
          1: "#0a0f1e",
          2: "#101729",
          3: "#182238",
        },
        ink: {
          DEFAULT: "#e6edf7",
          dim: "#9ba6bd",
          mute: "#6b7693",
        },
        brand: {
          DEFAULT: "#55CCE1",
          light: "#84EEFF",
          deep: "#2bb1c7",
        },
        accent: {
          DEFAULT: "#6c83ff",
          warm: "#ffb775",
          pink: "#ff7ab8",
          green: "#4ade80",
        },
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(85, 204, 225, 0.25)",
        },
        surface: {
          DEFAULT: "rgba(16, 23, 41, 0.7)",
          strong: "rgba(20, 28, 50, 0.9)",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Helvetica Neue"', "Helvetica", "Arial", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "14px",
        lg: "22px",
        xl: "28px",
      },
      boxShadow: {
        soft: "0 4px 14px rgba(2, 6, 23, 0.35)",
        base: "0 18px 40px rgba(2, 6, 23, 0.45)",
        glow: "0 0 0 1px rgba(85, 204, 225, 0.18), 0 24px 60px rgba(85, 204, 225, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float 7s ease-in-out infinite reverse",
        reveal: "reveal 0.7s ease both",
      },
      backgroundImage: {
        "brand-grad": "linear-gradient(135deg, #55CCE1 0%, #2bb1c7 100%)",
        "head-grad": "linear-gradient(120deg, #fff 0%, #84EEFF 50%, #55CCE1 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
