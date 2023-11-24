'use client'
import { BasePageProps } from '@/utils/BaseComponent'
import WorkItem from './WorkItem'
import { ProjectProps, getRepos } from '@/api/repos'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/PageContext'

export function Works({ active, secondActive, ...props }: BasePageProps) {
  const [repos, setRepos] = useState<ProjectProps[]>([])

  const { messages } = useContext(ThemeContext)

  async function getReposRequest() {
    const res: ProjectProps[] = await getRepos()
    if (res) {
      return setRepos(res)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getReposRequest()
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div
      className={`${active && 'z-40 flex'} ${secondActive && 'z-20 flex'} ${
        !active && !secondActive && 'hidden'
      } w-[100%] flex-col  absolute bg-secondary text-white p-8  justify-center items-center h-screen 
      transition-transform animate-changePage`}
      {...props}
    >
      <h2 className="font-bold text-2xl py-8 text-white md:text-4xl">
        {messages.lang === 'pt-BR' ? 'Projetos' : 'Projects'}
      </h2>
      <ul className="grid grid-cols-2 gap-4 lg:flex md:gap-8 flex-wrap lg:flex-1 items-center justify-center">
        {repos &&
          repos.map((repo) => (
            <WorkItem
              desc={repo.description}
              title={repo.name}
              key={repo.name}
              techs={repo.language}
              link={repo.link}
            />
          ))}
      </ul>
    </div>
  )
}
