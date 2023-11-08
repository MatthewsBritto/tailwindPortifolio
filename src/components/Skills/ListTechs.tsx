export type ListTechsProps = {
  title: string
  techs: string[]
}

export default function ListTechs({ title, techs }: ListTechsProps) {
  return (
    <div className="flex flex-col flex-1">
      <h2 className="text-white font-semibold text-xl py-1  border-b-2 border-white">
        {title}
      </h2>
      <ul className="text-white text-base flex gap-4 py-4  justify-evenly ">
        {techs && techs.map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
    </div>
  )
}
