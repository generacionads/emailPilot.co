import Footer from './components/Footer'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EmailPilot',
  description: 'Descripción de tu proyecto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/kun0rzc.css" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
         <Footer />
       </body>
    </html>
  )
}