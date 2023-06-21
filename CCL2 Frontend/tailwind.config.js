/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx, html}', './src/App.vue', './index.html'],
    theme: {
        extend: {
            backgroundImage: {
                'all-skins': "url('/img/landing/all-skins.png')",
                'glock-18': "url('/img/landing/glockBG.svg')",
                'usp': 'url(/img/landing/uspBG.svg)',
            },

            colors: {
                //Normal Opacity
                'ccl2-Dark-Gold': 'rgba(195, 157, 89, 1)',
                'ccl2-Gold': 'rgba(230, 186, 129, 1)',
                'ccl2-Light-Gold': 'rgba(230, 200, 142, 1)',
                'ccl2-White': 'rgba(255, 255, 255, 1)',
                'ccl2-Grey-Blue': 'rgba(128, 129, 155, 1)',
                'ccl2-Light-Blue': 'rgba(84, 117, 252, 1)',
                'ccl2-Dark-Blue': 'rgba(27, 28, 74, 1)',
                'ccl2-Night-Blue': 'rgba(1, 2, 53, 1)',
                'ccl2-Midnight-Blue': 'rgba(0, 1, 36, 1)',
                'ccl2-Purple': 'rgba(34, 2, 55, 1)',
                'ccl2-Blood-Red': 'rgba(65, 1, 34, 1)',
                'ccl2-Red-Darker': 'rgba(147, 50, 78, 1)',
                'ccl2-Red': 'rgba(229, 68, 81, 1)',

                // Lower Opacity

                'ccl2-Dark-Gold-70': 'rgba(195, 157, 89, 0.7)',
                'ccl2-Gold-70': 'rgba(230, 186, 129, 0.7)',
                'ccl2-Light-Gold-70': 'rgba(230, 200, 142, 0.7)',
                'ccl2-White-70': 'rgba(255, 255, 255, 0.7)',
                'ccl2-Grey-Blue-70': 'rgba(128, 129, 155, 0.7)',
                'ccl2-Light-Blue-70': 'rgba(84, 117, 252, 0.7)',
                'ccl2-Dark-Blue-70': 'rgba(27, 28, 74, 0.7)',
                'ccl2-Night-Blue-70': 'rgba(1, 2, 53, 0.7)',
                'ccl2-Midnight-Blue-70': 'rgba(0, 1, 36, 0.7)',
                'ccl2-Purple-70': 'rgba(34, 2, 55, 0.7)',
                'ccl2-Blood-Red-70': 'rgba(65, 1, 34, 0.7)',
                'ccl2-Red-Darker-70': 'rgba(147, 50, 78, 0.7)',
                'ccl2-Red-70': 'rgba(229, 68, 81, 0.7)',
                'ccl2-Light-Blue-40': 'rgba(84, 117, 252, 0.4)',
                'ccl2-Light-Red-40': 'rgba(229, 68, 81, 0.4)',

            },
            fontFamily: {
                'Moondance': ['Moondance', 'sans-serif'],
                'Poppins': ['Poppins', 'sans-serif'],


            },
            fontWeight: {
                'thin': 100,
                'extralight': 200,
                'light': 300,
                'regular': 400,
                'medium': 500,
                'semibold': 600,
                'bold': 700,
                'extrabold': 800,
                'black': 900,
            }
        },
    },
    plugins: [],
}
