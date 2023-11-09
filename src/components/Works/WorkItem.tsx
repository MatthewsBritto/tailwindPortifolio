import Capa from '@/assets/Capa.png'
import Image from 'next/image'

interface WorkItemProps {
  title: string
  desc: string
  techs: string
}

export default function WorkItem({ desc, techs, title }: WorkItemProps) {
  return (
    <>
      <h2 className="font-bold text-2xl py-4 text-white">Some Projects</h2>
      <ul>
        <li className="w-[350px] bg-primary rounded-md text-white">
          <Image className="rounded-t-md" src={Capa} alt="" />
          <div className=" p-2 text-sm pt-2 flex flex-col gap-2">
            <h2 className="font-semibold">{title}</h2>
            <p className="overflow-hidden text-overflow-ellipsis whitespace-nowrap">
              {desc}
            </p>
            <p className="overflow-hidden text-overflow-ellipsis whitespace-nowrap">
              {techs}
            </p>
            <p></p>
          </div>
        </li>
      </ul>
    </>
  )
}
