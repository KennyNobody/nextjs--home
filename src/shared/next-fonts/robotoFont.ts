import { Roboto } from 'next/font/google'

const robotoFont = Roboto({
    variable: '--font-main',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700'],
})

export {
    robotoFont,
}
