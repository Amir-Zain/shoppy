/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      width: {
        '1/3-gapped': 'calc(33.33% - 0.5rem)',
        '1/2-gapped': 'calc(50% - 0.5rem)',
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
