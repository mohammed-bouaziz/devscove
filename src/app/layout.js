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
  title: 'Helping Developpers get better',
  description: 'If you are Developer, writing software, mobile apps, web apps, machine learning or artificial intelligence, this platform will help you get better, land better jobs, improve your carerr and bring more opportunities your way, you will develop your coding skills, create great projetcs from scartch, understand the tech industry better and succeed as a developer',
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

