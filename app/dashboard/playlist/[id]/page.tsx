import Header from "@/components/Header"
import getLikedSongs from "@/api/getLikedSongs"
import { Image } from "@nextui-org/react"
import LikedContent from "@/components/playlist/LikedContent"

export const revalidate = 0

const Liked = async () => {
  const songs = await getLikedSongs()

  return (
    <div
      className="
        bg-neutral-950 
        rounded-lg 
        h-[130vh] 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="  bg-gradient-to-b from-[#09314e]">
        <div className="sm:mt-20 mt-5 ">
          <div
            className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
          >
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                className="object-cover"
                isBlurred
                src="/image/volume-hearticon.svg"
                alt="Liked playlist img"
              />
            </div>
            <div className="flex flex-col items-center md:items-start gap-y-2 mt-4 md:mt-0">

              <h1
                className="
                  text-white/80 
                  text-4xl 
                  sm:text-5xl 
                  lg:text-7xl 
                  md:font-bold
                  
                "
              >
              Favoriten
              </h1>
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-300">
                Playlist
                </p>
            </div>
          </div>
        </div>
      </Header>
      <div className="pb-20 md:p-5">
        <LikedContent songs={songs} />
      </div>
    </div>
  )
}

export default Liked
