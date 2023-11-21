import Aside from '@/components/Aside'
import MainContainer from '@/components/MainContainer'

export default function Page({ params }: { params: { lang: string } }) {
  return (
    <div className="absolute h-screen w-screen overflow-hidden">
      <Aside />
      {/* <div className="lg:relative lg:left-[18rem] lg:w-[calc(100%-288px)] transition-transform animate-changePage h-screen">
        <MainContainer />
      </div> */}
      <h1>{JSON.stringify(params)}</h1>
    </div>
  )
}
