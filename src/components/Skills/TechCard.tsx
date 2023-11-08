import { ComponentProps } from 'react'
import * as ReactIcons from 'react-icons/fa'

interface ItemCardProps extends ComponentProps<'div'> {
  techName: string
  icon: string
  title: string
  active: boolean
}

export default function TechCard({
  techName,
  title,
  icon,
  active,
  ...props
}: ItemCardProps) {
  const Icon = ReactIcons[icon]
  return (
    <div className="group p-4 mt-4 group-hover:scale-110 transition" {...props}>
      <h2 className="font-semibold text-white text-2xl text-center">{title}</h2>
      <div
        className={`transition flex flex-col items-center justify-evenly mt-2 text-white p-4 ${
          active ? 'bg-sky-700' : 'bg-primary'
        }  w-28 rounded text-center cursor-pointer h-36 group-hover:scale-110`}
      >
        <Icon size={'3rem'} />
        <span className="text-md group-hover:scale-110 leading-tight">
          {techName}
        </span>
      </div>
    </div>
  )
}
