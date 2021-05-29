const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: colors.orange,
                cyan: colors.cyan,
                teal: colors.teal
            },
            letterSpacing: {
                'widest-2': '0.2rem'           
            },
            fontSize: {
                '2xs': '.7rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
