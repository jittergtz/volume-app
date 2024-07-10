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
    <div className='w-full  z-50 bg-neutral-950  p-5 flex items-center justify-center '>
    <div className='w-full max-w-5xl flex flex-col gap-20 items-center'>
       
       <div className='w-full  overflow-hidden bg-black rounded-3xl '>
      <video
        loop
        muted
        autoPlay
        playsInline
        className='w-full h-auto pointer-events-none'>
        <source type='video/mp4' src='/image/io.mp4' />
      </video>
       </div>



        <section className=' w-full flex flex-col gap-5 '>
        <TextReveal text="In the new Space" paragraph='Der Jahresabschluss ist in der Betriebswirtschaftslehre und speziell im Rechnungswesen der Abschluss der Buchführung für ein bestimmtes Geschäftsjahr, das am Bilanzstichtag endet. Neben dem Jahresabschluss kann es auch Zwischenberichterstattungen geben, die inhaltlich und formell dem Jahresabschluss ähnlich sind. Wikipedia' />
         
        </section>
    </div>
        
    </div>
  )
}

export default SectionA