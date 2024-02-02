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
  };
}

export interface PlayerState {
  currentSongs: TrackProps[];
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
    album: {
      cover_big: '',
    },
    title: '',
    artist: {
      name: '',
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
      if (payloadData.tracks && payloadData.tracks.data) {
        state.currentSongs = payloadData.tracks.data;
      } else if (payloadData.data) {
        state.currentSongs = payloadData.data;
      } else {
        // Handle case when data structure is unexpected or missing
        state.currentSongs = []; // Or any other appropriate default value
      }
      
      state.activeSong = action.payload.item;
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    

    nextSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload.index];
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload.index];
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, playPause } = playerSlice.actions;

export default playerSlice.reducer;
