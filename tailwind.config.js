/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0,.7,.45,1)",
        "out-expo": "cubic-bezier(.6,-0.01,1,.38)",
      },
    },
  },
  plugins: [],
};
