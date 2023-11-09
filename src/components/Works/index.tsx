import React from 'react'
import WorkItem from './WorkItem'

export default function Works() {
  return (
    <div className="flex flex-1 flex-col bg-secondary p-8 ">
      <WorkItem
        title="Filmes"
        desc="Filmes de terror"
        techs="Styled , Tailwind, Next"
      />
    </div>
  )
}
