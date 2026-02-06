/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
        "./components/**/*.{js,ts,jsx,tsx,mdx,css}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#f8f9fa',
                text: '#1a1a1a',
                primary: '#ff4757',
                secondary: '#2f3542',
                accent: {
                    1: '#eccc68',
                    2: '#7bed9f',
                    3: '#70a1ff',
                    4: '#ff6b81',
                },
            },
            fontFamily: {
                main: ['var(--font-outfit)', 'sans-serif'],
                retro: ['var(--font-rye)', 'cursive'],
                mono: ['var(--font-special-elite)', 'monospace'],
            },
            borderRadius: {
                card: '12px',
                pill: '100px',
                sm: '4px',
            },
            boxShadow: {
                hard: '5px 5px 0px #1a1a1a',
                'hard-hover': '8px 8px 0px #1a1a1a',
                sm: '3px 3px 0px #1a1a1a',
            },
            maxWidth: {
                container: '1200px',
            },
            spacing: {
                header: '90px',
            },
            keyframes: {
                hoist: {
                    '0%, 100%': { transform: 'translateY(2px) rotate(0deg)' },
                    '25%': { transform: 'translateY(5px) rotate(-1deg)' },
                    '50%': { transform: 'translateY(0px) rotate(0.5deg)' },
                    '75%': { transform: 'translateY(4px) rotate(-0.5deg)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                swingRope: {
                    '0%': { transform: 'translateX(-50%) rotate(-4deg)' },
                    '100%': { transform: 'translateX(-50%) rotate(4deg)' },
                },
                swingTag: {
                    '0%': { transform: 'translateX(-50%) rotate(-2deg)' },
                    '100%': { transform: 'translateX(-50%) rotate(2deg)' },
                },
                windFlutter: {
                    '0%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                    '100%': { transform: 'rotate(-1deg)' },
                },
            },
            animation: {
                hoist: 'hoist 2s ease-in-out infinite',
                marquee: 'marquee 100s linear infinite',
                swingRope: 'swingRope 3s ease-in-out infinite alternate',
                swingTag: 'swingTag 2.5s ease-in-out infinite alternate',
                windFlutter: 'windFlutter 6s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
};
