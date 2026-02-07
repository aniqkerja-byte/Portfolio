/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./js/**/*.js"],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                charcoal: '#1A1A1A',
                'dark-gray': '#333333',
                gray: '#666666',
                'light-gray': '#999999',
                'pale-gray': '#F0F2F5',
                accent: '#0A66C2',
                'accent-dark': '#0855A0',
                whatsapp: '#25D366',
                'whatsapp-dark': '#1DA851',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'lg': '12px',
            }
        },
    },
    plugins: [],
}
