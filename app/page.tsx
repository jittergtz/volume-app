import HeroLp from "@/components/marketing/HeroLp"

import Footer from "@/components/marketing/Footer"

import SectionA from "@/components/marketing/ui/SectionA"
import SectionB from "@/components/marketing/ui/SectionB"
import Nav from "@/components/marketing/Nav"
import { LampDemo } from "@/components/marketing/LampDemo"

export default function Home() {


  return (
    <main className="bg-neutral-10   w-full ">
  
        <Nav />
   

      <HeroLp />
      <LampDemo/>

      <SectionA/>

      <SectionB/>
     

     <Footer/>

    
    </main>
  )
}
