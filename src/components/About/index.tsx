import HoobieItem from './Item'

export default function index() {
  return (
    <div className="flex flex-1 flex-col bg-secondary text-white p-8  justify-center items-center h-screen ">
      <div className="w-3/4 items-star">
        <h2 className="font-bold text-3xl mb-8 ">Who Am I</h2>
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
      <div className=" mt-14 w-3/4 ">
        <h2 className="text-2xl font-semibold">My Hobbies</h2>
        <ul className="grid grid-cols-3 gap-10 mt-8 ">
          <HoobieItem name="gamepad-2" title="Games" />
          <HoobieItem name="headphones" title="Music" />
          <HoobieItem name="medal" title="Sports" />
        </ul>
      </div>
    </div>
  )
}
