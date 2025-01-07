import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile Page',
  description: 'A profile page built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-screen bg-white">
          <div className="w-full max-w-[560px] mx-auto px-4 sm:px-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

