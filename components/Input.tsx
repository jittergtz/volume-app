"use client"
import { useSearchQuery } from "@/lib/services/apiFetch"
import { forwardRef, useEffect, useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa"
import { twMerge } from "tailwind-merge"
import LoadingSkeleton from "./Next-Ui/LoadingSkeleton"
import { IoSearchOutline } from "react-icons/io5"
import SongCard from "./SongCard"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import ArtistCard from "./artist/ArtistCard"
import { fetchAdvancedSearch } from "@/api/advancedSearch"
import {useInView } from "react-intersection-observer"
import { inView } from "framer-motion"

interface TrackProps {
  id: number
  preview: string
  album: {
    cover_big: string
  }
  title: string
  artist: {
    id: number
    name: string
    picture_xl: string
    picture: string
  }
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SEARCH_KEY = "searchTerm"

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const { data, isFetching, error } = useSearchQuery(searchTerm)
    const { activeSong, isPlaying } = useSelector(
      (state: RootState) => state.player
    )
 
    
    // Retrieve search term from local storage on component mount
    useEffect(() => {
      const savedSearchTerm = localStorage.getItem(SEARCH_KEY)
      if (savedSearchTerm) {
        setSearchTerm(savedSearchTerm)
      }
    }, [])

    // Save search term to local storage whenever input value changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchTerm(value)
      localStorage.setItem(SEARCH_KEY, value)
    }

    const Skeletonindex = 10

    const [moreSearchResults, setMoreSearchResults] = useState<any>([])
    
    useEffect(() => {
    setNextIndex(25) 
    setMoreSearchResults([])
    },[ searchTerm])


    const { ref, inView } = useInView()
    
    const [NextIndex, setNextIndex] = useState(25)
    
    useEffect(() => {
      if (inView) {
        setNextIndex(NextIndex +25) 
      }
      console.log(NextIndex)
    }, [inView])
    
  


    useEffect(() => {
      async function fetchData() {
        try {
          if (data !== undefined || NextIndex > 25) {
            const result = await fetchAdvancedSearch(data.next, NextIndex)
            setMoreSearchResults([...moreSearchResults ,...result])
          }
        } catch (error) {
          console.error("Error fetching more search results:", error)
        }
      }
      fetchData();
    }, [ NextIndex])
 

    return (
      <div>
        <div className="flex sticky top-6 z-50 items-center px-2 rounded-xl bg-neutral-900">
          <IoSearchOutline size={20} />
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Tippen zum suchen..."
            className={twMerge(`
            flex
            w-full 
            lg:w-96
            text-md
            bg-transparent
            px-2 
            py-3 
          
            file:border-0 
            
            file:text-sm 
            file:font-medium 
            placeholder:text-neutral-300 
            disabled:cursor-not-allowed 
            disabled:opacity-50
            focus:outline-none
            `,
            disabled && "opacity-75",
            className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          />
        </div>

      {isFetching && (
       <div
       className=" grid grid-cols-2   sm:grid-cols-3 
        md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 
        2xl:grid-cols-8   gap-4  mt-4  p-3">
        {Array.from({ length: Skeletonindex }, (_, Skeletonindex) => (
       <LoadingSkeleton key={Skeletonindex} />
       ))}
       </div>
        )}

        {data && data.data && data.data.length > 0 && (
          <h1 className="text-lg md:text-xl ml-1 mt-2 text-neutral-200">
            Künstler
          </h1>
        )}

        <div className="overflow-x-scroll flex gap-7 mt-1 scrollbar-hide">
          {/* Filtern aller Künstler */}
          {data?.data &&
            data.data
              // Entfernen von Duplikation wichtig!!
              .filter(
                (item: TrackProps, index: number, self: TrackProps[]) =>
                  index ===
                  self.findIndex((t) => t.artist.name === item.artist.name)
              )
              .map((item: TrackProps, index: number) => (
                <ArtistCard
                  key={item.id}
                  item={item}
                  index={index}
                  data={data}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                />
              ))}
        </div>

        {data && data.data && data.data.length > 0 && (
          <h1 className="text-lg md:text-xl ml-1 mt-3 text-neutral-200">
          Songs
          </h1>
        )}

<div  className="grid grid-cols-2 grid-rows-12 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-1 p-1">
  {data?.data?.map((item: TrackProps, index: number) => (
    <SongCard
      key={item.id}
      item={item}
      index={index}
      data={data}
      isPlaying={isPlaying}
      activeSong={activeSong}
    />
  ))}
  
     {moreSearchResults?.map((item: TrackProps, index: number) => (
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
    <div ref={ref}></div>
   </div>
    )
  }
)

Input.displayName = "Input"

export default Input
