import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name])
  return <LucideIcon {...props} />
}

const Item = tv({
  base: 'flex justify-center gap-2 cursor-pointer hover:text-yellow-500',
  variants: {
    variant: {
      active: 'text-yellow-500',
    },
  },
})

export type MenuItemProps = ComponentProps<'li'> &
  VariantProps<typeof Item> & {
    active: boolean
  }

export function MenuItem({ title, variant, active, ...props }: MenuItemProps) {
  return (
    <li {...props} className={Item({ variant })}>
      <h2>{title}</h2>
    </li>
  )
}
