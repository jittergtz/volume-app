import { playPause, setActiveSong } from '@/lib/features/playerSlice';
import React from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

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

function PlayPause({ item, handlePause, handlePlay ,isPlaying, activeSong }: {
    item: TrackProps,
    handlePlay: any,
    handlePause: any,
    isPlaying: any,
    activeSong: any }) {




  return (
    <>
    {isPlaying && activeSong?.id === item.id ? (
    <div 
    onClick={handlePause}
    className='flex justify-center absolute items-center  h-full w-full '>
     <div className='absolute bottom-14 right-5
     flex justify-center  items-center rounded-2xl w-8 h-8 sm:w-10 sm:h-10 bg-neutral-500/50'>
    <FaPause className='text-neutral-200  h-3 sm:h-4' />
    </div>
    </div>
    ): (
    <div 
    onClick={handlePlay}
    className='flex 
     justify-center absolute items-center  h-full w-full '>
    <div className='absolute bottom-14 right-5
     flex justify-center  items-center rounded-2xl w-8 h-8 sm:w-10 sm:h-10 '>
    </div>
    </div>
    )}

  </>
  )
}

export default PlayPause

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
