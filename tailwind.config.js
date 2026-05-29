/** @type {import('tailwindcss').Config} */

export const darkMode = 'class';
export const content = [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    extend: {
        spacing: {
            '1': '0.25rem',
            '13': '3.25rem',
            '15': '3.75rem',
            '18': '4.5rem',
            '30': '7.5rem',
            '32': '8rem',
            '90': '22.5rem',
            '120': '30rem',
            '130': '32.5rem',
        },
        zIndex: {
            '999': '999',
            '1000': '1000',
        },
        screens: {
            'xs': '320px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
};
export const plugins = [];