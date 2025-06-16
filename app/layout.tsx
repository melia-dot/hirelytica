import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hirelytica',
  description: 'Fix recruitment for good',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
