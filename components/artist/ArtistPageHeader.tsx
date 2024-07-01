"use client"

import { useArtistQuery } from "@/lib/services/apiFetch"
import { Image, Switch } from "@nextui-org/react"
import React, { useEffect } from "react"
import FollowComp from "./FollowComp"


interface Artist {
  name: string
  picture: string
  picture_xl: string
  id: number
}

function ArtistPageHeader({ artistData }: any) {
  console.log("this is it", artistData)
  return (
    <>
      <div className=" realtive top-0 z-0">
        {// eslint-disable-next-line @next/next/no-img-element
        <img     
          alt="Artist background"
          className=" object-cover h-64 rounded-t-lg w-full
       opacity-50 blur-2xl "
          src={artistData?.picture_xl}
        />
        }</div>

      <div className="-mt-48  top-5 ml-2 md:px-5 xl:px-10 flex items-center gap-2">
        <Image
          src={artistData?.picture_xl}
          alt="Artist profile img"
          className=" rounded-full w-36 lg:w-48 xl:w-56"
        />

        <div>
        <h1 className={`tracking-tighter text-neutral-200 lg:text-6xl xl:text-8xl opacity-60 ${artistData?.name.length > 16 ? 'text-3xl' : 'text-4xl'} line-clamp-2`}>
          {artistData?.name}     
        </h1>

          <p className="ml-1 xl:text-xl text-white opacity-60">Künstler*in</p>
          <p>
          <FollowComp 
          artist={artistData}
          />
          </p>
        </div>
      </div>
    </>
  )
}

export default ArtistPageHeader
