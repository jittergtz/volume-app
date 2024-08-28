"use client"

import { useArtistQuery, useDiscoverQuery, useGermannewQuery, useGermanrapQuery, useHappyQuery, useMixQuery, useMixThreeQuery, useMogQuery, useOldhitsQuery, useOldschoolRapQuery, usePhonkQuery, usePopularQuery, useSpeedUp2Query, useSpeedupQuery, useTiktokQuery, useTrackQuery } from '@/lib/services/apiFetch';
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
    const {data: happyData, isFetching: happyIsFetching, error: happyError} = useHappyQuery()
    const {data: SpeedUp2Data, isFetching: SpeedUp2IsFetching, error: SpeedUp2Error} = useSpeedUp2Query()
    const {data: mixThreeData, isFetching: mixThreeIsFetching, error: mixThreeError} = useMixThreeQuery()
    const {data: tiktokData, isFetching: tiktokIsFetching, error: tiktokError} = useTiktokQuery()
    const {data: oldschoolRapData, isFetching: oldschoolRapIsFetching, error: oldschoolRapError} = useOldschoolRapQuery()
    const {data: mogData, isFetching: mogIsFetching, error: mogError} = useMogQuery()
    const {data: PhonkData, isFetching: PhonkIsFetching, error: PhonkError} = usePhonkQuery()

    

  
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

  console.log(mixData)
  
    
    
    
  
    
    
    
    
    
    return (
      <div className="p-3">
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <div>
      
            </div>
          </div>
        </div>
  
        <div className="flex flex-col gap-4 sm:overflow-hidden">
          <Tabs variant="light" className='overflow-x-scroll scrollbar-hide ' aria-label="Tabs variants">
        
          <Tab  key="mix" title="Mix">
          <h1 className="text-white text-xl">Entdecke Neues</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Mix
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { mixIsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(mixData) )}
            </Tab>
           
            <Tab key="charts" title="Charts">
            <h1 className="text-white text-xl">Top 100</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Charts
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { chartsIsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(chartsData) )}
            </Tab>
            <Tab key="popular" title="Rap">
            <h1 className="text-white text-xl">International</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Rap
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
           { popularData  ? 
           ( renderSongs(popularData) )
           :( <SongCardLoading/> )}
            </Tab>
            <Tab key="speedup" title="Speed up">
            <p className="flex gap-1 text-white/70 items-center">
                Speed up
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { speedupFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(speedupData) )}
            </Tab>
            <Tab key="germannew" title="Deutsch Neu">
            <h1 className="text-white text-xl">Aktuell beliebt</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Deutsch Neu
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { germannewFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(germannewData) )}
            </Tab>
            <Tab key="germanrap" title="Deutsch Rap">
              <p className="flex gap-1 text-white/70 items-center">
                Deutsch Rap
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { germanrapFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(germanrapData) )}
            </Tab>
            <Tab key="oldhits" title="2000er">
            <h1 className="text-white text-xl">Nostalgie</h1>
              <p className="flex gap-1 text-white/70 items-center">
                2000er
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { oldhitsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(oldhitsData) )}
            </Tab>

            <Tab key="happy" title="Gute Laune">
            <h1 className="text-white text-xl">Nostalgie</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Gute Laune
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { happyIsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(happyData) )}
            </Tab>


            <Tab key="SpeedUp2" title="SpeedUp">
            <h1 className="text-white text-xl">Nostalgie</h1>
              <p className="flex gap-1 text-white/70 items-center">
               SpeedUp
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { oldhitsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(SpeedUp2Data) )}
            </Tab>


            <Tab key="mixPop" title="Mix Pop">
            <h1 className="text-white text-xl">Nostalgie</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Mix Pop
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { oldhitsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(mixThreeData) )}
            </Tab>


            <Tab key="Tiktok" title="Tiktok">
            <h1 className="text-white text-xl">Nostalgie</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Tiktok
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { oldhitsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(tiktokData) )}
            </Tab>


            <Tab key="oldRap" title=" 2000s Rap">
            <h1 className="text-white text-xl">Nostalgie</h1>
              <p className="flex gap-1 text-white/70 items-center">
                2000s Rap
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { oldhitsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(oldschoolRapData) )}
            </Tab>

            <Tab key="Gym" title="Gym">
            <h1 className="text-white text-xl">Nostalgie</h1>
              <p className="flex gap-1 text-white/70 items-center">
                Gym Playlist
                <FaFireFlameCurved className="h-3 text-white/60" />
              </p>
            { oldhitsFetching  ? 
           ( <SongCardLoading/> )
           :(  renderSongs(mogData) )}
            </Tab>


          </Tabs>
        </div>
      </div>
    );
  }
  
  export default Discover;
  