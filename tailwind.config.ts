import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadein: "fadein 0.4s ease-in-out",
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 } as Record<string, any>,
          '100%': { opacity: 1 } as Record<string, any>,
        }
      }
    },
  },
  plugins: [],
};

export default config;
