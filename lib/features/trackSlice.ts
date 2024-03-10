import { createSlice } from "@reduxjs/toolkit";

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
  

export interface TrackState {
    likedData: TrackProps[] | null;
    loading: boolean;
    error: string | null;
  }
  
  const initialTrackState: TrackState = {
    likedData: null,
    loading: false,
    error: null,
  };
  
  const trackSlice = createSlice({
    name: 'track',
    initialState: initialTrackState,
    reducers: {
      fetchTrackDataSuccess: (state, action) => {
        state.likedData = action.payload;
        state.loading = false;
        state.error = null;
      },
      fetchTrackDataFailure: (state, action) => {
        state.likedData = null;
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { fetchTrackDataSuccess, fetchTrackDataFailure } = trackSlice.actions;
  
  export default trackSlice.reducer;