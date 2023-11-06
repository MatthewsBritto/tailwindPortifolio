import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

interface MenuItemProps extends LucideProps {
  name: keyof typeof dynamicIconImports
  title: string
  isSelected: boolean
}

export default function MenuItem({
  name,
  title,
  isSelected = false,
  ...props
}: MenuItemProps) {
  const LucideIcon = dynamic(dynamicIconImports[name])
  return (
    <li className="flex justify-center gap-2 cursor-pointer ">
      <LucideIcon {...props} />
      <h2>{title}</h2>
    </li>
  )
}
