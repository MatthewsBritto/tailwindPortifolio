/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import SvgImage from '@/assets/programing.svg'
import { useContext, useEffect, useState } from 'react'
import { BasePageProps } from '@/utils/BaseComponent'
import { ThemeContext } from '@/context/PageContext'

export default function Home({
  active,
  secondActive,
  ...props
}: BasePageProps) {
  const techs = ['Front-end', 'Back-end', 'Mobile']
  const [change, setChange] = useState(false)
  const [word, setWord] = useState(techs[0])

  const { messages, changePage } = useContext(ThemeContext)
  const teste = messages.lang === 'pt-BR' ? 'sobre' : 'about'

  async function writeOnScreen(word: string, i = 0) {
    if (i <= word.length) {
      setWord(word.slice(0, i + 1))
      setTimeout(() => writeOnScreen(word, i + 1), 150)
    }
  }

  async function RepeatCycle() {
    for (const tech in techs) {
      writeOnScreen(techs[tech])
      await new Promise((resolve) => setTimeout(resolve, 2500))
    }
    setChange(!change)
  }

  useEffect(() => {
    RepeatCycle()
  }, [change])

  return (
    <div
      className={`${active && 'z-40 flex'} ${secondActive && 'z-20 flex'} ${
        !active && !secondActive && 'hidden'
      }
       flex flex-col justify-center absolute h-screen items-center transition-transform 
      animate-changePage w-full gap-16 bg-secondary`}
      {...props}
    >
      <div>
        <h1 className="text-5xl leading-10 tracking-wider mdPhone:text-6xl font-bold p-5 text-white">
          {messages.name}
        </h1>
        <h2 className="px-6 mdPhone:text-xl font-semibold text-white">
          {`${messages.description} ${messages.category} ${word} `}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={SvgImage}
          alt=""
          className="w-72 mdPhone:w-96 mb-14"
          priority
        />
        <button
          className="py-4 px-12 bg-primary rounded-full font-bold text-white"
          onClick={() => changePage(teste)}
        >
          {messages.btnAction}
        </button>
      </div>
    </div>
  )
}
