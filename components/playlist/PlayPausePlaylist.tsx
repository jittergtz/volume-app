import { playPause, setActiveSong } from '@/lib/features/playerSlice';
import React from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

interface TrackProps {
    song_id: number;
    
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

function PlayPausePlaylist({ item, handlePause, handlePlay ,isPlaying, activeSong }: {
    item: TrackProps,
    handlePlay: any,
    handlePause: any,
    isPlaying: any,
    activeSong: any }) {




  return (
    <>
    {isPlaying && activeSong?.song_id === item.song_id ? (
         <div className=' w-full p-1 z-10 flex items-center '
           onClick={handlePause}>
          <div
         
          className="bg-white/20 transition opacity-100 h-12
          rounded-2xl flex items-center justify-center ml-auto
           p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110  " >
              <FaPause className="text-white/90" />
        </div>
        </div>
    ): (
        <div className=' w-full p-1 z-10 flex items-center '
          onClick={handlePlay}>
        <div
    
        className="bg-white/20  transition opacity-0  sm:hover:opacity-100 h-12
        rounded-2xl flex items-center justify-center ml-auto
         p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110  " >
            <FaPlay className="text-white/90" />
      </div>
      </div>
    )}

  </>
  )
}

export default PlayPausePlaylist

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
