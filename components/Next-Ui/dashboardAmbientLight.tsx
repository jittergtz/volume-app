import React from "react"

function DashboardAmbientLight() {
  return (
    <>
      <div
        className="md:flex absolute inset-0 z-0  hidden  rounded-lg w-full h-56 
       bg-gradient-to-b from-neutral-300/20  "
      ></div>
      <div
        className="absolute md:hidden flex z-0 blur-xl opacity-60  w-full rounded-lg h-48 
       bg-gradient-to-b from-neutral-300/20  "
      ></div>
    </>
  )
}

export default DashboardAmbientLight
