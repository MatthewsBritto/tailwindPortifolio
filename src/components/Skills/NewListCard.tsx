import React from 'react'
import { techsList } from '@/components/Skills/index'

interface ItemProps {
  category: string
}

export default function NewListCard({ category }: ItemProps) {
  const currentCategory = techsList[`${category}`]

  return (
    <div className="flex flex-col w-min-4/12  flex-1 rounded-md p-4 border border-primary bg-primary text-white shadow-2xl shadow-black">
      <h2 className="font-bold capitalize py-2">{category}-end</h2>
      <div className="flex py-4 flex-wrap gap-1 gap-y-2 text-justify items-center justify-start">
        {currentCategory &&
          currentCategory.map((item: string) => (
            <p
              key={item}
              className="px-2 text-sm bg-white text-black font-semibold font-light rounded-md h-5"
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  )
}
