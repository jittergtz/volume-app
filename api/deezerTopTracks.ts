// utils/fetchArtistTopTracks.ts
"use server";
export async function fetchArtistTopTracks(artistIde: any) {
    const response = await fetch(`https://api.deezer.com/artist/${artistIde}/top?limit=50`);
    if (!response.ok) {
      throw new Error('Failed to fetch artist top tracks');
    }
    const data = await response.json();
    return data.data || [];
}
