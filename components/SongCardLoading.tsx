import React from 'react'
import LoadingSkeleton from './Next-Ui/LoadingSkeleton'

function SongCardLoading() {
  const   Skeletonindex = 12
  return (

    <div className=' 
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-3 
      lg:grid-cols-4
      xl:grid-cols-5 
      2xl:grid-cols-8 
      gap-x-5
      gap-y-3
      mt-0
      p-2
      sm:p-5'>
       {Array.from({ length: Skeletonindex }, (_, Skeletonindex) => (
      <LoadingSkeleton key={Skeletonindex} />
      ))}

      </div>
 
  )
}

export default SongCardLoading