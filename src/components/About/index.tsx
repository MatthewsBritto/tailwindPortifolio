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
      } flex flex-col absolute bg-secondary text-white py-8 px-4 smPhone:px-5 xl:px-8 justify-center items-center h-screen 
      transition-transform animate-changePage`}
      {...props}
    >
      <div className="">
        <h2 className="font-bold mt-10 text-xl mdPhone:text-2xl sm:text-4xl mb-1 mdPhone:mb-4  lg:mb-8  xl:mt-0">
          {' '}
          {messages.who}
        </h2>
        <p className="text-sm mdPhone:text-base sm:text-2xl lg:text-xl xl:text-2xl xl:pr-12">
          {messages.aboutDescription}
        </p>
      </div>
      <div className="mt-2 smPhone:mt-4 mdPhone:mt-6 sm:mt-14 w-full">
        <h2 className="text-xl mdPhone:text-2xl font-semibold sm:text-3xl">
          {messages.hobbies}
        </h2>

        <ul className="grid grid-cols-3 mt-2 mdPhone:mt-4 gap-2 lg:gap-10 sm:mt-8 ">
          <HoobieItem name="FaGamepad" title="Games" />

          <HoobieItem
            name="FaGuitar"
            title={messages.lang === 'pt-BR' ? 'Musica' : 'Music'}
          />
          <HoobieItem
            name="FaMedal"
            title={messages.lang === 'pt-BR' ? 'Musica' : 'Music'}
          />
        </ul>
      </div>
    </div>
  )
}
