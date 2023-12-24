import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      lightGray: "#d6e2f0",
      grayishBlue: "#7b879d",
      darkBlue: "#1f3251",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};
export default config;
