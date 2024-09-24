import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Grid2, Pagination, Box } from '@mui/material';

import PokemonCard from '../components/PokemonCard';

import usePokemonList from '../hooks/usePokemonList';
import '../styles/global.scss';

const PokemonList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pokemonList, fetchPokemon } = usePokemonList();
  
  const currentPage = useMemo(
    () => parseInt(searchParams.get('page') || '1', 10)
    , [searchParams]
  );

  useEffect(() => {
    fetchPokemon(currentPage);
  }, [currentPage]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setSearchParams({ page: page.toString() });
  };

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
          page={currentPage} 
          onChange={handlePageChange} 
        />
      </Box>
    </div>
  );
};

export default PokemonList;