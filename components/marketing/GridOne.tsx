import { Chip, Image } from "@nextui-org/react"
import React from "react"

function GridOne() {
  return (


    <div className="flex flex-col gap-1">
            <Chip
        variant="shadow"
        classNames={{
          base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
          content: "drop-shadow shadow-black text-white",
        }}
      >
        Neu
      </Chip>
  
    <div
      className="flex flex-col bg-gradient-to-tr from-neutral-900 to-neutral-950 items-center py-3 px-1 lg:p-0 z-40  border border-neutral-900  shadow rounded-xl 
     "
    >

      <div className="flex gap-2">
        <div
          className="flex flex-col  justify-center pl-3  z-50 text-4xl lg:text-5xl text-transparent
        bg-clip-text bg-gradient-to-r from-neutral-300  to-neutral-500 w-48 lg:ml-5
        "
        >
          Volume{" "}
          <p className="text-xl  line-clamp-3">
            Jetzt auch als Web App verfügbar!
          </p>
        </div>

        <div
          className=" flex items-center  ml-auto lg:p-4
        "
        >
          <Image
            isBlurred
            alt="Volume app icon"
            src="icons/volume-icon-pwa.png"
            className="w-28 h-28 lg:w-36 lg:h-36"
          />
        </div>
        <div id="divInstallApp"></div>
      </div>
    </div>
    </div>
  )
}

export default GridOne
