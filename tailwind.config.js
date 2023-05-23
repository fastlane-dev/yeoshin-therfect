const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mhmw2: { raw: "(max-height: 665px) and (max-width: 480px)" },
        mhmw1: { raw: "(max-height: 665px) and (max-width: 460px)" },
        mshs: { raw: "(max-height: 665px)" },
        mshm: { raw: "(min-height: 750px) and (min-width: 480px)" },
        mmhd: { raw: "(min-height: 750px) and (min-width: 768px)" },
        msm: { raw: "(min-width: 480px)" },
        mmd: { raw: "(min-width: 768px)" },
        sm: { raw: "(min-width: 800px)" },
        md: { raw: "(min-width: 992px)" },
        lg: { raw: "(min-width: 1200px)" },
        xlg: { raw: "(min-width: 1400px)" },
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        pretendard: ["var(--font-pretendard)"],
        faktumTest: ["var(--font-faktumTest)"],
        futura: ["var(--font-futura)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-orange": "#f68e0f",
      },
      animation: {
        dotAppearFirst: "appear 0.6s forwards 0.6s ease-in-out",
        dotAppearSecond: "appear 0.6s forwards 0.9s ease-in-out",
        dotAppearThird: "appear 0.6s forwards 1.2s ease-in-out",
        smoothUpFirst: "smoothUp 0.6s forwards 0.3s ease-in-out",
        smoothUpSecond: "smoothUp 0.6s forwards 0.5s ease-in-out",
        smoothUpThird: "smoothUp 0.6s forwards 0.8s ease-in-out",
        colorChange: "colorChange 0.6s forwards ease-in-out",

        mobileMainLogoAppear: "smoothUp 0.8s forwards 1.5s ease-in-out",
        mobileMainLogoDisappear:
          "smoothDisappear 0.8s forwards 1.3s ease-in-out",
      },
      keyframes: {
        moveFromDownToUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(70%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },

        smoothUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        smoothDisappear: {
          "0%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
        },

        appear: {
          "0%": {
            opacity: 0,
          },

          "100%": {
            opacity: 1,
          },
        },
        colorChange: {
          "0%": {
            opacity: 0,
            backgroundColor: "#FF9900",
          },

          "100%": {
            opacity: 1,
            backgroundColor: "#CBF9FF",
          },
        },
      },
    },
  },
  plugins: [],
};
