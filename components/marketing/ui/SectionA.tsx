import React from 'react'


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
    <div className='w-full  bg-neutral-100  p-5 flex items-center justify-center '>
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
  )
}

export default SectionA