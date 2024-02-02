import React, { useRef, useEffect } from 'react';





function PlayLogic({ isPlaying, activeSong, volume, seekTime,
repeat, onEnded,}: {
    isPlaying: any,
    activeSong: any,
    volume: number,
    seekTime: number,
    repeat: boolean,
    onEnded: () => void,
    onTimeUpdate: (event: {
      target: {
        currentTime: number;
      };
    }) => void;
    onLoadedData: (event: {
      target: {
        duration: number;
      };
    }) => void;
    }) 
    {
   
   
      const ref = useRef<HTMLAudioElement>(null);
    // eslint-disable-next-line no-unused-expressions
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
    console.log(activeSong)


  return (
    <audio
    src={activeSong?.preview}
    ref={ref}
    loop={repeat}
    onEnded={onEnded}
   
  />
  )
}

export default PlayLogic
