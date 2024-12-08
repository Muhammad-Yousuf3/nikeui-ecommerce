import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Example: replace with actual Nike brand color
        secondary: '#FFFFFF',
        grayLight: '#F5F5F5',
        grayDark: '#333333',
        // Add all colors from Figma
      },
      fontFamily: {
        emojiFix: ['sans-serif'],
      },
      fontSize: {
        // Define all font sizes and line heights you extracted from Figma
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['24px', { lineHeight: '32px' }],
        // etc.
      },
      spacing: {
        // Define spacing according to your design’s baseline grid
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        // etc. Adjust based on Figma measurements
      },
      // Add shadows, borderRadius, etc. from Figma:
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'full': '9999px'
      },
      boxShadow: {
        // Extract the exact shadows from Figma if any
        'card': '0px 4px 16px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
} satisfies Config;
