"use client"

import { useArtistQuery, useDiscoverQuery, useGermannewQuery, useGermanrapQuery, useMixQuery, useOldhitsQuery, usePopularQuery, useSpeedupQuery, useTrackQuery } from '@/lib/services/apiFetch';
import React, { useState } from 'react'


import SongCard from './SongCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { Tab, Tabs } from '@nextui-org/react';
import LoadingSkeleton from './Next-Ui/LoadingSkeleton';
import SongCardLoading from './SongCardLoading';




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



  function Discover() {
    const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
    const  Skeletonindex = 10

    const { data: chartsData, isFetching: chartsIsFetching, error: chartsError } = useDiscoverQuery();
    const { data: popularData, isFetching: popularFetching, error: popularError } = usePopularQuery();
    const {data: speedupData, isFetching: speedupFetching, error: speedupError} = useSpeedupQuery()

    const {data: germannewData, isFetching: germannewFetching, error: germanewError} = useGermannewQuery()
    const {data: germanrapData, isFetching: germanrapFetching, error: germanrapError} = useGermanrapQuery()
    const {data: oldhitsData, isFetching: oldhitsFetching, error: oldhitsError} = useOldhitsQuery()
    const {data: mixData, isFetching: mixIsFetching, error: mixError} =  useMixQuery()


    console.log(popularData)
  

  
    const renderSongs = (data: any) => {
     
    
      if (!data) return null;
  
      return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {data?.tracks?.data.map((item: TrackProps, index: number) => (
            <SongCard
              key={item.id}
              item={item}
              index={index}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          ))}
        </div>
      );
    };


  
    
    
    
    
    
    
    
    
    
    return (
      <div className="p-3">
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-2xl">Entdecke Neues</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Mix
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col gap-4 sm:overflow-hidden">
          <Tabs variant="light" className='overflow-x-scroll scrollbar-hide ' aria-label="Tabs variants">
          <Tab  key="mix" title="Mix">
            { mixIsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(mixData) )}
            </Tab>
           
            <Tab key="charts" title="Charts">
            { chartsIsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(chartsData) )}
            </Tab>
            <Tab key="popular" title="Rap">
           { popularData  ? 
           ( renderSongs(popularData) )
           :( <SongCardLoading/> )}
            </Tab>
            <Tab key="speedup" title="Speed up">
            { speedupFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(speedupData) )}
            </Tab>
            <Tab key="germannew" title="Deutsch Neu">
            { germannewFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(germannewData) )}
            </Tab>
            <Tab key="germanrap" title="Deutsch Rap">
            { germanrapFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(germanrapData) )}
            </Tab>
            <Tab key="oldhits" title="2000er">
            { oldhitsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(oldhitsData) )}
            </Tab>

          </Tabs>
        </div>
      </div>
    );
  }
  
  export default Discover;
  