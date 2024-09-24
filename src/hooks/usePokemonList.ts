import { useState } from "react";

import { getPokemonList } from "../services/api";
import { Pokemon } from "../types/PokemonTypes";
import { useLoading } from "../contexts/LoadingContext";

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const { showLoading, hideLoading } = useLoading();

  const fetchPokemon = async (page: number) => {
    try {
      showLoading();
      const data = await getPokemonList((page - 1) * 20, 20);
      setPokemonList(data.results);
    } finally {
      hideLoading();
    }
  };

  return { pokemonList, fetchPokemon };
};

export default usePokemonList;
