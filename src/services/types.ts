// Not fully defined
export type Pokemon = {
  name: string;
  weight: number;
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
