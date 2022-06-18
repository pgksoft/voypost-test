import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { listingFlats } from '../Root/const/links';

const HomeScreen: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" padding={4}>
      <Button variant="contained" component={Link} to={listingFlats.url}>
        {listingFlats.title}
      </Button>
    </Box>
  );
};

export default HomeScreen;
