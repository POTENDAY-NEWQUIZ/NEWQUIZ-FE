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
        lavender: "#724AF7",
        "point-lavender": "#6838CE",
        "light-lavender": "#927CFF",
        "home-lavender": "#F5F2FF",
        "mist-lavender": "#FBFAFF",
      },
      boxShadow: {
        light: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
        default: "0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
        button: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
        modal: "0px 3.81px 9.524px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(251, 250, 255, 0.8) 0%, rgba(220, 212, 255, 0.5) 50%, rgba(135, 110, 255, 0.3) 100%)",
      },
      screens: {
        xs: { max: "368px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
