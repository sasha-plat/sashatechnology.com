import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Tactical military deep-tech palette (post 2026-05-13 redesign)
        // Reference: Anduril (anduril.com) + Shield AI (shield.ai)
        bg: {
          primary: "#0A0A0F",     // near-black, navy tint — full bleed bg
          secondary: "#12121A",   // card surface
          tertiary: "#1A1A26",    // raised card / hover
          quaternary: "#22222F",  // input / inner card
        },
        border: {
          DEFAULT: "#2A2A38",
          subtle: "#1F1F2A",
          accent: "#3D3D52",
        },
        text: {
          primary: "#F0F0F4",
          secondary: "#C8C8D2",
          muted: "#8B8B96",
          subtle: "#5C5C68",
        },
        accent: {
          amber: "#FFA50A",        // tactical amber — primary CTA / highlight
          "amber-glow": "#FFB833",
          cyan: "#00D4FF",         // data/HUD signal
          "cyan-glow": "#33DCFF",
        },
        signal: {
          success: "#00CC66",
          warning: "#FFB800",
          danger:  "#FF3B30",
          info:    "#5CADFF",
        },
        // Legacy aliases for current pages (will deprecate)
        navy: {
          DEFAULT: "#0A0A0F",
          light: "#12121A",
          lighter: "#1A1A26",
        },
        gold: {
          DEFAULT: "#FFA50A",
          light: "#FFB833",
          dark: "#CC7F00",
        },
        muted: "#8B8B96",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        display: ["var(--font-geist)", "Geist", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scan-line": "scanLine 8s linear infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn:    { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp:   { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        scanLine:  { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100vh)" } },
        pulseGlow: { "0%,100%": { boxShadow: "0 0 12px rgba(255,165,10,0.3)" }, "50%": { boxShadow: "0 0 24px rgba(255,165,10,0.6)" } },
        marquee:   { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        shimmer:   { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      backgroundImage: {
        "grid-tactical": "linear-gradient(rgba(255,165,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,165,10,0.04) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(ellipse at top, rgba(255,165,10,0.15), transparent 60%)",
        "scan-grid": "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.03) 2px, rgba(0,212,255,0.03) 3px)",
      },
      backgroundSize: {
        "grid-sm": "32px 32px",
        "grid-md": "64px 64px",
      },
      boxShadow: {
        "tactical": "0 0 0 1px rgba(255,165,10,0.2), 0 4px 24px -8px rgba(255,165,10,0.3)",
        "data": "0 0 0 1px rgba(0,212,255,0.2), 0 4px 24px -8px rgba(0,212,255,0.3)",
        "card": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px -16px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
