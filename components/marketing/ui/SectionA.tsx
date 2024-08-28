import React from 'react'
import TextReveal from './textReveal';



interface gridObject {
    name: string,
    description: string;
}

function SectionA() {


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
    <div className='w-full  z-50 bg-black p-5 flex items-center justify-center '>
    <div className='w-full max-w-5xl flex flex-col gap-20 items-center'>
       
       <div className='w-full border border-neutral-900  overflow-hidden bg-black rounded-xl '>
      <video
        loop
        muted
        autoPlay
        playsInline
        className='w-full h-auto pointer-events-none'>
        <source type='video/mp4' src='/image/io.mp4' />
      </video>
       </div>



       
    </div>
        
    </div>
  )
}

export default SectionA