// utils/fetchArtistTopTracks.ts
"use server";
export async function fetchAlbumData(albumId: any) {
    const response = await fetch(`https://api.deezer.com/album/${albumId}/tracks`);
    if (!response.ok) {
      throw new Error('Failed to fetch artist top tracks');
    }
    const data = await response.json();
    console.log("hi", data)
    return data.data || [];
   
}
