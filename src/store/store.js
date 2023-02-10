import { configureStore } from '@reduxjs/toolkit';
import { usersApi, postsApi, albumsApi } from './../services';


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware, postsApi.middleware, albumsApi.middleware),
})