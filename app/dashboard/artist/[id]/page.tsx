
import { fetchArtistTopTracks } from "@/api/deezerTopTracks"
import ArtistHeader from "@/components/artist/ArtistNav-mid"
import ArtistPageBody from "@/components/artist/ArtistPageBody"
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





  


  return (
    <>
        <ArtistPageBody/>
    </>
  )
}

export default page
