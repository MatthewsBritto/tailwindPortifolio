/* eslint-disable @next/next/no-img-element */
'use client'
import { FaGithub, FaLinkedinIn, FaBars, FaX } from 'react-icons/fa6'
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
  const { currentPage, changePage } = useContext(ThemeContext)

  const [toggleMenuActive, setToggleMenuActive] = useState(false)

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

      <div className="lg:hidden z-50 text-white absolute top-5 left-5 transition-all animate-disapear">
        <div onClick={() => setToggleMenuActive(true)}>
          <FaBars size={30} />
        </div>
        <div
          className={` ${
            !toggleMenuActive && 'hidden'
          } absolute top-[-1.25rem] left-[-1.25rem] w-screen h-screen bg-black z-40 p-4 animate-disapear`}
        >
          <div
            className="absolute flex w-screen"
            onClick={() => setToggleMenuActive(false)}
          >
            <FaX size={24} />
          </div>
          <ul className="w-1/2 text-lg font-bold text-white h-screen flex flex-col justify-center mx-auto items-center gap-6 animate-disapear">
            {listLinks &&
              listLinks.map(({ title, name }) => {
                return (
                  <MenuItem
                    key={title}
                    type={name}
                    active={currentPage === title}
                    title={title.toUpperCase()}
                    onClick={() => {
                      setToggleMenuActive(false)
                      changePage(title)
                    }}
                  />
                )
              })}
          </ul>
        </div>
      </div>
    </>
  )
}
