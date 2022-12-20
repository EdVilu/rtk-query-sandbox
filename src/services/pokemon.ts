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
    getPokemonList: builder.query<
      { count: number; results: PokemonListItem[] },
      { offset: number; limit: number }
    >({
      query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi;
