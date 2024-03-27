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

export default function Home() {
  const navItems = [
    {
      name: "Volume",
      link: "/dashboard",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Neues",
      link: "/news",
      icon: <IconNews className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <main className="bg-gray-950 ">
      <div className="felx z-50">
        <FloatingNavComp navItems={navItems} />
      </div>

      <HeroLp />

      <div className="flex justify-center relative p-5 z-50">
       <HeroImg/>
      </div>

      <div className="flex justify-center  rounded-t-[5rem] bg-gradient-to-b from-gray-950 to-black ">
        <GradientFirst
          text="Einfacher Musik finden die dir gefällt"
          classNames="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-500"
          imgValue="https://e-cdns-images.dzcdn.net/images/cover/4ba495b1f2534a515f431dba70006972/1000x1000-000000-80-0-0.jpg"
        />
      </div>

      <div className="flex justify-center pb-10 bg-black">
        <HeadingText />
      </div>

      <div className="flex justify-center py-10 bg-black">
        <GridImgLp />
      </div>

      {/* scroll reveal text 1 */}
      <div className="flex justify-center bg-black  p-5">
        <div className="max-w-[800px]">
          <TextReveal
            color="text-neutral-100"
            text=" 2Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Accusamus assumenda, ipsum voluptatibus 
          eveniet possimus expedita tempora nihil. Quos expedita impedit
           at laudantium architecto aperiam numquam, et possimus quaerat iste est?"
          />
        </div>
      </div>

      <div className="bg-black ">
        <LampDemo />
      </div>

      {/* scroll reveal text 2 */}
      <div className="flex justify-center  ">
        <div className="flex justify-start max-w-4xl px-5 sm:mx-20">
          <TextReveal
            color="text-indigo-300 "
            text=" 2Lorem ipsum dolor sit amet consectetur, 
         uaerat iste est icing elit. Accusamus assumenda, ipsum voluptatibus 
         eveniet possimus expedita tempora nihil. Quos expedita impedit
          at laudantium architecto aperiam num"
          />
        </div>
      </div>

      <div className="flex justify-center pb-40 p-4">
        <GridOne />
      </div>

      <div className="flex justify-center pb-40">
        <ProductTab />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  )
}
