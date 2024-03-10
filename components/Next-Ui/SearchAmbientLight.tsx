import React from 'react'

function SearchAmbientLight() {
  return (
    <>
       <div
          aria-hidden="true"
          className="pointer-events-none  absolute inset-x-0 md:inset-x-[21rem] -top-24 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 41.6%, 97.5% 26.9%, 75.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 12.1% 97.7%, 87.1% 44.1%)",
            }}
            className="relative left-[calc(10%-10rem)] aspect-[1155/678] w-[34.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5870af] to-[#b01d49] opacity-70"
          />
        </div>


    </>
  )
}

export default SearchAmbientLight