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
                '2xs': '.7rem',
                '3xs': '.65rem'
            },
            borderWidth: {
               '6': '6px',
               '10': '10px',
               '12': '12px',
               '14': '14px',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
