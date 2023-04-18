import { configureStore } from '@reduxjs/toolkit';
import data from './redusers/data';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { peopleApi } from './api/peopleApi';

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
    data: data,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
