import WorkItem from './WorkItem'
import { ProjectProps, getRepos } from '@/api/repos'

export async function Works() {
  const repos: ProjectProps[] = await getRepos()

  return (
    <div className="flex flex-1 flex-col bg-secondary p-4 ">
      <h2 className="font-bold text-2xl py-8 text-white">Projects</h2>
      <ul className="flex gap-8 flex-wrap flex-1 items-center justify-center">
        {repos &&
          repos.map((repo) => (
            <WorkItem
              desc={repo.description}
              title={repo.name}
              key={repo.name}
              techs={repo.language}
            />
          ))}
      </ul>
    </div>
  )
}
