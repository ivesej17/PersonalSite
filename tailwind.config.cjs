/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                'max-sm': { max: '639px' },
                'max-lg': { max: '1024px' },
                'max-583px': { max: '583px' },
            },
        },
    },
    plugins: [],
};
