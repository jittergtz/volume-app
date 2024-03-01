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
      query: () => `playlist/11967291621`,
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
      query: () => `playlist/4403076402`,
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
  useMixQuery } = deezerApi;
