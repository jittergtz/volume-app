"use client"
import { fetchArtistTopTracks } from "@/api/deezerTopTracks"
import ArtistHeader from "@/components/artist/ArtistNav-mid"
import ArtistPageHeader from "@/components/artist/ArtistPageHeader"
import ArtistTopSongCard from "@/components/artist/ArtistTopSongCard"
import Header from "@/components/Header"
import SearchAmbientLight from "@/components/Next-Ui/SearchAmbientLight"
import SongCard from "@/components/SongCard"
import { useArtistQuery } from "@/lib/services/apiFetch"
import { RootState } from "@/lib/store"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"


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




function page() {





  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const [topTracks, setTopTracks] = useState<TrackProps[]>([]);


  const [artistId, setArtistId] = useState<number>();

  useEffect(() => {
    // Parse the current URL to get the artist ID from the path
    const pathParts = window.location.pathname.split("/");
    const artistIdFromPath = parseInt(pathParts[pathParts.length - 1], 10);
    if (!isNaN(artistIdFromPath)) {
      setArtistId(artistIdFromPath);
    }
  }, []);

  const { data: artistData, isFetching: artistIsFetching, error: artistError} = useArtistQuery(artistId)


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



  


  return (
    <>
      <div className="p-5 lg:p-7 rounded-lg h-full bg-neutral-950  ">
         
     

         <ArtistPageHeader
         artistData={artistData}/>

        <div className="bg-neutral-950  flex border-neutral-800">

        <h1 className="text-2xl opacity-55 mt-12">
        {artistData?.name}`s 
        <p className="text-sm">Top 50 Songs</p> 
          </h1>

        </div>

       

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {topTracks?.map((item: TrackProps, index: number) => (
            <ArtistTopSongCard
              key={item.id}
              item={item}
              index={index}

              isPlaying={isPlaying}
              activeSong={activeSong} 
              data={item}            
            />
          ))}
        </div>
          
       
      </div>
    </>
  )
}

export default page
