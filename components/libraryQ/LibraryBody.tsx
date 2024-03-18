"use client"
import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import ListItem from '../ListItem'
import ArtistFollowCard from './ArtistFollowCard'

function LibraryBody() {
  return (
    <div className='p-1 lg:p-10 '>

        <div className=' mt-5 flex flex-col gap-3'>
        <div className='flex flex-col w-full
          gap-3 mt-4'>
            <ListItem 
            name="Favoriten"
            image="/image/volume-heartIcon.svg"
             href='/dashboard/playlist/favoriten'/>

         
          </div>
           
        </div>
    
    </div>
  )
}

export default LibraryBody