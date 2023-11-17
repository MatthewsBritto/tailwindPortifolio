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
        active={currentPage === 'about'}
        secondActive={secondPage === 'about'}
      />
      <Skills
        active={currentPage === 'skills'}
        secondActive={secondPage === 'skills'}
      />
      {/* <Works
        active={currentPage === 'works'}
        secondActive={secondPage === 'works'}
      /> */}
      <Contact
        active={currentPage === 'contact'}
        secondActive={secondPage === 'contact'}
      />
    </div>
  )
}
