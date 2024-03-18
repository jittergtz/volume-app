"use client"
import { fetchAlbumData } from "@/api/deezerAlbumData"
import { fetchArtistTopTracks } from "@/api/deezerTopTracks"
import ArtistPageHeader from "@/components/artist/ArtistPageHeader"
import ArtistTopSongCard from "@/components/artist/ArtistTopSongCard"

import { useArtistQuery } from "@/lib/services/apiFetch"

import React, { useEffect, useState } from "react"


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




function ArtistPageBody() {





  const [topTracks, setTopTracks] = useState<TrackProps[]>([]);


  const [artistId, setArtistId] = useState<number>();
  const [albumId, setAlbumId] = useState<number>();
  

  useEffect(() => {
    // Parse the current URL to get the artist ID from the path
    const pathParts = window.location.pathname.split("/");
    const artistIdFromPath = parseInt(pathParts[pathParts.length - 1], 10);
    if (!isNaN(artistIdFromPath)) {
      setArtistId(artistIdFromPath);
    }
  }, []);

  const { data: artistData, isFetching: artistIsFetching, error: artistError} = useArtistQuery(artistId)

   console.log(artistData)
   
  useEffect(() => {
    async function fetchData() {
      try {
        if (artistId !== undefined) { // Check if artistId is available
          const tracks = await fetchArtistTopTracks(artistId); // Pass the artistId here
          setTopTracks(tracks);
        }
      } catch (error) {
        console.error('Error fetching artist top tracks:', error);
      }
    }
    fetchData();
  }, [artistId]); 


  useEffect(() => {
    async function fetchData() {
      try {
        if (albumId !== undefined) { // Check if artistId is available
          const tracks = await fetchAlbumData(albumId); // Pass the artistId here
          setTopTracks(tracks);
          console.log("Album data", tracks)
        }
      } catch (error) {
        console.error('Error fetching artist top tracks:', error);
      }

    }
    fetchData();
  }, [albumId]); 




  


  return (
    <>
      <div className="p-2 lg:p-7 rounded-lg pb-24  bg-neutral-950  ">
         
     

         <ArtistPageHeader
         artistData={artistData}/>

        <div className="bg-neutral-950 ml-2 lg:ml-6 flex border-neutral-800">

        <h1 className="text-md opacity-55 px-3 mt-12">
        {artistData?.name}`s 
        <p className="text-xl">Top Songs</p> 
          </h1>

        </div>

       

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4  p-3 mt-4">
          {topTracks?.map((item: TrackProps, index: number) => (
            <ArtistTopSongCard
              key={item.id}
              item={item}
              index={index}

              data={item}            
            />
          ))}
        </div>
          
       
      </div>
    </>
  )
}

export default ArtistPageBody
