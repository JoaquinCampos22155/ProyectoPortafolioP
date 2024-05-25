import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors:{
        secondary: "#A4DE02",
        darkbg: "#1E5631", 
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(21.90deg, rgba(30,86,49,0.2)-5.91%, rgba(30,86,49,1) 111.58% )"
        },
    },
  },
  plugins: [],
};
export default config;
