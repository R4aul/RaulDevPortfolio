import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Raul Damian Rafael | Backend Developer',
  description: 'Backend Developer especializado en Laravel y Spring Boot. Desarrollo de APIs REST, sistemas escalables y soluciones empresariales.',
  generator: 'Raul Dev Portfolio',
  icons: {
    icon: [
      {
        url: '/web/icon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/web/icon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/web/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/web/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
