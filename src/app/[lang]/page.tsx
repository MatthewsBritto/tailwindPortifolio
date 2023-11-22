'use client'
import Aside from '@/components/Aside'
import MainContainer from '@/components/MainContainer'
import { ThemeContext } from '@/context/PageContext'
import { defaultDictionary } from '@/dictionaries/default-dictionaries'
import { useContext, useEffect } from 'react'

type LangProps = 'pt-BR' | 'en-US'

export default function Page({ params }: { params: { lang: LangProps } }) {
  // const messages = defaultDictionary[`${params.lang}`]

  const { getLangFromMessages } = useContext(ThemeContext)

  useEffect(() => {
    getLangFromMessages(params.lang)
  }, [])

  return (
    <div className="absolute h-screen w-screen overflow-hidden">
      <Aside />
      <div className="lg:relative lg:left-[18rem] lg:w-[calc(100%-288px)] transition-transform animate-changePage h-screen">
        <MainContainer />
      </div>
    </div>
  )
}
