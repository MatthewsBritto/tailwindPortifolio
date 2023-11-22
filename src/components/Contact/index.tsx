'use client'
import { ThemeContext } from '@/context/PageContext'
import { BasePageProps } from '@/utils/BaseComponent'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FaWhatsapp } from 'react-icons/fa6'

type ContactFormProps = {
  name: string
  email: string
  message: string
}

export default function Contact({
  active,
  secondActive,
  ...props
}: BasePageProps) {
  const { register, handleSubmit } = useForm<ContactFormProps>()

  const { messages } = useContext(ThemeContext)

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div
      className={`${active && 'z-40 flex'} ${secondActive && 'z-20 flex'} ${
        !active && !secondActive && 'hidden'
      }
       flex-1 flex-col w-full h-screen absolute p-8 bg-secondary gap-10 justify-center items-center 
       transition-transform animate-changePage top-0
      `}
      {...props}
    >
      <h2 className="font-bold text-3xl text-white ">
        {messages.lets} <span className="text-primary">{messages.talk}</span>
      </h2>
      <div className="w-[350px]">
        <form
          className="flex flex-col flex-1 px-4 py-6  justify-center bg-primary text-white rounded-md"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col mb-4 gap-1">
            <label>{messages.Labelname}</label>
            <input
              className="rounded-md p-1 text-black outline-none"
              {...register('name')}
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label>E-mail</label>
            <input
              className="rounded-md p-1 text-black outline-none"
              {...register('email')}
              type="email"
            />
          </div>
          <div className="flex flex-col mb-4 gap-1 ">
            <label>{messages.Labelmessage}</label>
            <textarea
              className="rounded-md p-1 text-black outline-none"
              {...register('message')}
            />
          </div>
          <button
            className="px-6 py-2 bg-yellow-500 rounded-md font-semibold cursor-pointer"
            type="submit"
          >
            {messages.Labelname === 'name' ? 'Send' : 'Enviar'}
          </button>
        </form>
      </div>
      <button className="rounded-full absolute right-6 bottom-10 w-14 h-14 bg-green-600 text-white p-2 flex items-center justify-center cursor-pointer hover:scale-110 transition-all border border-white">
        <FaWhatsapp size={'2rem'} />
      </button>
    </div>
  )
}
