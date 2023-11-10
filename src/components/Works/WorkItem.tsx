import Capa from '@/assets/Capa.png'
import Image from 'next/image'

interface WorkItemProps {
  title: string
  desc: string
  techs: string
}

export default function WorkItem({ desc, techs, title }: WorkItemProps) {
  return (
    // colocar link para ver o projeto
    <li className="w-60 bg-primary rounded-md text-white cursor-pointer">
      <Image className="rounded-t-md" src={Capa} alt="" />
      <div className=" p-2 text-sm pt-2 flex flex-col gap-2">
        <h2 className="font-semibold capitalize">{title}</h2>
        <p className="overflow-hidden text-overflow-ellipsis whitespace-nowrap">
          {desc}
        </p>
        <p className="overflow-hidden text-overflow-ellipsis whitespace-nowrap">
          {techs}
        </p>
      </div>
    </li>
  )
}
