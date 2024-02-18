import MobileNavbar from '@/components/MobileNav'
import PlaylistItem from '@/components/PlaylistItem'
import { Image } from '@nextui-org/react'
import React from 'react'

function page() {
  return (

    <>
<div className='bg-neutral-950 p-5 lg:px-20 rounded-lg pb-20'>
  <div className='flex flex-col items-center justify-center '>
  <Image
      isBlurred
      width={200}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      className=" "
    />
    <h1 className='text-3xl w-72 text-white/90 mt-3 text-center'>
    Gym 20
    </h1>
  </div>
  
  <div className='flex flex-col gap-3 mt-20 '>
         <PlaylistItem 
          image={'/image/IMG_7711.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood '}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

<PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>
  </div>

</div>


 
    </>

  )
}

export default page