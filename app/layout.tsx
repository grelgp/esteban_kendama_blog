import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Esteban Kendama',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <header>
          <div className="bg-white border-b-2 py-2 px-4 sm:px-8 space-x-6 flex flex-row justify-between items-center">
            <a href="/#" className="text-xl sm:text-2xl font-semibold">
              Esteban Kendama
            </a>
            <div className="flex items-center space-x-6 sm:space-x-10">
              <a href="/about" className="text-md sm:text-lg hover:underline underline-offset-4">
                A propos
              </a>
              <a href="https://www.youtube.com/@EstebanKendama" className="flex items-center hover:underline underline-offset-4">
                <img className="w-8 sm:mr-2" src="./youtube.svg" alt="" />
                <p className="text-lg hidden sm:block ">
                  Ma chaîne
                </p>
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
