import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F0F1A",
          light: "#1A1A2E",
          lighter: "#252540",
        },
        gold: {
          DEFAULT: "#D4A843",
          light: "#E8C76A",
          dark: "#B8922E",
        },
        muted: "#A0A0B0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
