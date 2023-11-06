/* eslint-disable @next/next/no-img-element */

import {
  Home,
  User,
  File,
  BookCopy,
  Phone,
  Linkedin,
  Github,
} from 'lucide-react'

export default function Aside() {
  return (
    <aside className="w-72 py-10 h-screen flex flex-col items-center bg-primary justify-evenly">
      <div className="space-y-20">
        <img
          src="https://github.com/MatthewsBritto.png"
          alt=""
          className="h-40 rounded-full border border-[#6C63FF]"
        />

        <ul className="w-full space-y-7 text-lg font-bold p-4 text-white tracking-wide">
          <li className="flex justify-center gap-2 cursor-pointer hover:text-yellow-500">
            <Home />
            <h2>Home</h2>
          </li>
          <li className="flex  justify-center gap-2 cursor-pointer hover:text-yellow-500">
            <User />
            <h2>About</h2>
          </li>
          <li className="flex  justify-center gap-2 cursor-pointer hover:text-yellow-500">
            <BookCopy />
            <h2>Skills</h2>
          </li>
          <li className="flex  justify-center gap-2 cursor-pointer hover:text-yellow-500">
            <File />
            <h2>Works</h2>
          </li>
          <li className="flex justify-center gap-2 cursor-pointer hover:text-yellow-500">
            <Phone />
            <h2>Phone</h2>
          </li>
        </ul>
      </div>

      <footer className="flex space-x-6">
        <Linkedin
          className="text-white cursor-pointer hover:text-yellow-500 border rounded p-2 hover:border-yellow-500"
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
