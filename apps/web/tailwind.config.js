/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      colors: {
        brand: {
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
          700: "#108650"
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          500: "#6b7280",
          700: "#4b5563",
          900: "#1f2937",
          950: "#14181c"
        }
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 24, 28, 0.06)",
        lift: "0 10px 24px rgba(20, 24, 28, 0.08)"
      }
    }
  },
  plugins: []
};
