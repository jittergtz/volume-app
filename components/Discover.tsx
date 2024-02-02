"use client"

import { useDiscoverQuery, usePopularQuery } from '@/lib/services/apiFetch';
import React, { useState } from 'react'
import LoadingSkeleton from './Next-Ui/LoadingSkeleton';

import SongCard from './SongCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';





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
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4 p-5'>
          {Array.from({ length: index }, (_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      );
    }
  
    if (discoverError || popularError) return <span>Ein Fehler ist aufgetreten</span>;
  
    return (
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4 p-3'>
        {[ ...popularData?.tracks?.data, ...discoverData?.tracks?.data,].map((item: TrackProps, index: number) => (
          <SongCard 
            key={item.id}
            item={item} 
            index={index} 
            data={discoverData || popularData}
            currentIndex={currentIndex}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    );
  }
  
  export default Discover;
  