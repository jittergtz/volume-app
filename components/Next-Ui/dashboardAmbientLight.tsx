import React from "react"

function DashboardAmbientLight() {
  return (
    <>
      <div
        className="lg:flex absolute inset-0 z-0  hidden  rounded-lg w-full h-48 
       bg-gradient-to-b from-indigo-300/20  "
      ></div>
      <div
        className="absolute md:hidden top-5 right-3 w-screen lg:w-[40rem] h-28 ms:h-36 
       bg-gradient-to-b from-indigo-300/50 blur-xl md:blur-2xl"
      ></div>
    </>
  )
}

export default DashboardAmbientLight
