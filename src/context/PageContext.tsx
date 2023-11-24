'use client'
import { Locale } from '@/middleware'
import { IconAsideProps } from '@/components/Aside/IconItem'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionarie-client'
import { createContext, useState } from 'react'

export type ListItemProps = {
  name: any
  title: string
}

export type MessageProps = {
  lang: string
  name: string
  description: string
  category: string
  listLink: ListItemProps[]
  btnAction: string
  hobbies: string
  who: string
  aboutDescription: string
  my: string
  skills: string
  as: string
  dev: string
  lets: string
  talk: string
  Labelname: string
  Labelemail: string
  Labelmessage: string
}

interface PageContextProps {
  currentPage: string
  secondPage: string
  changePage: (page: string) => void
  messages: MessageProps
  getLangFromMessages: (params: string) => void
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
  const [messages, setMessages] = useState<any>({} as MessageProps)

  function changePage(page: string) {
    if (page !== currentPage) {
      setSecondPage(currentPage)
      setCurrentPage(page)
    }
  }

  function getLangFromMessages(params: string) {
    const res = getDictionaryUseClient(params as Locale)
    res && setMessages(res.site)
  }

  return (
    <ThemeContext.Provider
      value={{
        currentPage,
        secondPage,
        changePage,
        messages,
        getLangFromMessages,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
