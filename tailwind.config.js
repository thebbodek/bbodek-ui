/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#101828",
        "gray-08": "#1C273E",
        "gray-07": "#333D52",
        "gray-06": "#7C8497",
        "gray-05": "#A9B2C7",
        "gray-04": "#C6CEDE",
        "gray-03": "#DBE1ED",
        "gray-02": "#EAEEF6",
        "gray-01": "#EFF2F9",
        "gray-00": "#F8FAFF",
        "primary-06": "#002F75",
        "primary-05": "#003C96",
        "primary-04": "#004DC0",
        "primary-03": "#206FE4",
        "primary-02": "#3D89FA",
        "primary-01": "#9DC5FF",
        "primary-00": "#DEEBFF",
        "error": "#FF5260",
        "warning": "#FFBB6A",
        "success": "#79D4B4"
      }
    },
  },
  safelist: [
    { pattern: /bg-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
    { pattern: /text-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
    { pattern: /border-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
    { pattern: /placeholder-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
  ],
  plugins: [],
}
