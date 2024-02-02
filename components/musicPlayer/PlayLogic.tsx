import React, { useRef, useEffect } from 'react';

function PlayLogic({ isPlaying, activeSong, volume, seekTime, repeat, onEnded}: {
    isPlaying: any,
    activeSong: any,
    volume: number,
    seekTime: number,
    repeat: boolean,
    onEnded: () => void
}) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Audio has started playing
                }).catch(error => {
                    // Handle play error
                    console.error('Error playing audio:', error);
                });
            }
        } else if (audioRef.current && !isPlaying) {
            audioRef.current.pause();
        }
    }, [isPlaying, activeSong]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    };

    return (
        <div onClick={handlePlayPause}>
            <audio
                src={activeSong?.preview}
                ref={audioRef}
                loop={repeat}
                onEnded={onEnded}
            />
        </div>
    );
}

export default PlayLogic;
