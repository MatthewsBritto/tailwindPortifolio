import createMiddleware from 'next-intl/middleware'
const defaultLocale = 'pt-BR'
const langs = [defaultLocale, 'en-US'] as const

const locales = langs as unknown as string[]
export const i18n = { defaultLocale, locales, localeDetection: true }

export type Locale = (typeof langs)[number]

export default createMiddleware(i18n)

export const config = {
  matcher: ['/((?!api|_next| .* \\..*).*)'],
}
