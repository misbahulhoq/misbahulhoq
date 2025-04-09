import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-200": "#FFF4EA",
          primary: "#FF6B00",
          "primary-content": "#fff",
          secondary: "#6B00FF",
          //"secondary-content": "#fff",
          accent: "#0094FF",
        },
        dim: {
          ...require("daisyui/src/theming/themes")["dim"],
          primary: "#B26DEB",
          "primary-content": "#fff",
          secondary: "#EB6DE5",
          "secondary-content": "#fff",
          accent: "#A6EB6D",
          // "base-100": "#1e2939",
          "base-100": "#17152f",
          "base-200": "oklch(21% 0.034 264.665)",
          "base-300": "oklch(13% 0.028 261.692)",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
