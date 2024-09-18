import React from 'react'
import TextReveal from './textReveal';



interface gridObject {
    name: string,
    description: string;
}

function SectionA() {


    const Video = [
        {
            url: "https://utfs.io/f/19e7054b-9f59-46a5-beac-8e54a333b675-59gbt9.mov",
            name: "one",
        },
    ]






  return (
    <div className='w-full  z-50 bg-black p-5 flex items-center justify-center '>
    <div className='w-full max-w-5xl flex flex-col gap-20 items-center'>
       
       <div className='w-full p-1 md:p-3 border shadow-[0_0px_37px_8px_rgb(20,20,20)] border-neutral-900  overflow-hidden bg-zinc-950/40 rounded-xl '>
        {Video.map((vid) => (
              <video
              key={vid.name}
              loop
              muted
              autoPlay
              playsInline
              className='w-full rounded-xl border-neutral-950 h-auto border pointer-events-none'>
              <source type='video/mp4' src={vid.url} />
            </video>
        ))}
       </div>


    
        <h1 className='text-md font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-white to-neutral-500 md:text-xl'>
          jederzeit und überall
          </h1>
      



       
    </div>
        
    </div>
  )
}

export default SectionA