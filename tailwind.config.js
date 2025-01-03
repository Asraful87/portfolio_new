/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          100: "#fafafa",
          200: "#232038",
          300: "#0b0b0b",
          400: "rgba(0, 0, 0, 0.2)",
          500: "rgba(0, 0, 0, 0.6)",
        },
        blue: {
          500: "#3461FF",
        },
        mediumslateblue: {
          100: "#3561ff",
          200: "#3461ff",
        },
        darkgray: "#aaa",
        yellow: "#e0ff22",
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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      spacing: {},
      fontFamily: {
        "general-sans-variable": "General Sans Variable",
        helvetica: "Helvetica",
        "bagel-fat-one": "Bagel Fat One",
      },
      borderRadius: {
        "11xs-3": "1.3px",
        "50xl": "69px",
        "51xl": "70px",
        "18xl": "37px",
        "37xl": "56px",
        "13xl": "32px",
        "45xl": "64px",
        "21xl": "40px",
        "100xl-5": "119.5px",
        "12xs": "1px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontSize: {
      sm: "14px",
      "17xl-6": "36.6px",
      "5xl": "24px",
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "37xl": "56px",
      "45xl": "64px",
      lg: "18px",
      "13xl": "32px",
      "77xl": "96px",
      "9xl-2": "28.2px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-animate")],
};
