import { ComponentProps } from 'react'
import { IconBase, IconBaseProps, IconType } from 'react-icons'

import * as ReactIcons from 'react-icons/fa'

interface ItemCardProps extends ComponentProps<'div'> {
  techName: string
  icon: typeof IconBase
}

export default function TechCard({ techName, icon, ...props }: ItemCardProps) {
  const Icon: IconBaseProps = ReactIcons[icon]
  return (
    <div className="p-4 mt-4" {...props}>
      <h2 className="font-semibold text-white text-2xl">Front-end</h2>
      <div className="flex flex-col items-center justify-center mt-2 text-white p-4 bg-primary w-28 rounded text-center">
        <Icon size={'3rem'} />
        <span className="text-md pt-4">{techName}</span>
      </div>
    </div>
  )
}
