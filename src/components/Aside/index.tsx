/* eslint-disable @next/next/no-img-element */
'use client'
import { Linkedin, Github } from 'lucide-react'
import { MenuItem } from './MenuItem'
import { useState } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

type linksProps = {
  name: keyof typeof dynamicIconImports
  title: string
}[]

export default function Aside() {
  const [currentTab, setCurrentTab] = useState('home')

  const listLinks: linksProps = [
    { name: 'home', title: 'home' },
    { name: 'user', title: 'about' },
    { name: 'book-copy', title: 'skills' },
    { name: 'file', title: 'works' },
    { name: 'phone', title: 'Contact' },
  ]

  return (
    <aside className="w-72 py-10 h-screen flex flex-col items-center bg-primary justify-evenly border-r-2  border-r-[#6C63FF]">
      <div className="space-y-20">
        <img
          src="https://github.com/MatthewsBritto.png"
          alt=""
          className="h-40 rounded-full border border-[#6C63FF]"
        />

        <ul
          className="w-full space-y-7 text-lg font-bold p-4 text-white tracking-wide"
          onChange={() => setCurrentTab}
        >
          {/* {listLinks &&
            listLinks.map(({ title }) => {
              return (
                <MenuItem
                  key={title}
                  variant={currentTab === title ? 'active' : undefined}
                  active={currentTab === title}
                  title={title.toUpperCase()}
                  onClick={() => setCurrentTab(title)}
                />
              )
            })} */}
        </ul>
      </div>

      <footer className="flex space-x-6">
        <Linkedin
          className="text-white cursor-pointer hover:text-yellow-500 border rounded p-2 hover:border-yellow-500 selection:border-green-600"
          size={42}
        />

        <Github
          className="text-white cursor-pointer hover:text-yellow-500 border rounded p-2 hover:border-yellow-500"
          size={42}
        />
      </footer>
    </aside>
  )
}
