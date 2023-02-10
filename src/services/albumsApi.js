import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        getAlbums: build.query({
            query: (userId) => `albums?userId=${userId}`,
        }),
    }),
  })

  export const { useGetAlbumsQuery } = albumsApi;