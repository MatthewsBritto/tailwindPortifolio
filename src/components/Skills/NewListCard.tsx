import React from 'react'
import { techsList } from '@/components/Skills/index'
import { ListTechsProps } from './ListTechs'

export type TechTypes = 'front' | 'back' | 'mobile'
interface ItemProps {
  category: string
}

export default function NewListCard({ category }: ItemProps) {
  const teste = () => {
    if (category === 'front') {
      return 'front'
    }
    if (category === 'back') {
      return 'back'
    }
    return 'mobile'
  }

  const index: TechTypes = teste()

  const currentCategory = techsList[index]

  return (
    <div className="flex flex-col rounded-md p-2 border border-primary bg-primary text-white shadow-2xl shadow-black md:items-center">
      <h2 className="font-bold capitalize mdPhone:text-xl py-2">{category}</h2>
      <div className="flex mdPhone:py-4 flex-wrap gap-1 mdPhone:gap-y-2 text-justify items-center justify-start">
        {currentCategory &&
          currentCategory.map((item: string) => (
            <p
              key={item}
              className="px-2 text-xs mdPhone:text-sm bg-white text-black font-semibold rounded-md flex items-center h-5"
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  )
}
