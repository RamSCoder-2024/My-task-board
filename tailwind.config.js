/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        progress: "#F5D565",
        stprogress: "#E9A23B",
        completed: "#A0ECB1",
        stcompleted: "#32D657",
        delete: "#F7D4D3",
        stdelete: "#DD524C",
        defaultt: "#E3E8EF",
        bgicon: "#F8FAFC",
        addTask: '#F5E8D5',
        addTask2: '#f9daad',
        selectColor: '#3662E3',
        doneColor: '#3662E3',
        deleteColor: '#97A3B6',
        bgblack: '#3e3e3e80',
      },
    },
    screens: {
      vm: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
