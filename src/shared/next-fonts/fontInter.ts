import { Inter } from 'next/font/google'

const fontInter = Inter({
    variable: '--font-main',
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600'],
})

export {
    fontInter,
}
