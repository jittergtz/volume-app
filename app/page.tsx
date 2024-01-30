import { MissingStaticPage } from "next/dist/shared/lib/utils"

import Hero from "../components/Hero"
import Navbar from "../components/marketing/NavbarLp"
import { Button } from "@nextui-org/react"
import CardLP from "../components/marketing/CardLP"
import { BsSoundwave } from "react-icons/bs"
import AccordionCard from "../components/Next-Ui/Accordion"
import ChipNews from "../components/Next-Ui/ChipNews"
import Link from "next/link"
import GridImgLp from "@/components/Next-Ui/GridImgLp"



export default function Home() {
  return (
    <main>
      <Navbar />

      <div className=" 
       h-screen relative">
        <div className="flex justify-center">
        <img
        alt="Landing page background"
        className=" z-0 backgroundLP mt-10 object-cover"
        src="/image/gif5.GIF"
      />

        </div>
        <div className="flex justify-center flex-col">
        <section className="h-[80vh]  backgroundLP w-screen z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-700 from-10% to-black to-90%"></section>
        <section className="w-full h-96 bg-black -mt-96 z-0 "></section>
        </div>
       

        <div className="absolute justify-center  top-1/2 left-1/2 -mt-20 sm:mt-0 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex flex-col items-center justify-center">
            <ChipNews/>
            <BsSoundwave className="text-neutral-100 w-28 h-28 " />
          </div>
          <h1 className="text-7xl z-50 text-center md:text-9xl tracking-tighter sm:font-semibold text-neutral-200 ">
            Volume
          </h1>
          <div className="flex justify-center">
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400
          opacity-70 text-center w-64 line-clamp-3">
            Streame gratis musik überall und jedezeit. jetzt noch besser
          </p>
          </div>
          <div className="flex justify-center mt-5 gap-5 ">
   
             
              <Button
            className="bg-black rounded-2xl p-3 px-5
            shadow-md  ">
              <Link href={"/dashboard"}>
               Starten
              </Link>
            </Button>
            <Button
            className="bg-white/10 backdrop-blur-md rounded-2xl p-3 px-5
            shadow-md  ">
             Premium
            </Button>
          </div>
        </div>
      </div>



      <div className=" flex justify-center lg:mt-20 lg:pt-40 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-neutral-300 ">
        <GridImgLp/>
        </h1>
      </div>

  

      <div className=" p-4 flex justify-center gap-4 pb-48">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:p-10 ">
          <CardLP />
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center text-neutral-200 gap-8 p-4">
        <h1 className="text-center text-large">Alles über Volume</h1>
        <AccordionCard />
      </div>

      <footer className="h-96 bg-gradient-to-t from-blue-600 via-black to-black">
        <div></div>
      </footer>
  
    </main>
  )
}
