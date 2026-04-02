/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',
      },
    },
		extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        product: ['Product Sans', 'sans-serif'],
      },
    },
	},
	plugins: [],
};
