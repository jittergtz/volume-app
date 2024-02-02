"use client"
import { useSearchQuery } from "@/lib/services/apiFetch";
import { forwardRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge"
import LoadingSkeleton from "./Next-Ui/LoadingSkeleton";
import { IoSearchOutline } from "react-icons/io5";
import SongCard from "./SongCard";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";








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





export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

  


    const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
  }, ref) => {
      const [searchTerm, setSearchTerm] = useState('');
      const { data, isFetching, error } = useSearchQuery(searchTerm)
      const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);









    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      };


   const Skeletonindex = 10





  return (

<div>
    
    <div className="flex items-center px-2 rounded-xl bg-neutral-900">
    <IoSearchOutline size={20} />
    <input
     type="search" autoComplete="off"  spellCheck="false" value={searchTerm} onChange={handleInputChange} placeholder="Tippen zum suchen..."
      className={twMerge(
        `
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
        disabled && 'opacity-75',
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
    </div>


     {isFetching && <div className='    
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
        p-5'>
         {Array.from({ length: Skeletonindex }, (_, Skeletonindex) => (
        <LoadingSkeleton key={Skeletonindex} />
        ))}

        </div>}
                            
     <div className='      
     grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      2xl:grid-cols-8 
      gap-4 
      mt-4
      p-3'>
        
        
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
    </div>

                        </div>
            
                        )
                        });



Input.displayName = "Input";

export default Input