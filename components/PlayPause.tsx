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
    {isPlaying && activeSong?.title === item.title ? (
    <div 
    onClick={handlePause}
    className=' absolute bottom-14 right-5
     flex justify-center  items-center rounded-full w-8 h-8 sm:w-12 sm:h-12 bg-white/90'>
    <FaPause  className='h-3 sm:h-8'/>
    </div>
    ): (
    <div 
    onClick={handlePlay}
    className='flex absolute bottom-14 right-5
     justify-center items-center rounded-full w-8 h-8 sm:w-12 sm:h-12 bg-white/80'>
    <FaPlay className='h-3 sm:h-8' />
    </div>
    )}

  </>
  )
}

export default PlayPause

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
