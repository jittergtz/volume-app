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
    <div className='min-h-[80vh] bg-black pb-20 p-5'>

      
            <div className="pt-20">
            <VelocityScroll
            text="Schneller besser Musik finden"
            default_velocity={5}
            className="font-display  text-center text-4xl  tracking-[-0.02em]  drop-shadow-sm: text-transparent bg-clip-text bg-gradient-to-tr from-orange-300 to-purple-600 md:text-7xl md:leading-[5rem]"/>
            </div>

  

            <div className='flex justify-center mt-20'>
            <div className='w-full max-w-5xl  flex flex-col gap-10 justify-center'>


      <div className='w-full mt-12  overflow-hidden bg-black rounded-3xl '>
      <video
        loop
        muted
        autoPlay
        playsInline
        className='w-full h-auto pointer-events-none'>
        <source type='video/mp4' src='/image/io.mp4' />
      </video>
       </div>


        <section className=' grid  gap-5 grid-cols-1 sm:grid-cols-2 '>
            {grid.map((data: gridObject) => (
               <div key={data.name} className='bg-gradient-to-bl text-2xl from-neutral-900 to-black hover:from-fuchsia-700/70 hover:to-red-400 hover:animate-appearance-in transition  p-5 text-neutral-200 border border-neutral-800 h-80 w-full rounded-3xl'>
               {data.name}
               <p className='text-neutral-400 text-lg '>
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