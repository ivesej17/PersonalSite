/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                'min-xs': { min: '485px' },
                'max-sm': { max: '640px' },
                'max-lg': { max: '1024px' },
                'max-583px': { max: '583px' },
            },
        },
    },
    plugins: [],
};
