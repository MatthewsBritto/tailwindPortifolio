import Aside from '@/components/Aside'
import MainContainer from '@/components/MainContainer'

export default function Page() {
  return (
    <div className="absolute h-screen w-screen overflow-hidden">
      <Aside />
      <div className="relative left-[18rem] w-[calc(100%-288px)] transition-transform animate-changePage h-screen">
        <MainContainer />
      </div>
    </div>
  )
}
