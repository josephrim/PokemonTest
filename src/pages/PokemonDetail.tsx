import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { 
  Card, 
  CardContent, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableRow, 
  Button 
} from '@mui/material';

import LoadingBar from '../components/LoadingBar';

import useFetchPokemonDetail from '../hooks/useFetchPokemonDetail';

const PokemonDetailPage = () => {
  const { name } = useParams<{ name: string }>();
  const { pokemonDetail, fetchPokemonDetail } = useFetchPokemonDetail();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPokemonDetail(name || '');
  }, [name]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!pokemonDetail) {
    return <LoadingBar />;
  }

  return (
    <div className="pokemon-detail">
      <Card sx={{ maxWidth: 500, margin: 'auto' }}>
        <CardContent>
          <Typography variant="h4" textAlign="center">
            {pokemonDetail.name}
          </Typography>
          <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} style={{ display: 'block', margin: 'auto' }} />
          <Typography variant="h6">Types:</Typography>
          <Typography>
            {pokemonDetail.types.map((typeInfo) => typeInfo.type.name).join(', ')}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Base Stats:</Typography>
          <Table>
            <TableBody>
              {pokemonDetail.stats.map((stat) => (
                <TableRow key={stat.stat.name}>
                  <TableCell>{stat.stat.name}</TableCell>
                  <TableCell>{stat.base_stat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography variant="h6" sx={{ mt: 2 }}>Moves:</Typography>
          <Typography>
            {pokemonDetail.moves.slice(0, 5).map((move) => move.move.name).join(', ')}...
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={handleGoBack} 
            sx={{ mt: 2 }}
          >
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PokemonDetailPage;