/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import SvgImage from '@/assets/programming.svg'
import { useEffect, useState } from 'react'

export default function Home() {
  const techs = ['Front-end', 'Back-end', 'Mobile']

  const [indice, setIndice] = useState(0)
  const [word, setWord] = useState(techs[indice])

  function writeOnScreen(word: string, i = 0) {
    if (i <= word.length) {
      setWord(word.slice(0, i + 1))
      setTimeout(() => writeOnScreen(word, i + 1), 100)
    }
  }

  useEffect(() => {
    setTimeout(() => writeOnScreen(word))
  }, [indice])

  return (
    <div className="p-4 flex flex-col flex-1 items-center h-screen gap-8 bg-secondary">
      <div className="  mt-16">
        <h1 className="text-6xl font-bold p-2 text-white">Matthews Britto</h1>
        <h2 className="px-4 text-xl font-semibold text-white">
          I'm a {word} Developer
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <Image src={SvgImage} alt="" className="w-96 mb-14" priority />
        <button
          className="py-4 px-12 bg-primary rounded-full font-bold text-white"
          onClick={() => changeWord()}
        >
          Avançar
        </button>
      </div>
    </div>
  )
}
