import React from 'react'
import { Icon, IconProps } from '../Aside/MenuItem'

interface HobbieItemProps extends IconProps {
  title: string
}

export default function HoobieItem({ name, title, ...props }: HobbieItemProps) {
  return (
    <li className="group flex flex-col justify-center p-4 items-center cursor-pointer rounded h-28 bg-primary transition hover:scale-105">
      <Icon name={name} {...props} className="group-hover:scale-125" />
      <h3 className="group-hover:scale-125 mt-2">{title}</h3>
    </li>
  )
}
