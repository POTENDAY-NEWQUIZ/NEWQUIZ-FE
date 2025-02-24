import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "void-black": "#262626",
        "rasin-black": "#212121",
        "light-gray": "#D8D9DD",
        "bright-lavender": "#B287FD",
        "mist-lavender": "#EAE1FF",
        "lime-green": "#B2F142",
      },
      boxShadow: {
        modal: "0px 3.81px 9.524px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
