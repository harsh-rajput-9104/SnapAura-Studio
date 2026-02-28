/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0b0b0f',
                'bg-secondary': '#111117',
                'text-primary': '#f4f1ea',
                'text-muted': '#b9b4aa',
                accent: '#b87333',
                'accent-soft': '#7a4b2c',
            },
            fontFamily: {
                heading: ['Cormorant Garamond', 'serif'],
                body: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
