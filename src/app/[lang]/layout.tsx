import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import { PageProvider } from '@/context/PageContext'
import { Locale, i18n } from './i18n'
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionarie-server'
// eslint-disable-next-line camelcase

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }))
  return languages
}

const inter = Inter({ subsets: ['latin'] })

export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
