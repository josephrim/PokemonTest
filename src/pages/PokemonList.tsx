import { useEffect, useState } from 'react';

import { Grid2, Pagination, Box } from '@mui/material';

import PokemonCard from '../components/PokemonCard';

import usePokemonList from '../hooks/usePokemonList';
import '../styles/global.scss';

const PokemonList = () => {
  const [page, setPage] = useState(1);
  const { pokemonList, fetchPokemon } = usePokemonList();

  useEffect(() => {
    fetchPokemon(page);
  }, [page]);

  return (
    <div className="pokemon-list">
      <Grid2 container spacing={4}>
        {pokemonList.map((pokemon) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={pokemon.name}>
            <PokemonCard 
              name={pokemon.name} 
              url={pokemon.url} 
            />
          </Grid2>
        ))}
      </Grid2>
      <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
        <Pagination 
          count={10} 
          page={page} 
          onChange={(e, value) => setPage(value)} 
        />
      </Box>
    </div>
  );
};

export default PokemonList;