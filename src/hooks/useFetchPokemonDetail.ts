import { useState } from 'react';

import { getPokemonDetails } from '../services/api';
import { useLoading } from '../contexts/LoadingContext';
import { PokemonDetail } from '../types/PokemonTypes';

const useFetchPokemonDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(null);
  const { showLoading, hideLoading } = useLoading();

  const fetchPokemonDetail = async (name: string) => {
    try {
      showLoading();
      const data = await getPokemonDetails(name);
      setPokemonDetail(data);
    } finally {
      hideLoading();
    }
  };

  return { pokemonDetail, fetchPokemonDetail };
};

export default useFetchPokemonDetail;