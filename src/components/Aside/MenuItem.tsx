import { ComponentProps } from 'react'

import * as IconFa from 'react-icons/fa6'
import { IconType } from 'react-icons/lib/esm/iconBase'

export type MenuItemProps = ComponentProps<'li'> & {
  active: boolean
  name: IconType
}

export default function MenuItem({ title, active, ...props }: MenuItemProps) {
  return (
    <li
      {...props}
      className={`flex flex-1 items-center justify-start gap-4 ${
        active ? 'text-yellow-500' : 'text-white'
      } cursor-pointer `}
    >
      <IconFa.Fa42Group />

      <h2>{title}</h2>
    </li>
  )
}
