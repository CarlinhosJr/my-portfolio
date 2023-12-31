import './globals.css'

//next
import type { Metadata } from 'next'

//fonts
import { Ubuntu } from 'next/font/google'

//components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

const ubuntu = Ubuntu({weight: "400", subsets:['latin']})

export const metadata: Metadata = {
  title: 'Luiz Junior | Dev',
  description: 'Web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-black`}>
        <Header/>
        <WhatsApp/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
