import { MissingStaticPage } from "next/dist/shared/lib/utils"
import Image from "next/image"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { Button } from "@nextui-org/react"
import CardLP from "./components/marketing/CardLP"
import { BsSoundwave } from "react-icons/bs"
import AccordionCard from "./components/Next-Ui/Accordion"
import ChipNews from "./components/Next-Ui/ChipNews"

export default function Home() {

  return (
    <main>
      <div className="h-screen relative">
        <Image
          className="object-cover w-full h-full rotate-180"
          src={"/image/volume-lp-background-Ice.jpg"}
          layout="fill"
          quality={100}
          alt="cover"
        />

        <div className="absolute justify-center  opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        
          <div className="flex gap-5 flex-col items-center justify-center">
            <ChipNews/>
            <BsSoundwave className="text-neutral-300 h-28 w-28 opacity-80" />
          </div>
          <h1 className="text-7xl text-center sm:text-8xl lg:text-9xl tracking-tighter sm:font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100  to-neutral-300 ">
            Volume
          </h1>
          <p className="text-lg text-neutral-300 opacity-70 text-center  line-clamp-3">
            Streame gratis musik überall und jedezeit. rgeergrg eberb erb reebr
            erber
          </p>
          <div className="flex justify-center mt-5 gap-5 ">
            <Button variant="shadow" size="lg">
              Starten
            </Button>
            <Button variant="shadow" color="primary" size="lg">
              Premium
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#080808] flex justify-center pb-20">
        <h1
          className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text 
        bg-gradient-to-l from-blue-100 to-neutral-400 "
        >
          Playlisten
        </h1>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-40 z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#830eea] to-[#974fee] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[30rem] lg:top-[40rem] transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0239ff] to-[#1f67eb] opacity-30 left-[calc(70%-30rem)] w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="bg-[#080808] p-4 flex justify-center gap-4 pb-48">
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
