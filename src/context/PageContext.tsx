'use client'
import { createContext, useState } from 'react'

interface PageContextProps {
  currentPage: string
  changePage: (page: string) => void
}

export const ThemeContext = createContext<PageContextProps>({
  currentPage: 'home',
  changePage: () => {},
})

interface IPageProps {
  children: React.ReactNode
}

export function PageProvider({ children }: IPageProps) {
  const [currentPage, setCurrentPage] = useState('home')

  function changePage(page: string) {
    page !== currentPage && setCurrentPage(page)
  }

  return (
    <ThemeContext.Provider value={{ currentPage, changePage }}>
      {children}
    </ThemeContext.Provider>
  )
}
