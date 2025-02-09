/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts}'],
    darkMode: ['selector', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                lime: {
                    100: 'var(--lime-100)',
                    200: 'var(--lime-200)',
                    300: 'var(--lime-300)',
                    400: 'var(--lime-400)',
                    500: 'var(--lime-500)',
                    600: 'var(--lime-600)',
                    700: 'var(--lime-700)',
                    800: 'var(--lime-800)',
                    900: 'var(--lime-900)',
                    1000: 'var(--lime-1000)'
                },
                red: {
                    100: 'var(--red-100)',
                    200: 'var(--red-200)',
                    300: 'var(--red-300)',
                    400: 'var(--red-400)',
                    500: 'var(--red-500)',
                    600: 'var(--red-600)',
                    700: 'var(--red-700)',
                    800: 'var(--red-800)',
                    900: 'var(--red-900)',
                    1000: 'var(--red-1000)'
                },
                orange: {
                    100: 'var(--orange-100)',
                    200: 'var(--orange-200)',
                    300: 'var(--orange-300)',
                    400: 'var(--orange-400)',
                    500: 'var(--orange-500)',
                    600: 'var(--orange-600)',
                    700: 'var(--orange-700)',
                    800: 'var(--orange-800)',
                    900: 'var(--orange-900)',
                    1000: 'var(--orange-1000)'
                },
                yellow: {
                    100: 'var(--yellow-100)',
                    200: 'var(--yellow-200)',
                    300: 'var(--yellow-300)',
                    400: 'var(--yellow-400)',
                    500: 'var(--yellow-500)',
                    600: 'var(--yellow-600)',
                    700: 'var(--yellow-700)',
                    800: 'var(--yellow-800)',
                    900: 'var(--yellow-900)',
                    1000: 'var(--yellow-1000)'
                },
                green: {
                    100: 'var(--green-100)',
                    200: 'var(--green-200)',
                    300: 'var(--green-300)',
                    400: 'var(--green-400)',
                    500: 'var(--green-500)',
                    600: 'var(--green-600)',
                    700: 'var(--green-700)',
                    800: 'var(--green-800)',
                    900: 'var(--green-900)',
                    1000: 'var(--green-1000)'
                },
                teal: {
                    100: 'var(--teal-100)',
                    200: 'var(--teal-200)',
                    300: 'var(--teal-300)',
                    400: 'var(--teal-400)',
                    500: 'var(--teal-500)',
                    600: 'var(--teal-600)',
                    700: 'var(--teal-700)',
                    800: 'var(--teal-800)',
                    900: 'var(--teal-900)',
                    1000: 'var(--teal-1000)'
                },
                blue: {
                    100: 'var(--blue-100)',
                    200: 'var(--blue-200)',
                    300: 'var(--blue-300)',
                    400: 'var(--blue-400)',
                    500: 'var(--blue-500)',
                    600: 'var(--blue-600)',
                    700: 'var(--blue-700)',
                    800: 'var(--blue-800)',
                    900: 'var(--blue-900)',
                    1000: 'var(--blue-1000)'
                },
                purple: {
                    100: 'var(--purple-100)',
                    200: 'var(--purple-200)',
                    300: 'var(--purple-300)',
                    400: 'var(--purple-400)',
                    500: 'var(--purple-500)',
                    600: 'var(--purple-600)',
                    700: 'var(--purple-700)',
                    800: 'var(--purple-800)',
                    900: 'var(--purple-900)',
                    1000: 'var(--purple-1000)'
                },
                magenta: {
                    100: 'var(--magenta-100)',
                    200: 'var(--magenta-200)',
                    300: 'var(--magenta-300)',
                    400: 'var(--magenta-400)',
                    500: 'var(--magenta-500)',
                    600: 'var(--magenta-600)',
                    700: 'var(--magenta-700)',
                    800: 'var(--magenta-800)',
                    900: 'var(--magenta-900)',
                    1000: 'var(--magenta-1000)'
                },
                neutral: {
                    0: 'var(--neutral-0)',
                    100: 'var(--neutral-100)',
                    200: 'var(--neutral-200)',
                    300: 'var(--neutral-300)',
                    400: 'var(--neutral-400)',
                    500: 'var(--neutral-500)',
                    600: 'var(--neutral-600)',
                    700: 'var(--neutral-700)',
                    800: 'var(--neutral-800)',
                    900: 'var(--neutral-900)',
                    1000: 'var(--neutral-1000)',
                    1100: 'var(--neutral-1100)'
                }
            },
            textColor: {
                'accent-lime': 'var(--lime-800)',
                'accent-lime-bolder': 'var(--lime-900)',
                'accent-red': 'var(--red-800)',
                'accent-red-bolder': 'var(--red-900)',
                'accent-orange': 'var(--orange-800)',
                'accent-orange-bolder': 'var(--orange-900)',
                'accent-yellow': 'var(--yellow-800)',
                'accent-yellow-bolder': 'var(--yellow-900)',
                'accent-green': 'var(--green-800)',
                'accent-green-bolder': 'var(--green-900)',
                'accent-teal': 'var(--teal-800)',
                'accent-teal-bolder': 'var(--teal-900)',
                'accent-blue': 'var(--blue-800)',
                'accent-blue-bolder': 'var(--blue-900)',
                'accent-purple': 'var(--purple-800)',
                'accent-purple-bolder': 'var(--purple-900)',
                'accent-magenta': 'var(--magenta-800)',
                'accent-magenta-bolder': 'var(--magenta-900)',
                'accent-gray': 'var(--neutral-800)',
                'accent-gray-bolder': 'var(--neutral-1100)',
                disabled: 'var(--neutral-400-A)',
                inverse: 'var(--neutral-0)',
                selected: 'var(--blue-700)',
                brand: 'var(--blue-700)',
                danger: 'var(--red-800)',
                warning: 'var(--orange-800)',
                'warning-inverse': 'var(--neutral-1000)',
                success: 'var(--green-800)',
                discovery: 'var(--purple-800)',
                information: 'var(--blue-800)',
                subtlest: 'var(--neutral-700)',
                subtle: 'var(--neutral-800)',

                link: 'var(--blue-700)',
                'link-pressed': 'var(--blue-800)',
                'link-visited': 'var(--purple-700)',
                'link-visited-pressed': 'var(--purple-800)'
            },
            borderColor: {
                'accent-lime': 'var(--lime-600)',
                'accent-red': 'var(--red-600)',
                'accent-orange': 'var(--orange-600)',
                'accent-yellow': 'var(--yellow-600)',
                'accent-green': 'var(--green-600)',
                'accent-teal': 'var(--teal-600)',
                'accent-blue': 'var(--blue-600)',
                'accent-purple': 'var(--purple-600)',
                'accent-magenta': 'var(--magenta-600)',
                'accent-gray': 'var(--neutral-600)',
                disabled: 'var(--neutral-200-A)',
                focus: 'var(--blue-500)',
                input: 'var(--neutral-500)',
                inverse: 'var(--neutral-0)',
                selected: 'var(--blue-700)',
                brand: 'var(--blue-700)',
                danger: 'var(--red-700)',
                warning: 'var(--orange-600)',
                'warning-inverse': 'var(--neutral-1000)',
                success: 'var(--green-600)',
                discovery: 'var(--purple-600)',
                information: 'var(--blue-600)',
                bold: 'var(--neutral-600)'
            },
            backgroundColor: {
                'accent-lime-subtlest': 'var(--lime-100)',
                'accent-lime-subtlest-hovered': 'var(--lime-200)',
                'accent-lime-subtlest-pressed': 'var(--lime-300)',
                'accent-lime-subtler': 'var(--lime-200)',
                'accent-lime-subtler-hovered': 'var(--lime-300)',
                'accent-lime-subtler-pressed': 'var(--lime-400)',
                'accent-lime-subtle': 'var(--lime-400)',
                'accent-lime-subtle-hovered': 'var(--lime-300)',
                'accent-lime-subtle-pressed': 'var(--lime-200)',
                'accent-lime-bolder': 'var(--lime-700)',
                'accent-lime-bolder-hovered': 'var(--lime-800)',
                'accent-lime-bolder-pressed': 'var(--lime-900)',

                'accent-red-subtlest': 'var(--red-100)',
                'accent-red-subtlest-hovered': 'var(--red-200)',
                'accent-red-subtlest-pressed': 'var(--red-300)',
                'accent-red-subtler': 'var(--red-200)',
                'accent-red-subtler-hovered': 'var(--red-300)',
                'accent-red-subtler-pressed': 'var(--red-400)',
                'accent-red-subtle': 'var(--red-400)',
                'accent-red-subtle-hovered': 'var(--red-300)',
                'accent-red-subtle-pressed': 'var(--red-200)',
                'accent-red-bolder': 'var(--red-700)',
                'accent-red-bolder-hovered': 'var(--red-800)',
                'accent-red-bolder-pressed': 'var(--red-900)',

                'accent-orange-subtlest': 'var(--orange-100)',
                'accent-orange-subtlest-hovered': 'var(--orange-200)',
                'accent-orange-subtlest-pressed': 'var(--orange-300)',
                'accent-orange-subtler': 'var(--orange-200)',
                'accent-orange-subtler-hovered': 'var(--orange-300)',
                'accent-orange-subtler-pressed': 'var(--orange-400)',
                'accent-orange-subtle': 'var(--orange-400)',
                'accent-orange-subtle-hovered': 'var(--orange-300)',
                'accent-orange-subtle-pressed': 'var(--orange-200)',
                'accent-orange-bolder': 'var(--orange-700)',
                'accent-orange-bolder-hovered': 'var(--orange-800)',
                'accent-orange-bolder-pressed': 'var(--orange-900)',

                'accent-yellow-subtlest': 'var(--yellow-100)',
                'accent-yellow-subtlest-hovered': 'var(--yellow-200)',
                'accent-yellow-subtlest-pressed': 'var(--yellow-300)',
                'accent-yellow-subtler': 'var(--yellow-200)',
                'accent-yellow-subtler-hovered': 'var(--yellow-300)',
                'accent-yellow-subtler-pressed': 'var(--yellow-400)',
                'accent-yellow-subtle': 'var(--yellow-400)',
                'accent-yellow-subtle-hovered': 'var(--yellow-300)',
                'accent-yellow-subtle-pressed': 'var(--yellow-200)',
                'accent-yellow-bolder': 'var(--yellow-700)',
                'accent-yellow-bolder-hovered': 'var(--yellow-800)',
                'accent-yellow-bolder-pressed': 'var(--yellow-900)',

                'accent-green-subtlest': 'var(--green-100)',
                'accent-green-subtlest-hovered': 'var(--green-200)',
                'accent-green-subtlest-pressed': 'var(--green-300)',
                'accent-green-subtler': 'var(--green-200)',
                'accent-green-subtler-hovered': 'var(--green-300)',
                'accent-green-subtler-pressed': 'var(--green-400)',
                'accent-green-subtle': 'var(--green-400)',
                'accent-green-subtle-hovered': 'var(--green-300)',
                'accent-green-subtle-pressed': 'var(--green-200)',
                'accent-green-bolder': 'var(--green-700)',
                'accent-green-bolder-hovered': 'var(--green-800)',
                'accent-green-bolder-pressed': 'var(--green-900)',

                'accent-teal-subtlest': 'var(--teal-100)',
                'accent-teal-subtlest-hovered': 'var(--teal-200)',
                'accent-teal-subtlest-pressed': 'var(--teal-300)',
                'accent-teal-subtler': 'var(--teal-200)',
                'accent-teal-subtler-hovered': 'var(--teal-300)',
                'accent-teal-subtler-pressed': 'var(--teal-400)',
                'accent-teal-subtle': 'var(--teal-400)',
                'accent-teal-subtle-hovered': 'var(--teal-300)',
                'accent-teal-subtle-pressed': 'var(--teal-200)',
                'accent-teal-bolder': 'var(--teal-700)',
                'accent-teal-bolder-hovered': 'var(--teal-800)',
                'accent-teal-bolder-pressed': 'var(--teal-900)',

                'accent-blue-subtlest': 'var(--blue-100)',
                'accent-blue-subtlest-hovered': 'var(--blue-200)',
                'accent-blue-subtlest-pressed': 'var(--blue-300)',
                'accent-blue-subtler': 'var(--blue-200)',
                'accent-blue-subtler-hovered': 'var(--blue-300)',
                'accent-blue-subtler-pressed': 'var(--blue-400)',
                'accent-blue-subtle': 'var(--blue-400)',
                'accent-blue-subtle-hovered': 'var(--blue-300)',
                'accent-blue-subtle-pressed': 'var(--blue-200)',
                'accent-blue-bolder': 'var(--blue-700)',
                'accent-blue-bolder-hovered': 'var(--blue-800)',
                'accent-blue-bolder-pressed': 'var(--blue-900)',

                'accent-purple-subtlest': 'var(--purple-100)',
                'accent-purple-subtlest-hovered': 'var(--purple-200)',
                'accent-purple-subtlest-pressed': 'var(--purple-300)',
                'accent-purple-subtler': 'var(--purple-200)',
                'accent-purple-subtler-hovered': 'var(--purple-300)',
                'accent-purple-subtler-pressed': 'var(--purple-400)',
                'accent-purple-subtle': 'var(--purple-400)',
                'accent-purple-subtle-hovered': 'var(--purple-300)',
                'accent-purple-subtle-pressed': 'var(--purple-200)',
                'accent-purple-bolder': 'var(--purple-700)',
                'accent-purple-bolder-hovered': 'var(--purple-800)',
                'accent-purple-bolder-pressed': 'var(--purple-900)',

                'accent-magenta-subtlest': 'var(--magenta-100)',
                'accent-magenta-subtlest-hovered': 'var(--magenta-200)',
                'accent-magenta-subtlest-pressed': 'var(--magenta-300)',
                'accent-magenta-subtler': 'var(--magenta-200)',
                'accent-magenta-subtler-hovered': 'var(--magenta-300)',
                'accent-magenta-subtler-pressed': 'var(--magenta-400)',
                'accent-magenta-subtle': 'var(--magenta-400)',
                'accent-magenta-subtle-hovered': 'var(--magenta-300)',
                'accent-magenta-subtle-pressed': 'var(--magenta-200)',
                'accent-magenta-bolder': 'var(--magenta-700)',
                'accent-magenta-bolder-hovered': 'var(--magenta-800)',
                'accent-magenta-bolder-pressed': 'var(--magenta-900)',

                'accent-gray-subtlest': 'var(--neutral-100)',
                'accent-gray-subtlest-hovered': 'var(--neutral-200)',
                'accent-gray-subtlest-pressed': 'var(--neutral-300)',
                'accent-gray-subtler': 'var(--neutral-200)',
                'accent-gray-subtler-hovered': 'var(--neutral-300)',
                'accent-gray-subtler-pressed': 'var(--neutral-400)',
                'accent-gray-subtle': 'var(--neutral-400)',
                'accent-gray-subtle-hovered': 'var(--neutral-300)',
                'accent-gray-subtle-pressed': 'var(--neutral-200)',
                'accent-gray-bolder': 'var(--neutral-700)',
                'accent-gray-bolder-hovered': 'var(--neutral-800)',
                'accent-gray-bolder-pressed': 'var(--neutral-900)',

                disabled: 'var(--neutral-100-A)',
                input: 'var(--neutral-0)',
                'input-hovered': 'var(--neutral-100)',
                'input-pressed': 'var(--neutral-0)',

                'inverse-subtle': '#00000029',
                'inverse-subtle-hovered': '#0000003D',
                'inverse-subtle-pressed': '#00000052',

                neutral: 'var(--neutral-200-A)',
                'neutral-hovered': 'var(--neutral-300-A)',
                'neutral-pressed': 'var(--neutral-400-A)',

                'neutral-subtle': 'transparent',
                'neutral-subtle-hovered': 'var(--neutral-200-A)',
                'neutral-subtle-pressed': 'var(--neutral-300-A)',

                'neutral-bold': 'var(--neutral-800)',
                'neutral-bold-hovered': 'var(--neutral-900)',
                'neutral-bold-pressed': 'var(--neutral-1000)',

                selected: 'var(--blue-100)',
                'selected-hovered': 'var(--blue-200)',
                'selected-pressed': 'var(--blue-300)',

                'selected-bold': 'var(--blue-700)',
                'selected-bold-hovered': 'var(--blue-800)',
                'selected-bold-pressed': 'var(--blue-900)',

                subtlest: 'var(--blue-100)',
                'subtlest-hovered': 'var(--blue-200)',
                'subtlest-pressed': 'var(--blue-300)',

                bold: 'var(--blue-700)',
                'bold-hovered': 'var(--blue-800)',
                'bold-pressed': 'var(--blue-900)',

                boldest: 'var(--blue-1000)',
                'boldest-hovered': 'var(--blue-900)',
                'boldest-pressed': 'var(--blue-800)'
            },
            spacing: {
                sm: '0.5rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '2rem'
            },
            fontFamily: {
                primary: ['"Inter Regular"', '"sans-serif"'],
                'primary-medium': ['"Inter Medium"', '"sans-serif"'],
                'primary-semibold': ['"Inter Semibold"', '"sans-serif"'],

                secondary: [],
                'secondary-medium': [],
                'secondary-semibold': []
            },
            screens: {}
        }
    }
};
