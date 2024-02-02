"use client"

import React from 'react'
import { useDispatch } from 'react-redux';
import { twMerge } from 'tailwind-merge';


import { playPause, setActiveSong } from '@/lib/features/playerSlice';
import PlayPause from './PlayPause';



interface TrackProps {
    id: number;
    preview: string;
    album: {
      cover_big: string;
    };
    title: string;
    artist: {
      name: string;
    };
  }



function SongCard ({ item, index, data, isPlaying, activeSong, currentIndex }: {
    item: TrackProps,
    index: number,
    data: any,
    isPlaying: any,
    activeSong: any,
    currentIndex: number ,
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
    <div key={item.id} className={twMerge(
        'bg-neutral-800 relative border border-neutral-700 p-2 rounded-xl flex flex-col justify-center animate-appearance-in ',
        isPlaying && activeSong?.id === item.id && 'shadow-lg shadow-neutral-100/40'
      )}>
       <img
         className='rounded-xl '
         height={270}
         width={270}
         alt='deezer-pic'
         src={item.album.cover_big}
       />

       <span className='overflow-x-hidden line-clamp-1'>{item.title}</span>
       <span className='text-xs overflow-x-hidden line-clamp-1'>{item.artist.name}</span>
   
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