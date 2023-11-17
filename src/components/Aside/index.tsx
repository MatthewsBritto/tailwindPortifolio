/* eslint-disable @next/next/no-img-element */
'use client'
import { FaGithub, FaLinkedinIn, FaBars } from 'react-icons/fa6'
import MenuItem from './MenuItem'
import { useContext, useState } from 'react'
import { IconAsideProps } from './IconItem'
import { ThemeContext } from '@/context/PageContext'

interface ObjLink {
  name: IconAsideProps['type']

  title: string
}
const listLinks: ObjLink[] = [
  { name: 'FaHouseChimney', title: 'home' },
  { name: 'FaUser', title: 'about' },
  { name: 'FaBook', title: 'skills' },
  { name: 'FaBriefcase', title: 'works' },
  { name: 'FaPhone', title: 'contact' },
]

export default function Aside() {
  // const [currentTab, setCurrentTab] = useState('home')

  const { currentPage, changePage } = useContext(ThemeContext)

  return (
    <>
      <aside className="hidden lg:w-72 lg:absolute lg:z-50 lg:py-10 lg:h-screen lg:flex lg:flex-col lg:items-center lg:bg-primary lg:justify-evenly lg:border-r-2">
        <div className="space-y-20">
          <img
            src="https://github.com/MatthewsBritto.png"
            alt=""
            className="h-40 rounded-full border-2 "
          />

          <ul className="w-full space-y-7 text-lg font-bold p-4 text-white tracking-wide">
            {listLinks &&
              listLinks.map(({ title, name }) => {
                return (
                  <MenuItem
                    key={title}
                    type={name}
                    active={currentPage === title}
                    title={title.toUpperCase()}
                    onClick={() => changePage(title)}
                  />
                )
              })}
          </ul>
        </div>

        <footer className="flex space-x-6">
          <FaLinkedinIn
            className="text-white cursor-pointer hover:text-yellow-500 border rounded p-2 hover:border-yellow-500 selection:border-green-600"
            size={42}
          />

          <FaGithub
            className="text-white cursor-pointer hover:text-yellow-500 border rounded p-2 hover:border-yellow-500"
            size={42}
          />
        </footer>
      </aside>

      <div className="z-50 text-white absolute top-5 left-5">
        <FaBars size={30} />
        <div className="absolute top-[-1.25rem] left-[-1.25rem] w-screen h-screen bg-red-700">
          <ul className="w-1/2 text-lg font-bold text-white h-screen flex flex-col justify-center mx-auto bg-green-400">
            {listLinks &&
              listLinks.map(({ title, name }) => {
                return (
                  <MenuItem
                    key={title}
                    type={name}
                    active={currentPage === title}
                    title={title.toUpperCase()}
                    onClick={() => changePage(title)}
                  />
                )
              })}
          </ul>
        </div>
      </div>
    </>
  )
}
