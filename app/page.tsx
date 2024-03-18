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
      <FloatingNavComp navItems={navItems} />

      <HeroLp />

      <div className="flex justify-center p-4">
        <GridOne />
      </div>

      <div className="flex justify-center ">
        <GradientFirst
          text="Einfacher Musik finden die dir gefällt"
          classNames="text-transparent bg-clip-text bg-gradient-to-l from-pink-300 to-pink-400"
          imgValue="https://e-cdns-images.dzcdn.net/images/cover/4ba495b1f2534a515f431dba70006972/1000x1000-000000-80-0-0.jpg"
        />
      </div>

      <div className="flex justify-center py-10 bg-black">
        <GridImgLp />
      </div>

      <div className="flex justify-center bg-black p-5">
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

      <div className=" bg-black">
        <LampDemo />
      </div>

      <div className="flex justify-center   bg-black">
        <div className="flex justify-start max-w-4xl px-5 sm:mx-20">
          <TextReveal
            color="text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-blue-300 "
            text=" 2Lorem ipsum dolor sit amet consectetur, 
         uaerat iste est icing elit. Accusamus assumenda, ipsum voluptatibus 
         eveniet possimus expedita tempora nihil. Quos expedita impedit
          at laudantium architecto aperiam num"
          />
        </div>
      </div>

      <div className="flex justify-center bg-black ">
        <GradientFirst
          text="Das ist mein Geschmack!"
          classNames="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400"
          imgValue="https://e-cdns-images.dzcdn.net/images/cover/bd7465c9bc2e952c83c7f168579aefcb/1000x1000-000000-80-0-0.jpg"
        />
      </div>

      <div>
        <EmailNewsletter />
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  )
}
