import { fetchTrackDataFailure, fetchTrackDataSuccess } from "@/lib/features/trackSlice"
import getLikedSongs from "../getLikedSongs";

export const fetchLikedSongs = () => {
  return async (dispatch: any) => {
    try {
      const songs = await getLikedSongs();
      dispatch(fetchTrackDataSuccess(songs)); // Direkt die Songs anstatt der song_id übergeben
    } catch (error) {
      dispatch(fetchTrackDataFailure(error));
    }
  };
};

