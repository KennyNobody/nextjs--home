import localFont from 'next/font/local'

const fontAccent = localFont({
    variable: '--font-accent',
    display: 'swap',
    preload: false,
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
    preload: false,
    declarations: [{ prop: 'font-family', value: 'TTNorms' }],
    src: [
        {
            path: '../assets/fonts/TTNorms-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-Light.woff2',
            weight: '300',
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
            path: '../assets/fonts/TTNorms-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/TTNorms-Heavy.woff2',
            weight: '950',
            style: 'normal',
        },
    ],
});

const fontRegularPreload = localFont({
    variable: '--font-regular-preload',
    display: 'swap',
    preload: true,
    declarations: [{ prop: 'font-family', value: 'TTNorms' }],
    src: [
        {
            path: '../assets/fonts/TTNorms-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
});

export {
    fontAccent,
    fontRegular,
    fontRegularPreload,
}
