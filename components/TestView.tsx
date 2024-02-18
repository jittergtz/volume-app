"use client"
import React from 'react'
import SongCard from './SongCard'
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useDiscoverQuery, useGermannewQuery, useGermanrapQuery, useMixQuery, useOldhitsQuery, usePopularQuery, useSpeedupQuery } from '@/lib/services/apiFetch';


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
  

function TestView() {
    const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
    const { data: chartsData, isFetching: chartsIsFetching, error: chartsError } = useDiscoverQuery();
    const { data: popularData, isFetching: popularFetching, error: popularError } = usePopularQuery();
    const {data: speedupData, isFetching: speedupFetching, error: speedupError} = useSpeedupQuery()

    const {data: germannewData, isFetching: germannewFetching, error: germanewError} = useGermannewQuery()
    const {data: germanrapData, isFetching: germanrapFetching, error: germanrapError} = useGermanrapQuery()
    const {data: oldhitsData, isFetching: oldhitsFetching, error: oldhitsError} = useOldhitsQuery()
    const {data: mixData, isFetching: mixIsFetching, error: mixError} =  useMixQuery()
  return (
   <>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {germanrapData?.tracks?.data.map((item: TrackProps, index: number) => (
            <SongCard
              key={item.id}
              item={item}
              index={index}
              data={chartsData}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          ))}
        </div>




   </>
  )
}

export default TestView