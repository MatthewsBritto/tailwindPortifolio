'use client'
import React, { useContext } from 'react'
import Home from '../Home'
import About from '../About'
import Skills from '../Skills'
import Contact from '../Contact'
import { ThemeContext } from '@/context/PageContext'
import { Works } from '../Works'

export default function MainContainer() {
  const { changePage, currentPage, secondPage } = useContext(ThemeContext)

  return (
    <div className="">
      <Home
        active={currentPage === 'home'}
        secondActive={secondPage === 'home'}
      />
      <About
        active={currentPage === 'about' || currentPage === 'sobre'}
        secondActive={secondPage === 'about' || secondPage === 'sobre'}
      />
      <Skills
        active={currentPage === 'skills' || currentPage === 'habilidades'}
        secondActive={secondPage === 'skills' || secondPage === 'habilidades'}
      />
      {/* <Works
        active={currentPage === 'works' || currentPage === 'trabalhos'}
        secondActive={secondPage === 'works'|| secondPage === 'trabalhos'}
      /> */}
      <Contact
        active={currentPage === 'contact' || currentPage === 'contato'}
        secondActive={secondPage === 'contact' || secondPage === 'contato'}
      />
    </div>
  )
}
