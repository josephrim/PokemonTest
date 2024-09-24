export interface Pokemon {
  name: string;
  url: string;
}

// Define the type for Pokemon details
export interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: TypeInfo[];
  stats: Stat[];
  moves: Move[];
  sprites: {
    front_default: string;
  };
}

// Define supporting types
interface Ability {
  ability: {
    name: string;
  };
}

interface TypeInfo {
  type: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}