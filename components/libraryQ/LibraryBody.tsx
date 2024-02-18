"use client"
import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import ListItem from '../ListItem'
import PlaylistItem from '../PlaylistItem'

function LibraryBody() {
  return (
    <div>
         <Tabs className='w-full' aria-label="Tabs sizes">
          <Tab className='w-96 md:w-40' key="photos" title="Playlisten"/>
          <Tab className='w-96 md:w-40' key="music" title="Künstler"/>
        </Tabs>

        <div className=' mt-5'>
        <div className='flex flex-col w-full
          gap-3 mt-4'>
            <ListItem 
            name="Favoriten"
            image="/image/volume-heartIcon.svg"
             href='/dashboard/playlist/333'/>

          <PlaylistItem 
          image={'/image/IMG_7653.jpg'}
           name={'Gym'}
           href={'/dashboard/playlist/444'}/>

          <PlaylistItem 
          image={'/image/IMG_7711.jpg'}
           name={'Rap'}
           href={'/dashboard/playlist/666'}/>

          <PlaylistItem 
          image={'/image/IMG_7662.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/888'}/>

          <PlaylistItem 
          image={'/image/IMG_7654 2.jpg'}
           name={'Mood'}
           href={'/dashboard/playlist/666'}/>

        <PlaylistItem 
          image={'/image/IMG_7651.jpg'}
           name={'Study bakckground'}
           href={'/dashboard/playlist/444'}/>


          </div>

        </div>
    
    </div>
  )
}

export default LibraryBody