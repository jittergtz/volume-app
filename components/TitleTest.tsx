"use client"

import { useDiscoverQuery } from '@/lib/services/apiFetch';
import React, { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge';
import LoadingSkeleton from './Next-Ui/LoadingSkeleton';
import { useDispatch } from 'react-redux';
import SongCard from './SongCard';



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


  


 function TitleTest() {
    const {data, isFetching, error} = useDiscoverQuery()
    const dispatch = useDispatch()

    


    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);

    const handlePauseClick = () => {

    }

    const handlePlayClick = () => {
     
    }

    if(isFetching) {
      const index = 10
      return (
        <div className='    
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
        p-5'>
         {Array.from({ length: index }, (_, index) => (
        <LoadingSkeleton key={index} />
        ))}
      </div> )}


    if(error) return <span>Ein Fehler ist aufgetreten</span>

 
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
     <div className='      
     grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      2xl:grid-cols-8 
      gap-4 
      mt-4
      p-3'>
       {data?.tracks?.data?.map((item: TrackProps, index: number) => (
        <SongCard key={item.id} item={item} index={index} data={data}/>
       ))}


      
     </div>
   );
 }
 
 export default TitleTest;
 

 