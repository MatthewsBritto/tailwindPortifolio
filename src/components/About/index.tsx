import { BasePageProps } from '@/utils/BaseComponent'
import HoobieItem from './Item'

export default function index({
  active,
  secondActive,
  ...props
}: BasePageProps) {
  return (
    <div
      className={`${active && 'z-40 flex'} ${secondActive && 'z-20 flex'} ${
        !active && !secondActive && 'hidden'
      } flex flex-col absolute bg-secondary text-white p-8  justify-center items-center h-screen 
      transition-transform animate-changePage`}
      {...props}
    >
      <div className=" items-star">
        <h2 className="font-bold text-3xl mb-8 ">
          Who Am <span className="text-primary">I</span>
        </h2>
        <p className="leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          numquam fugiat. Accusamus, fuga mollitia maiores id nisi aut magnam
          veniam, quisquam tempora iure sit animi neque consectetur inventore.
          Doloribus, earum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Officia, numquam fugiat. Accusamus, fuga mollitia maiores id
          nisi aut magnam veniam, quisquam tempora iure sit animi neque
          consectetur inventore. Doloribus, earum.
        </p>
      </div>
      <div className=" mt-14 w-full">
        <h2 className="text-2xl font-semibold">My Hobbies</h2>
        <ul className="grid grid-cols-3 gap-10 mt-8 ">
          <HoobieItem name="FaGamepad" title="Games" />
          <HoobieItem name="FaGuitar" title="Music" />
          <HoobieItem name="FaMedal" title="Sports" />
        </ul>
      </div>
    </div>
  )
}
