import { ThemeContext } from '@/context/PageContext'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

import { GiBrazilFlag } from 'react-icons/gi'
import { LiaFlagUsaSolid } from 'react-icons/lia'

export default function Switcher() {
  const { push } = useRouter()
  const { messages } = useContext(ThemeContext)

  return (
    // switch com formato de click

    // <div className="w-20 h-10 bg-white border-black rounded-full p-1 flex items-center absolute z-50 top-5 right-5 transition-all">
    //   <div
    //     onClick={() => setLang(!lang)}
    //     className={`w-[45%] rounded-full cursor-pointer bg-${
    //       lang ? 'green-500' : 'red-500'
    //     } 0 h-full relative flex items-center justify-center left-${
    //       lang ? '0' : '10'
    //     }`}
    //   >
    //     {lang ? (
    //       <GiBrazilFlag size={'1.5rem'} />
    //     ) : (
    //       <LiaFlagUsaSolid size={'1.5rem'} />
    //     )}
    //   </div>
    // </div>

    <select
      name="lang"
      id="lang"
      className="w-[100px] absolute z-50 top-5 right-5 p-1 rounded-sm cursor-pointer text-center"
      onChange={(e) => push(`/${e.target.value}`)}
    >
      <option value="">{messages.lang}</option>
      <option
        value="pt-BR"
        className={`${messages.lang === 'pt-BR' ? 'hidden' : ''}`}
      >
        pt-BR
      </option>
      <option
        value="en-US"
        className={`${messages.lang === 'en-US' ? 'hidden' : ''}`}
      >
        en-US
      </option>
    </select>
  )
}
