import React from 'react'
import { VelocityScroll } from './textXrotate'
import { OrbitingCircleFinal } from './FInalGlobe'

interface gridObject {
  name: string,
  description: string;
}


function SectionB() {


  const grid = [
    {
        name: "Speed",
        description: "lorem inu thus in the taoe de one ah desta in"
    },
    {
          name: "Richness",
        description: "lorem inu thus in the taoe de one ah desta in"
    },
    {
          name: "contrast",
        description: "lorem inu thus in the taoe de one ah desta in"
    },
    {
          name: "convert",
        description: "lorem inu thus in the taoe de one ah desta in"
    }
]



  return (
    <div className='h-[80vh] bg-black '>
            <div className="pt-20">
            <VelocityScroll
            text="Schneller besser Musik finden"
            default_velocity={5}
            className="font-display  text-center text-4xl  tracking-[-0.02em]  drop-shadow-sm: text-transparent bg-clip-text bg-gradient-to-tr from-orange-300 to-purple-600 md:text-7xl md:leading-[5rem]"/>
            </div>

            <div className='flex justify-center mt-20'>
            <div className='w-full max-w-5xl flex justify-center'>
        <section className=' grid  gap-5 grid-cols-1 sm:grid-cols-2 '>
            {grid.map((data: gridObject) => (
               <div key={data.name} className='bg-gradient-to-bl text-2xl from-neutral-900 to-black p-5 text-neutral-200 border border-neutral-800 h-72 w-full rounded-3xl'>
               {data.name}
               <p className='text-neutral-400 text-lg mt-5'>
                {data.description}
               </p>
              </div>
            ))}
           
        </section>
    </div>
    </div>
    </div>
  )
}

export default SectionB