import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modals'


export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}
const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen title="Login Modal" />
        <Navbar />{children}</body>
    </html>
  )
}
