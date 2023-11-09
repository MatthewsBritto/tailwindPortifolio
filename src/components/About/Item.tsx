import React from 'react'
import IconItem, { IconAsideProps } from '../Aside/IconItem'

interface HobbieItemProps {
  title: string
  name: IconAsideProps['type']
}

export default function HoobieItem({ name, title }: HobbieItemProps) {
  return (
    <li className="group flex flex-col justify-center p-4 items-center cursor-pointer rounded h-28 bg-primary transition hover:scale-105">
      <IconItem type={name} size={'2rem'} />
      <h3 className="group-hover:scale-125 mt-2">{title}</h3>
    </li>
  )
}
