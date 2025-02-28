import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#121212",
        lavender: "#552BAF",
        "point-lavender": "#6838CE",
        "home-lavender": "#F5F2FF",
        "mist-lavender": "#FBFAFF",
      },
      boxShadow: {
        default: "0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
        button: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
        modal: "0px 3.81px 9.524px 0px rgba(0, 0, 0, 0.10)",
      },
      screens: {
        xs: { max: "368px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
