import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { home } from '../Root/const/links';
import RouteContext from '../Route-context';

const HomeScreen: React.FC = () => {
  const { setActiveMainLink } = useContext(RouteContext);
  setActiveMainLink(home);

  return (
    <Box
      height="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1">&nbsp;</Typography>
    </Box>
  );
};

export default HomeScreen;
