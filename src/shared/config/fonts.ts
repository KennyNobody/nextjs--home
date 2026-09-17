import localFont from 'next/font/local'

const fontAccent = localFont({
    variable: '--font-accent',
    display: 'swap',
    src: [
        {
            path: '../assets/fonts/Gakor-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
});

const fontRegular = localFont({
    variable: '--font-regular',
    display: 'swap',
    src: [
        {
            path: '../assets/fonts/TTNorms-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-ThinItalic.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-ExtraLightItalic.woff2',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-ExtraBoldItalic.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../assets/fonts/TTNorms-Heavy.woff2',
            weight: '950',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-HeavyItalic.woff2',
            weight: '950',
            style: 'italic',
        },
    ],
});

export {
    fontAccent,
    fontRegular,
}
