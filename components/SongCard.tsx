"use client"
import React, { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge';



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



function SongCard ({ item, index, data }: { item: TrackProps, index: number, data: any }) {

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);



    function playPauseHandler(index: number) {
        if (audio && currentTrackIndex !== null) {
          if (currentTrackIndex === index) {
            if (isPlaying[index]) {
              audio.pause();
            } else {
              audio.play();
            }
            setIsPlaying((prevIsPlaying) => ({ ...prevIsPlaying, [index]: !prevIsPlaying[index] }));
            return;
          } else {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying({});
          }
        }
    
        const newAudio = new Audio(data.tracks.data[index].preview);
        setAudio(newAudio);
        setCurrentTrackIndex(index);
        newAudio.play();
        setIsPlaying({ [index]: true });
      }

      
  return (
    <div key={item.id} className={twMerge(
        'bg-neutral-800 relative border border-neutral-700 p-2 rounded-xl flex flex-col justify-center animate-appearance-in ',
        isPlaying[index] && 'shadow-lg shadow-neutral-100/40'
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
       
       <button className=' w-full h-full absolute rounded-xl text-center text-black' 
        onClick={() => playPauseHandler(index)}>
        {isPlaying[index] ? (
        <div className=' absolute bottom-14 right-5
         flex justify-center  items-center rounded-full w-8 h-8 sm:w-12 sm:h-12 bg-white/90'>
        <FaPause  className='h-3 sm:h-8'/>
        </div>
        ): (
        <div className='flex absolute bottom-14 right-5
         justify-center items-center rounded-full w-8 h-8 sm:w-12 sm:h-12 bg-white/80'>
        <FaPlay className='h-3 sm:h-8' />
        </div>
        )}
      </button>
     </div>
  )
}

export default SongCard