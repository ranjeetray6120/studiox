/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    400: '#D4AF37', // Champagne Gold
                    500: '#C5A028',
                    600: '#A6891F',
                },
                dark: {
                    900: '#0a0a0a',
                    800: '#121212',
                    700: '#1A1A1A',
                },
                warm: {
                    50: '#FDFBF7', // Warmer Cream
                    100: '#F7F3EB',
                }
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Public Sans"', 'sans-serif'],
            },
            letterSpacing: {
                'widest-xl': '0.3em',
            }
        },
    },
    plugins: [],
}
