"use client"

import React from 'react'
import { useDispatch } from 'react-redux';
import { twMerge } from 'tailwind-merge';


import { playPause, setActiveSong } from '@/lib/features/playerSlice';
import PlayPause from './PlayPause';
import LoadingSkeleton from './Next-Ui/LoadingSkeleton';
import Link from 'next/link';



interface TrackProps {
  id: number;
  preview: string;
  album: {
    cover_big: string;
  };
  title: string;
  artist: {
    id: number
    name: string;
    picture_xl: string
    picture: string
  };
}



function SongCard ({ item, index, data, isPlaying, activeSong}: {
    item: TrackProps,
    index: number,
    data: any,
    isPlaying: any,
    activeSong: any,
  }) {
   
    const dispatch = useDispatch()


    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = () => {
        dispatch(setActiveSong({ item, data, index }));
        dispatch(playPause(true));
      };
    


      
  return (
    <div key={item.id} className={twMerge('bg-neutral-800 relative border border-neutral-700 p-2 rounded-xl flex flex-col justify-center animate-appearance-in ',
        isPlaying && activeSong?.id === item.id && 'shadow-lg shadow-neutral-100/40'
      )}>
       <img
         className='rounded-xl'
         height={270}
         width={270}
         alt='deezer-pic'
         src={item.album.cover_big}
       />


       <span className='overflow-x-hidden line-clamp-1'>{item.title}</span>
       <span className='text-xs overflow-x-hidden line-clamp-1 hover:text-neutral-400 max-w-36  z-50'>  
       <Link href={`/dashboard/artist/${item.artist.id}`} >
          {item.artist.name}
       </Link>
       </span>
   
             <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              item={item}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}/>
  
     </div>  
  )
}

export default SongCard