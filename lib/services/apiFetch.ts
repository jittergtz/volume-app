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
    search: builder.query<any, string>({query: (query) => `search?q=${query}`,
    }),
  }),
});

export const { useSearchQuery } = deezerApi;
