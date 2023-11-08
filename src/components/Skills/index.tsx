'use client'
import React, { useState } from 'react'
import TechCard from './TechCard'
import ListTechs from './ListTechs'

const techsList = {
  front: [
    { title: 'Frameworks', techs: ['Next Js', 'Vite'] },
    { title: 'Management State', techs: ['Zustand', 'Context Api'] },
    { title: 'Tests', techs: ['Jest', 'Vitest'] },
    { title: 'Forms & Validador', techs: ['Zod', 'Yup', 'React Hook Form'] },
    { title: 'Styles', techs: ['Styled Components', 'Stitches', 'Tailwind'] },
  ],
  back: [
    { title: 'Database', techs: ['SQL Server', 'Postgress', 'SQLite'] },
    { title: 'Data Management', techs: ['Prisma', 'Fastify'] },
    { title: 'Tests', techs: ['Jest', 'Vitest'] },
    { title: 'Forms & Validador', techs: ['Zod', 'Yup', 'React Hook Form'] },
    { title: 'Authorization', techs: ['JWT'] },
  ],
  mobile: [
    { title: 'Ecosystem', techs: ['Expo'] },
    { title: 'Navigator', techs: ['Stack Navigator', 'Bottom Navigator'] },
    { title: 'Component Library', techs: ['Native Base', 'Gluestack-ui'] },
    { title: 'Forms & Validador', techs: ['Zod', 'Yup', 'React Hook Form'] },
    { title: 'Styles', techs: ['Styled Components', 'Stitches', 'Tailwind'] },
  ],
}

export default function Skills() {
  const [techs, setTechs] = useState(techsList.front)

  return (
    <div className="flex flex-1 flex-col bg-secondary p-8 justify-between">
      <h2 className="font-bold text-white text-4xl">Techs</h2>
      <div className="flex flex-1 flex-col bg-primary rounded-md mt-4 min-w-[500px] max-w-screen-2xl p-4 mx-auto">
        {techs &&
          techs.map((item) => (
            <ListTechs key={item.title} title={item.title} techs={item.techs} />
          ))}
      </div>
      <div className={`gap-10 flex mt-4 justify-between max-w-7xl mx-auto`}>
        <TechCard
          icon={'FaReact'}
          techName="React"
          title="Front-end"
          onClick={() => setTechs(techsList.front)}
          active={techs === techsList.front}
        />
        <TechCard
          icon={'FaNodeJs'}
          techName="Node Js"
          title="Back-end"
          onClick={() => setTechs(techsList.back)}
          active={techs === techsList.back}
        />
        <TechCard
          icon={'FaReact'}
          techName="React Native"
          title="Mobile"
          onClick={() => setTechs(techsList.mobile)}
          active={techs === techsList.mobile}
        />
      </div>
    </div>
  )
}
