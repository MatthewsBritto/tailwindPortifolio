'use client'
import React, { use, useEffect, useState } from 'react'
import TechCard from './TechCard'
import ListTechs from './ListTechs'
import NewListCard from './NewListCard'

// const techsList = {
//   front: [
//     { title: 'Frameworks', techs: ['Next Js', 'Vite'] },
//     { title: 'Management State', techs: ['Zustand', 'Context Api'] },
//     { title: 'Tests', techs: ['Jest', 'Vitest'] },
//     { title: 'Forms & Validador', techs: ['Zod', 'Yup', 'React Hook Form'] },
//     { title: 'Styles', techs: ['Styled Components', 'Stitches', 'Tailwind'] },
//   ],
//   back: [
//     { title: 'Database', techs: ['SQL Server', 'Postgress', 'SQLite'] },
//     { title: 'Data Management', techs: ['Prisma', 'Fastify'] },
//     { title: 'Tests', techs: ['Jest', 'Vitest'] },
//     { title: 'Forms & Validador', techs: ['Zod', 'Yup', 'React Hook Form'] },
//     { title: 'Authorization', techs: ['JWT'] },
//   ],
//   mobile: [
//     { title: 'Ecosystem', techs: ['Expo'] },
//     { title: 'Navigator', techs: ['Stack Navigator', 'Bottom Navigator'] },
//     { title: 'Component Library', techs: ['Native Base', 'Gluestack-ui'] },
//     { title: 'Forms & Validador', techs: ['Zod', 'Yup', 'React Hook Form'] },
//     { title: 'Styles', techs: ['Styled Components', 'Stitches', 'Tailwind'] },
//   ],
// }

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
    'Forms & Validador',
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
    'Forms & Validador',
    'Zod',
    'Yup',
    'React Hook Form',
    'Styled Components',
    'Stitches',
    'Tailwind',
  ],
}

export default function Skills() {
  const [techs, setTechs] = useState(techsList.front)
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
    <div className="flex flex-1 flex-col bg-secondary justify-center px-8 gap-10 ">
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
      {/* <div
        className={`gap-10 flex mt-4 justify-between max-w-7xl mx-auto`}
      ></div> */}
    </div>
  )
}
