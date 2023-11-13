'use client'
import About from '@/components/About'
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import { Works } from '@/components/Works'
import Contact from '@/components/Contact'
import Aside from '@/components/Aside'
import { useContext } from 'react'
import { ThemeContext } from '@/context/PageContext'

export default function Page() {
  const { changePage, currentPage, secondPage } = useContext(ThemeContext)

  return (
    <div className="absolute h-screen w-screen overflow-hidden">
      <Aside />
      <div className="relative left-[18rem] w-[calc(100%-288px)] transition-transform animate-changePage">
        <Home
          active={currentPage === 'home'}
          secondActive={secondPage === 'home'}
        />
        <About
          active={currentPage === 'about'}
          secondActive={secondPage === 'about'}
        />
        {/* <Works
          active={currentPage === 'works'}
          secondActive={secondPage === 'works'}
        /> */}
        <Skills
          active={currentPage === 'skills'}
          secondActive={secondPage === 'skills'}
        />
        <Contact
          active={currentPage === 'contact'}
          secondActive={secondPage === 'contact'}
        />
      </div>
    </div>
  )
}
