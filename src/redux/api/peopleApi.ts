import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { DataItem } from '../../components/types';

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
    getDetailedInformation: builder.query({
      query: (id) => `people/${id}`,
      transformResponse: (data: DataItem) => {
        return {
          Name: data.name,
          Birth_year: data.birth_year,
          Height: data.height,
          Mass: data.mass,
          Gender: data.gender,
          Hair_color: data.hair_color,
          Skin_color: data.skin_color,
        };
      },
    }),
  }),
});

export const {
  useGetPeoplesQuery,
  useGetPeopleQuery,
  useGetDetailedInformationQuery,
} = peopleApi;
