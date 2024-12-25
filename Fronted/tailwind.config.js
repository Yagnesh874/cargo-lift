/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     "custom-blue": "#7d2ae8",
    //     "sign-up": "#333",
    //   },
    // },
  },

  plugins: [require("flowbite/plugin")],
};
