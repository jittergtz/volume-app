"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useTrackQuery } from "@/lib/services/apiFetch";
import { Image, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";

interface LikedContentProps {
  songs: Song[];
}



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


const LikedContent: React.FC<LikedContentProps> = ({
  songs
}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { likedData } = useSelector((state: RootState) => state.track);


  return ( 
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song: Song) => {

        
        if (!songs) {
          return (
            <div className=" w-full flex gap-2 items-center rounded-lg" key={song.song_id}>
              <Skeleton className="w-20 h-20 rounded-xl bg-neutral-800"></Skeleton>
              <div className="flex flex-col gap-3">
                <Skeleton className="w-32 h-2 rounded-xl bg-neutral-800"></Skeleton>
                <Skeleton className="w-20 h-2 rounded-xl bg-neutral-800"></Skeleton>
              </div>
            </div>
          );
        }

       

        return (
          <div key={song.song_id} className="flex items-center gap-x-4 gap-y-3 w-full hover:bg-neutral-900 rounded-lg">
            <Image
              className="h-20 w-20 rounded-lg"
              src={song.song_img}
            />
            <div className="flex-1 text-neutral-200">
              {song.song_title} 
              <p className="text-sm text-neutral-400 line-clamp-1 w-max hover:text-neutral-200 hover:cursor-pointer">
                <Link href={`/dashboard/artist/${song.song_id}`}>
                  {song.artist_name}
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
 
export default LikedContent;
