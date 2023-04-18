import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),

  endpoints: (builder) => ({
    getPeoples: builder.query({
      query: (page) => `people/?page=${page}`,
    }),
    getPeople: builder.query({
      query: (searchValue: string) => `people/?search=${searchValue}`,
    }),
  }),
});

export const { useGetPeoplesQuery, useGetPeopleQuery } = peopleApi;
