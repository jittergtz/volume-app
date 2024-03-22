import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deezerApi = createApi({
  reducerPath: "deezerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deezerdevs-deezer.p.rapidapi.com",
    prepareHeaders: (headers, { getState }) => {
      const apiKey = 'c0d3e93c90mshdba2e37a4f35c93p128b06jsnfff8637f4ad8';
      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    search: builder.query<any, string>({
      query: (query) => `search?q=${query}`,
    }),
    
    track: builder.query<any, any>({
      
      query: (query) => `track/${query}`,
    }),


    discover: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/1111143121`,
    }),
    popular: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/1996494362`,
    }),
    speedup: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/10798293142`,
    }),
    germannew: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/1043463931`,
    }),
    germanrap: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/1257540851`,
    }),
    oldhits: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/4723756228`,
    }),
    mix: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/2228601362`,
    }),
    speedUp2: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/10691834062`,
    }),
    phonk: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/10746894082`,
    }),
    mog: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/12131355551`,
    }),
    happy: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/740966875`,
    }),
    mixThree: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/1386208615`,
    }),
    oldschoolRap: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/4676818664`,
    }),
    tiktok: builder.query<any, void>({
      // Für einen statischen Endpoint ohne Parameter
      query: () => `playlist/10920666262`,
    }),

   
   
   
   
   
   
   
    artist: builder.query<any, any>({
      // Für einen statischen Endpoint ohne Parameter
      query: (query) => `artist/${query}`,
    }),


  
  }),
});

export const { 
  useSearchQuery,
  useTrackQuery,
  useArtistQuery,
  usePopularQuery,
  useSpeedupQuery,
  useDiscoverQuery,
  useGermannewQuery,
  useGermanrapQuery,
  useOldhitsQuery,
  useMixQuery,
  useHappyQuery,
  useSpeedUp2Query,
  useMixThreeQuery,
  useTiktokQuery,
  useOldschoolRapQuery,
  useMogQuery,
  usePhonkQuery,


} = deezerApi;
