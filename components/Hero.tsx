import Image from "next/image"
import React from "react"

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat  flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 bg-black  ">
      <div className="flex  justify-center items-center object-cover">
        <Image
          className="rotate-180"
          src={"/image/volume-lp-background-ice.jpg"}
          height={100}
          width={100}
          quality={100}
          alt="cover"
        />
        <h1 className="abssolute">Volume</h1>
      </div>
    </header>
  )
}

export default Hero
