import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (userId) => `posts?userId=${userId}`,
        }),
    }),
  })

  export const { useGetPostsQuery } = postsApi;