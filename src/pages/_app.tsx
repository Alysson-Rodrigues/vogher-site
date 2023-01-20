import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const baseNeueThin = localFont({ src: '../../src/fonts/BaseNeueThin.woff', variable: '--base-neue-thin' })
const baseNeueLight = localFont({ src: '../../src/fonts/BaseNeueLight.woff', variable: '--base-neue-light' })
const baseNeueRegular = localFont({ src: '../../src/fonts/BaseNeueRegular.woff', variable: '--base-neue-regular' })
const baseNeueMedium = localFont({ src: '../../src/fonts/BaseNeueMedium.woff', variable: '--base-neue-medium' })
const baseNeueBold = localFont({ src: '../../src/fonts/BaseNeueBold.woff', variable: '--base-neue-bold' })
const baseNeueBlack = localFont({ src: '../../src/fonts/BaseNeueBlack.woff', variable: '--base-neue-black' })
const baseNeueBlackOblique = localFont({ src: '../../src/fonts/BaseNeueBlackOblique.woff', variable: '--base-neue-black-oblique' })
const baseNeueBoldOblique = localFont({ src: '../../src/fonts/BaseNeueBoldOblique.woff', variable: '--base-neue-bold-oblique' })
const baseNeueLightOblique = localFont({ src: '../../src/fonts/BaseNeueLightOblique.woff', variable: '--base-neue-light-oblique' })
const baseNeueMediumOblique = localFont({ src: '../../src/fonts/BaseNeueMediumOblique.woff', variable: '--base-neue-medium-oblique' })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${baseNeueThin.variable} 
    ${baseNeueLight.variable} 
    ${baseNeueRegular.variable}
    ${baseNeueMedium.variable}
    ${baseNeueBold.variable}
    ${baseNeueBlack.variable}
    ${baseNeueBlackOblique.variable}
    ${baseNeueBoldOblique.variable}
    ${baseNeueLightOblique.variable}
    ${baseNeueMediumOblique.variable}
    `}>
      <Component {...pageProps} />
    </main>
  )
}
