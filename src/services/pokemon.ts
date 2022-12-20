import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon, PokemonListItem } from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonByUrl: builder.query<Pokemon, string>({
      query: (url) => ({
        url,
      }),
    }),
    getPokemonList: builder.query<
      { count: number; results: PokemonListItem[] },
      number
    >({
      query: (page) => `pokemon?limit=30&offset=${page * 30}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      merge: (currentData, newData) => {
        currentData.results.push(...newData.results);
      },
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
  useGetPokemonByUrlQuery,
} = pokemonApi;
