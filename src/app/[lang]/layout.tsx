import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import { PageProvider } from '@/context/PageContext'

// eslint-disable-next-line camelcase

const inter = Inter({ subsets: ['latin'] })

// export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Matthews Britto',
  description: 'Desenvolvedor Full-Stack',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <PageProvider>{children}</PageProvider>
      </body>
    </html>
  )
}
