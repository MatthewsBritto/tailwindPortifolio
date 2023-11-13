'use client'
import { createContext, useState } from 'react'

interface PageContextProps {
  currentPage: string
  secondPage: string
  changePage: (page: string) => void
}

export const ThemeContext = createContext<PageContextProps>({
  currentPage: 'home',
} as PageContextProps)

interface IPageProps {
  children: React.ReactNode
}

export function PageProvider({ children }: IPageProps) {
  const [currentPage, setCurrentPage] = useState('home')
  const [secondPage, setSecondPage] = useState('')

  function changePage(page: string) {
    if (page !== currentPage) {
      setSecondPage(currentPage)
      setCurrentPage(page)
    }
  }

  return (
    <ThemeContext.Provider value={{ currentPage, secondPage, changePage }}>
      {children}
    </ThemeContext.Provider>
  )
}
