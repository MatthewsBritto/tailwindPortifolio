import { ComponentProps } from 'react'

export type BasePageProps = ComponentProps<'div'> & {
  active: boolean
  secondActive: boolean
}
