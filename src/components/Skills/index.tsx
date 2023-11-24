'use client'
import React, { useContext, useEffect, useState } from 'react'
import NewListCard, { TechTypes } from './NewListCard'
import { BasePageProps } from '@/utils/BaseComponent'
import { ThemeContext } from '@/context/PageContext'

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
  const { messages } = useContext(ThemeContext)

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
       flex flex-col justify-center absolute h-screen px-5 transition-transform 
      animate-changePage w-full gap-4 mdPhone:gap-6  lg:justify-start lg:mt-10 bg-secondary top-0`}
      {...props}
    >
      <div className="flex flex-col items-start mdPhone:gap-2 lg:gap-4 mt-8 lg:my-20 mdPhone:mt-4">
        <h2 className="font-bold text-white mdPhone:text-4xl text-2xl capitalize">
          {messages.my}
        </h2>
        <h2 className="font-bold text-white mdPhone:text-4xl text-2xl capitalize">
          {' '}
          <span className="text-primary ">{messages.skills}</span> {messages.as}{' '}
        </h2>
        <h2 className="font-bold text-white mdPhone:text-4xl text-2xl capitalize">
          {messages.dev}
        </h2>
      </div>
      <div className="flex w-full flex-wrap gap-2 h-2/3 lg:h-auto lg:gap-10 md:h-1/2 md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-stretch rounded-md overflow-x-auto">
        {category &&
          category.map((category) => (
            <NewListCard key={category} category={category} />
          ))}
      </div>
    </div>
  )
}
