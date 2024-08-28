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
            name: "Speed",
            description: "lorem inu thus in the taoe de one ah desta in"
        },
    ]






  return (
    <div className='w-full  z-50 bg-black p-5 flex items-center justify-center '>
    <div className='w-full max-w-5xl flex flex-col gap-20 items-center'>
       
       <div className='w-full border border-neutral-900  overflow-hidden bg-black rounded-xl '>
        {Video.map((vid) => (
              <video
              key={vid.name}
              loop
              muted
              autoPlay
              playsInline
              className='w-full h-auto pointer-events-none'>
              <source type='video/mp4' src={vid.url} />
            </video>
        ))}
       </div>



       
    </div>
        
    </div>
  )
}

export default SectionA