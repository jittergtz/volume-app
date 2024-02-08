"use client"

import { useDiscoverQuery, usePopularQuery } from '@/lib/services/apiFetch';
import React, { useState } from 'react'
import LoadingSkeleton from './Next-Ui/LoadingSkeleton';

import SongCard from './SongCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import TabsGenre from './TabsGenre';
import { FaFireFlameCurved } from 'react-icons/fa6';





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

  



  function Discover() {
    const { activeSong, isPlaying, currentIndex } = useSelector((state: RootState) => state.player);
    const { data: discoverData, isFetching: discoverIsFetching, error: discoverError } = useDiscoverQuery();
    const { data: popularData, isFetching: popularFetching, error: popularError } = usePopularQuery();
  
    if (discoverIsFetching || popularFetching) {
      const index = 10;
      return (
        <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4 p-5'>
          {Array.from({ length: index }, (_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      );
    }
  
    if (discoverError || popularError) return <span>Ein Fehler ist aufgetreten</span>;
  
    return (
      <div className='p-3'>

        <div className='mt-2 '>
        <div className='flex justify-between items-center' >
          <div>
          <h1 className='text-white text-2xl '>
            Entdecke Neues
          </h1>
          <p className='flex gap-1 text-white/70 items-center'>
             Charts 100
             <FaFireFlameCurved 
             className='h-3 text-white/60' />
          </p>
          </div>
        </div>
     
     </div>
     
      <TabsGenre/>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4 '>
        {discoverData?.tracks?.data.map((item: TrackProps, index: number) => (
          <SongCard 
            key={item.id}
            item={item} 
            index={index} 
            data={discoverData || popularData}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>

    </div>
    );
  }
  
  export default Discover;
  