import React from 'react';
import { RestaurantList } from '..';
import { Box } from '@mui/material';

const Main = () => {
  return (
    <Box sx={{ padding: '2rem 1rem' }}>
      <RestaurantList />
    </Box>
  );
};

export default Main;
