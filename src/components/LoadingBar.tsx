import { Box, CircularProgress } from '@mui/material';

import { useLoading } from '../contexts/LoadingContext';

const LoadingBar: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      width="100vw" 
      position="fixed" 
      top={0} 
      left={0} 
      zIndex={999} 
      bgcolor="rgba(255, 255, 255, 0.7)" // Semi-transparent background
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingBar;