import './globals.css'
import { Montserrat, Hind } from 'next/font/google'
import Header from './components/Nav'
import Footer from './components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: '700',
})

const hind = Hind({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hind',
  weight: '400',
})



export const metadata = {
  title: 'Helping Developpers Land Jobs',
  description: 'Land your dream job as a developer and boost your career',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${hind.variable}`}>
      <body className="mx-auto max-w-2xl pt-10 pb-10 flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

