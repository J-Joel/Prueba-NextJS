/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7e22ce",
                  
          secondary: "#fc717f",
                  
          accent: "#e2e03d",
                  
          neutral: "#2f233e",
                  
          "base-100": "#432f5b",
                  
          info: "#9fd8e9",
                  
          success: "#25daad",
                  
          warning: "#9f710f",
                  
          error: "#f80d3f",
          body: {
            "background-color": "#432f5b",
          },
        },
      },
    ],
  },
}
