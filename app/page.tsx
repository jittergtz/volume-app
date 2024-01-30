import { MissingStaticPage } from "next/dist/shared/lib/utils"
import Image from "next/image"
import Hero from "../components/Hero"
import Navbar from "../components/marketing/NavbarLp"
import { Button } from "@nextui-org/react"
import CardLP from "../components/marketing/CardLP"
import { BsSoundwave } from "react-icons/bs"
import AccordionCard from "../components/Next-Ui/Accordion"
import ChipNews from "../components/Next-Ui/ChipNews"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="h-screen relative">
          <div className="flex items-center justify-center ">
          <Image
          className="-mt-20 sm:-mt-36 overflow-hidden left-1/2"
          src={"/image/IMG_7672.JPG"}
          width={736}
          height={920}
          quality={100}
          alt="cover"
        />

          </div>

  
       


    

        <div className="absolute justify-center z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex flex-col items-center justify-center">
            <ChipNews />
            <BsSoundwave className="text-neutral-300/90 h-28 w-28" />
          </div>
          <h1 className="text-7xl z-50 text-center sm:text-8xl tracking-tighter sm:font-semibold text-neutral-300 ">
            Volume
          </h1>
          <div className="flex justify-center">
          <p className="text-md text-neutral-300 opacity-70 text-center w-72  line-clamp-3">
            Streame gratis musik überall und jedezeit. rgeergrg eberb erb reebr
            erber
          </p>
          </div>
          <div className="flex justify-center mt-5 gap-5 ">
            <Button variant="shadow" size="lg">
              <Link href={"/dashboard"}>Starten</Link>
            </Button>
            <Button variant="shadow" color="primary" size="lg">
              Premium
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#000000] flex justify-center pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-neutral-300 ">
          Playlisten
        </h1>
      </div>

      <div className=" p-4 flex justify-center gap-4 pb-48">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:p-10 ">
          <CardLP />
        </div>
      </div>
      <div className="bg-[#080808] flex flex-col items-center justify-center text-neutral-200 gap-8 p-4">
        <h1 className="text-center text-large">Alles über Volume</h1>
        <AccordionCard />
      </div>

      <footer className="h-96 bg-gradient-to-t from-blue-600 via-[#080808] to-[#080808]">
        <div></div>
      </footer>
    </main>
  )
}
