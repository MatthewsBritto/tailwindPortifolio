import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa6'
import TechCard from './TechCard'

export default function Skills() {
  return (
    <div className="flex flex-1 flex-col bg-secondary p-10">
      <div>
        <h2 className="font-bold text-white text-4xl">Techs</h2>
        <TechCard icon={'FaReact'} techName="React" />
        <TechCard icon={'FaNodeJs'} techName="Node Js" />
        <TechCard icon={'FaReact'} techName="React Native" />
      </div>
      <div>
        <h2 className="font-bold text-white text-4xl">Soft skills</h2>
      </div>
    </div>
  )
}
