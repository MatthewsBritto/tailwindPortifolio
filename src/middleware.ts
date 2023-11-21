import createMiddleware from 'next-intl/middleware'
import { i18n } from '@/app/[lang]/i18n'

export default createMiddleware(i18n)

export const config = {
  matcher: ['/((?!api|_next| .* \\..*).*)'],
}
