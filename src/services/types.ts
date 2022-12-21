// Not fully defined
export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: { base_stat: number; stat: { name: string } }[];
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
};

export type PokemonListItem = {
  name: string;
  url: string;
};
