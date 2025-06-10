import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
        // Supabase-inspired custom color palette
        supabase: {
          green: {
            DEFAULT: "hsl(154.9deg 100% 19.22%)", // Primary button color
            light: "hsl(153.1deg 60.17% 52.75%)", // Text green
            dark: "hsl(154.9deg 100% 15%)", // Darker variant
            hover: "hsl(154.9deg 100% 22%)", // Hover state
          },
          slate: {
            darkest: "hsl(0deg 0% 7.06%)", // Main background
            darker: "hsl(0deg 0% 9.02%)", // Component background
            dark: "hsl(0deg 0% 14.12%)", // Secondary button
            medium: "hsl(0deg 0% 17.25%)", // Border color
            light: "hsl(0deg 0% 53.73%)", // Gray text
            lightest: "hsl(0deg 0% 98.04%)", // White text
          },
        },
        "bg-button": "hsl(var(--bg-button))",
        "bg-main": "hsl(var(--bg-main))",
        "bg-component": "hsl(var(--bg-component))",
        "text-putih": "hsl(var(--text-putih))",
        "text-hijau": "hsl(var(--text-hijau))",
        "bg-button-secound": "hsl(var(--bg-button-secound))",
        "text-abu": "hsl(var(--text-abu))",
        "border-border": "hsl(var(--border-border))",
      },
      borderRadius: {
        lg: "20px",
        md: "10px",
        sm: "5px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
