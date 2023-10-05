
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import RentModal from './components/modals/RentModal'


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
        <ToasterProvider />
        <RentModal />
        <RegisterModal />
        <Navbar />{children}</body>
    </html>
  )
}
