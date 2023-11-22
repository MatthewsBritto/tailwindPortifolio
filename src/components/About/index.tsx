import { BasePageProps } from '@/utils/BaseComponent'
import HoobieItem from './Item'
import { ThemeContext } from '@/context/PageContext'
import { useContext } from 'react'

export default function About({
  active,
  secondActive,
  ...props
}: BasePageProps) {
  const { messages } = useContext(ThemeContext)

  return (
    <div
      className={`${active && 'z-40 flex'} ${secondActive && 'z-20 flex'} ${
        !active && !secondActive && 'hidden'
      } flex flex-col absolute bg-secondary text-white p-8  justify-center items-center h-screen 
      transition-transform animate-changePage`}
      {...props}
    >
      <div className=" items-star">
        <h2 className="font-bold text-3xl mb-8 ">{messages.who}</h2>
        <p className="leading-8">{messages.aboutDescription}</p>
      </div>
      <div className=" mt-14 w-full">
        <h2 className="text-2xl font-semibold">{messages.hobbies}</h2>
        <ul className="grid grid-cols-3 gap-10 mt-8 ">
          <HoobieItem name="FaGamepad" title="Games" />
          <HoobieItem name="FaGuitar" title="Music" />
          <HoobieItem name="FaMedal" title="Sports" />
        </ul>
      </div>
    </div>
  )
}
