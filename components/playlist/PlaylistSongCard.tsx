import { nextSong, playPause, setActiveSong } from '@/lib/features/playerSlice';
import { Song } from '@/types';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';
import PlayPause from '../PlayPause';
import PlayPausePlaylist from './PlayPausePlaylist';

interface LikedContentProps {
   song_id : number;
   song_img: string;
   song_title: string;
   artist_name: string;
   

  }

function PlaylistSongCard({index, data, item ,isPlaying, activeSong}: {
    index: number,
    data: LikedContentProps,
    isPlaying: any,
    activeSong: any,
    item: any 

}) {


    const dispatch = useDispatch()

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = () => {
        dispatch(setActiveSong({ data, item, index }));
        dispatch(playPause(true));
      };

  
    

  return (
    <div key={item.song_id}  className="flex relative  gap-2 w-full sm:hover:bg-neutral-900 rounded-lg">
    <img
      className="h-16 w-16  md:h-20 md:w-20 rounded-lg"
      src={item.song_img}
    />
    <div className=" text-neutral-200 mt-4 ">
     <p className='w-52 sm:w-80 lg:w-full line-clamp-1'> {item.title}</p>
      <p className="text-sm z-20 absolute  text-neutral-400 line-clamp-1 w-max hover:text-neutral-200 hover:cursor-pointer">
        <Link href={`/dashboard/artist/${item.artist_id}`}>
          {item.artist_name}
        </Link>
      </p>
    </div>
    <div className=' h-full w-full absolute flex z-10 '>
    
    <PlayPausePlaylist
              isPlaying={isPlaying}
              activeSong={activeSong}
              item={item}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}/>
  
     </div> 
     </div> 
  )
}

export default PlaylistSongCard