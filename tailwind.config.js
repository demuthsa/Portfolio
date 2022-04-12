module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "-5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#abbaab',
          400: '#f77',
        },
        blue: {
          DEFAULT: '#83a4d4',
          400: '#2c5364',
        },
        // green: {
        //   DEFAULT: "#00f260",
        // },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
    variants: {
      extend: {
        boxShadow: ["dark"],
      },
    },
  },
  plugins: [],
};
