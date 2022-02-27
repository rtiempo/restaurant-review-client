import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

const Restaurant = () => {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Typography variant='h5'>Riviera Caterer</Typography>
        <Typography variant='subtitle1'>American</Typography>
        <Typography variant='subtitle2'>Brooklyn</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Write a Review</Button>
      </CardActions>
    </Card>
  );
};

export default Restaurant;
