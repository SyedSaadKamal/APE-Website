import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Extended brand colors
        navy: {
          900: "hsl(var(--navy-900))",
          800: "hsl(var(--navy-800))",
          700: "hsl(var(--navy-700))",
          600: "hsl(var(--navy-600))",
          500: "hsl(var(--navy-500))",
        },
        maroon: {
          700: "hsl(var(--maroon-700))",
          600: "hsl(var(--maroon-600))",
          500: "hsl(var(--maroon-500))",
          400: "hsl(var(--maroon-400))",
        },
        gold: {
          600: "hsl(var(--gold-600))",
          500: "hsl(var(--gold-500))",
          400: "hsl(var(--gold-400))",
          300: "hsl(var(--gold-300))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 50%, hsl(var(--maroon-700)) 100%)',
        'gradient-navy': 'linear-gradient(180deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)',
        'gradient-card': 'linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
        'gradient-accent': 'linear-gradient(135deg, hsl(var(--gold-500)) 0%, hsl(var(--gold-600)) 100%)',
        'gradient-maroon': 'linear-gradient(135deg, hsl(var(--maroon-600)) 0%, hsl(var(--maroon-700)) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 14px 0 hsl(var(--gold-500) / 0.3)',
        'maroon': '0 4px 14px 0 hsl(var(--maroon-600) / 0.25)',
        'industrial': '0 10px 40px -10px hsl(var(--navy-900) / 0.15)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
