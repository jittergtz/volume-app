import { createSlice } from '@reduxjs/toolkit';

interface TrackProps {
  id: number;
  preview: string;
  album: {
    cover_big: string;
  };
  title: string;
  artist: {
    name: string;
    id: number;
  };

  song_img: string;
  artist_name: string;
  artist_id: number;
  

}

export interface PlayerState {
  currentSongs: any;
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: TrackProps;
  genreListId: string;

}

const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {
    id: 0,
    preview: '',
    song_img: '',
    artist_name: '',
    artist_id: 0,
    
    album: {
      cover_big: '',
    },
    title: '',
    artist: {
      name: '',
      id: 0,
    },
    

  },
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      const payloadData = action.payload.data;
    if (payloadData) {
        state.currentSongs = payloadData}
         else {
        // Handle case when data structure is unexpected or missing
        state.currentSongs = []; // Or any other appropriate default value
      }
      
      state.activeSong = action.payload.item;
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    

    nextSong: (state, action) => {
      if (state.currentSongs.tracks?.data[action.payload]) {
        state.activeSong = state.currentSongs.tracks?.data[action.payload];
      } else if 
      (state.currentSongs.data[action.payload]) {
        state.activeSong = state.currentSongs.data[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    

    prevSong: (state, action) => {
      if (state.currentSongs.tracks?.data[action.payload]) {
        state.activeSong = state.currentSongs.tracks?.data[action.payload];
      } else if 
      (state.currentSongs.data[action.payload]) {
        state.activeSong = state.currentSongs.data[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },


  },
});



export const { setActiveSong, playPause, nextSong, prevSong } = playerSlice.actions;

export default playerSlice.reducer;


