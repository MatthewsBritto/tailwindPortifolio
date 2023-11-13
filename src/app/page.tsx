import About from '@/components/About'
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import { Works } from '@/components/Works'
import Contact from '@/components/Contact'
import Aside from '@/components/Aside'

export default function page() {
  // 18rem Aside

  return (
    <div className="absolute h-screen w-screen overflow-hidden">
      <Aside />
      <div className="relative left-[288px] w-[calc(100%-288px)]">
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
