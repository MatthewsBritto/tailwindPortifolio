import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa6'

export default function Skills() {
  return (
    <div className="flex flex-1 flex-col bg-secondary p-10">
      <div>
        <h2 className="font-bold text-white text-4xl">Techs</h2>
        <div className="p-4 mt-4">
          <h2 className="font-semibold text-white text-2xl">Front-end</h2>
          <div className="flex flex-col items-center justify-center mt-2 text-white p-4 bg-primary w-28 rounded text-center">
            <FaReact size="3rem" />
            <span className="text-md pt-4">React</span>
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-white text-2xl">Back-end</h2>
          <div className="flex flex-col items-center justify-center mt-2 text-white p-4 bg-primary w-28 rounded text-center">
            <FaNodeJs size="2rem" />
            <span className="text-md pt-4">Node Js</span>
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-white text-2xl">Mobile-end</h2>
          <div className="flex flex-col items-center justify-center mt-2 text-white p-4 bg-primary w-28 rounded text-center">
            <FaReact size="2rem" />
            <span className="text-md pt-4">React Native</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-white text-4xl">Soft skills</h2>
      </div>
    </div>
  )
}
