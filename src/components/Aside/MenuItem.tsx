import { ComponentProps } from 'react'
import IconItem, { IconAsideProps } from './IconItem'

export interface MenuItemProps extends ComponentProps<'li'> {
  active: boolean
  type: IconAsideProps['type']
}

export default function MenuItem({
  title,
  active,
  type,
  ...props
}: MenuItemProps) {
  return (
    <li
      {...props}
      className={`flex lg:flex-1 items-center justify-start gap-4 ${
        active ? 'text-yellow-500' : 'text-white'
      } cursor-pointer `}
    >
      <IconItem
        type={type}
        // className={` ${active ? 'animate-bounce' : null} `}
      />
      <h2>{title}</h2>
    </li>
  )
}
