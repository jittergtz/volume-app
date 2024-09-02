import React from 'react'


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
    <div className='min-h-[80vh]  bg-black pb-20 p-5'>

      
        

  

            <div className='flex justify-center mt-20'>
            <div className='w-full max-w-5xl  flex flex-col gap-10 justify-center'>





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