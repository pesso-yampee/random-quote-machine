import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type animeQuotes = {
  anime: string,
  character: string,
  quote: string
}

export const animeQuotesApi = createApi({
  reducerPath: "animeQuotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://animechan.vercel.app/api/random/",
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        headers.set('authorization', `aaa ${accessToken}`);
        headers.set('Content-Type', 'application/json');
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAnimeQuotes: builder.query<animeQuotes, string>({
      query: (name: string) => `anime?title=${name}`,
    }),
    updateAnimeQuotes: builder.mutation({
      query: ({ name, patch }) => ({
        url: `anime?title=${name}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

export const { useGetAnimeQuotesQuery } = animeQuotesApi;