import { ReactNode } from 'react'
import './globals.css'
import { Nunito_Sans as NunitoSans } from 'next/font/google'

const nunitoSans = NunitoSans({ subsets: ['latin'] })

export const metadata = {
  title: 'Book Wise',
  description: 'Choose the best book for you',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`flex ${nunitoSans.className} h-screen bg-gray-800 p-5`}
      >
        {children}
      </body>
    </html>
  )
}
