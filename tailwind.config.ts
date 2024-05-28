/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      // padding: "16px",
      screens: {
        xs: "375px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
      },
    },
    extend: {
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        "header-height": "var(--header-height)",
        "mobile-body-height": "calc(100dvh - var(--header-height))",
        "desktop-body-height": "calc(100vh - var(--header-height))",
      },
      minHeight: {
        "desktop-body-min-height": "calc(100vh - var(--header-height))",
      },
      backgroundImage: {
        "header-image":
          "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8)), url('/images/header-banner.jpg')",
        "button-gradient":
          "linear-gradient(90deg, #eb5547, #d84092 26.56%, #793cdc 75%, #3a60e5)",
      },
      backgroundColor: {
        "transparent-bg": "hsla(0, 0%, 100%, 0.15)",
      },
      transitionProperty: {
        "custom-transform": "transform",
      },
      transitionDuration: {
        "200": "200ms",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
      willChange: {
        transform: "transform",
      },
      boxShadow: {
        "inset-custom": "inset 0 1px 0 hsla(0,0%,100%,.08)",
      },
      borderColor: {
        "custom-gray": "#e8e8e8",
      },
    },
  },
  variants: {
    extend: {
      willChange: ["hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
