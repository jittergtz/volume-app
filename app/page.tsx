import HeroLp from "@/components/marketing/HeroLp"
import { FloatingNavComp } from "@/components/marketing/ui/Floating-navbar"
import { IconHome, IconMessage, IconNews, IconUser } from "@tabler/icons-react"
import GradientFirst from "@/components/marketing/GradientFirst"
import GridOne from "@/components/marketing/GridOne"
import GridImgLp from "@/components/Next-Ui/GridImgLp"
import TextReveal from "@/components/marketing/TextReveal"
import GradientAnimated from "@/components/marketing/ui/GradientAnimated"
import { LampDemo } from "@/components/marketing/LampDemo"
import { EmailNewsletter } from "@/components/marketing/EmailNewsletter"
import Footer from "@/components/marketing/Footer"
import { Image } from "@nextui-org/react"
import { ProductTab } from "@/components/marketing/ProductTab"
import HeadingText from "@/components/marketing/HeadingText"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroImg from "@/components/marketing/HeroImg"
import InfoText from "@/components/marketing/InfoText"
import FooterText from "@/components/marketing/FooterText"
import Nav from "@/components/marketing/Nav"
import CardLP from "@/components/marketing/CardLP"
import SectionA from "@/components/marketing/ui/SectionA"
import SectionB from "@/components/marketing/ui/SectionB"

export default function Home() {


  return (
    <main className="bg-neutral-100  w-full ">
  
      
        <Nav />
   

      <HeroLp />

      <SectionA/>

      <SectionB/>
     

     <Footer/>

    
    </main>
  )
}
