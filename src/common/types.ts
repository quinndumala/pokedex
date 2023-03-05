export interface Pokemon {
  id: number;
  name: string;
  types: PokemonTypes[];
  image: string;
  sprites?: PokemonSprites;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypes {
  slot: number;
  type: PokemonType;
}

export interface PokemonSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}
