import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

const Restaurant = ({ restaurant }) => {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Typography variant='h5'>{restaurant.name}</Typography>
        <Typography variant='subtitle1'>{restaurant.cuisine}</Typography>
        <Typography variant='subtitle2'>{restaurant.borough}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Write a Review</Button>
      </CardActions>
    </Card>
  );
};

export default Restaurant;
