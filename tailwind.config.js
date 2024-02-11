/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.stories.tsx",
    "./node_modules/bbodek-ui/dist/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#101828",
        "gray-08": "#1C273E",
        "gray-07": "#333D52",
        "gray-06": "#7C8497",
        "gray-05": "#A9B2C7",
        "gray-04": "#8588A1",
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
        error: "#FF5260",
        warning: "#FFBB6A",
        success: "#79D4B4",
      },
      fontSize: {
        "head-01-regular": [
          "1.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "head-01-medium": [
          "1.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "head-01-bold": [
          "1.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "head-02-regular": [
          "1.5rem",
          {
          lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "head-02-medium": [
          "1.5rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "head-02-bold": [
          "1.5rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "subhead-01-regular": [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "subhead-01-medium": [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "subhead-01-bold": [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "subhead-02-regular": [
          "1.125rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "subhead-02-medium": [
          "1.125rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "subhead-02-bold": [
          "1.125rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "body-01-regular": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-01-medium": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "body-01-bold": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "body-02-regular": [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-02-medium": [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "body-02-bold": [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "body-03-regular": [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-03-medium": [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "body-03-bold": [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
      },
      boxShadow: {
        section: "0 .25rem 1.25rem .25rem rgba(0, 0, 0, 0.04)",
      },
      animation: {
        "fade-in": "fade-in .2s cubic-bezier(0, 0, 0.5, 1)",
        popup: "popup .2s cubic-bezier(0, 0, 0.5, 1)",
        drawer: "drawer .2s cubic-bezier(0, 0, 0.5, 1)",
      },
      borderRadius: {
        default: "1.25rem",
      },
      fontFamily: {
        "pretendard": ["Pretendard"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        popup: {
          "0%": { transform: "translateY(16px)" },
          "100%": { transform: "translateY(0)" },
        },
        drawer: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  safelist: [
    { pattern: /bg-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
    { pattern: /text-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
    { pattern: /border-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
    { pattern: /placeholder-(white|black|gray|primary|error|warning|success)(-\d+)?/ },
    { pattern: /text-head-/ },
    { pattern: /text-subhead-/ },
    { pattern: /text-body-/ },
  ],
  plugins: [],
};
