'use client'
import React, { useEffect, useState } from 'react'
import NewListCard from './NewListCard'
import { BasePageProps } from '@/utils/BaseComponent'

export const techsList = {
  front: [
    'Next Js',
    'Vite',
    'Zustand',
    'Context Api',
    'Jest',
    'Vitest',
    'Zod',
    'Yup',
    'React Hook Form',
    'Styled Components',
    'Stitches',
    'Tailwind',
  ],
  back: [
    'SQL Server',
    'Postgress',
    'SQLite',
    'Prisma',
    'Fastify',
    'Jest',
    'Vitest',
    'Zod',
    'Yup',
    'React Hook Form',
    'Authorization',
    'JWT',
  ],
  mobile: [
    'Expo',
    'Navigator',
    'Stack Navigator',
    'Bottom Navigator',
    'Component Library',
    'Native Base',
    'Gluestack-ui',
    'Zod',
    'Yup',
    'React Hook Form',
    'Styled Components',
    'Stitches',
    'Tailwind',
  ],
}

export default function Skills({
  active,
  secondActive,
  ...props
}: BasePageProps) {
  const [category, setCategory] = useState<string[]>([])

  async function changeCategorys() {
    const ListCategorys = []
    for (const category in techsList) {
      ListCategorys.push(category)
    }

    ListCategorys && setCategory(ListCategorys)
  }

  useEffect(() => {
    changeCategorys()
  }, [])

  return (
    <div
      className={`${active && 'z-40 flex'} ${secondActive && 'z-20 flex'} ${
        !active && !secondActive && 'hidden'
      }
       flex flex-col justify-center absolute h-screen items-center transition-transform 
      animate-changePage w-full gap-16 bg-secondary top-0`}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white text-4xl">WHAT</h2>
        <h2 className="font-bold text-white text-4xl ">
          {' '}
          <span className="text-primary">SKILLS</span> I HAVE{' '}
        </h2>
        <h2 className="font-bold text-white text-4xl ">AS DEVELOPER</h2>
      </div>
      <div className="flex w-full flex-wrap gap-2 rounded-md">
        {category &&
          category.map((category) => (
            <NewListCard key={category} category={category} />
          ))}
      </div>
    </div>
  )
}
