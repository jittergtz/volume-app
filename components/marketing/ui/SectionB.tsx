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
    <div className='min-h-[80vh] z-40 bg-black pb-20 p-5'>

      
        

  

            <div className='flex flex-col items-center justify-center mt-20'>

              <div>
                <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-500 to-neutral-800 tracking-tight'>
                  And thats not all
                </h1>
              </div>
            <div className='w-full mt-20 max-w-5xl  flex flex-col gap-10 justify-center'>





            <section className='grid gap-5 grid-cols-1 sm:grid-cols-2'>
  {grid.map((data: gridObject) => (
    <div
      key={data.name}
      className='bg-gradient-to-bl text-2xl from-neutral-900 to-black hover:from-blue-700/70 hover:to-blue-400 hover:animate-appearance-in transition p-5 text-neutral-200 border border-neutral-800 h-80 w-full rounded-3xl group'
    >
      <h1 className='group-hover:flex'>
        {data.name}
        </h1>
      <p className='text-neutral-400 text-lg hidden group-hover:flex'>
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