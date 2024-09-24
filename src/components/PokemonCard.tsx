import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { 
  Card, 
  CardContent, 
  Typography, 
  CardMedia 
} from '@mui/material';

import '../styles/card.scss';

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  // Extract the Pokemon ID from the URL
  const getPokemonImageUrl = (url: string) => {
    const id = url.split('/').filter(Boolean).pop(); // Gets the ID from the URL
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return imageUrl;
  };

  const imageUrl = useMemo(() => getPokemonImageUrl(url), [url]);

  return (
    <Card className="pokemon-card">
      <CardMedia
        component="img"
        image={imageUrl}
        alt={name}
        style={{ objectFit: 'contain', height: '200px' }} // Ensures image fits without cropping
      />
      <CardContent>
        <Typography variant="h6" className="pokemon-name">
          {name}
        </Typography>
        <Link to={`/pokemon/${name}`} className="details-link">
          View Details
        </Link>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;