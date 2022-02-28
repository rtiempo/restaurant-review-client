import React, { useState, useEffect } from 'react';
import { Restaurant } from '..';
import { Grid } from '@mui/material';
import RestaurantDataService from '../../services/restaurant.service';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  const retrieveRestaurants = () => {
    RestaurantDataService.getAll()
      .then((response) => {
        console.log(response.data);
        console.log(process.env.REACT_APP_BASE_URL);
        setRestaurants(response.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent='flex-start'
        alignItems='center'
      >
        {restaurants.map((restaurant) => {
          return (
            <Grid item key={restaurant._id} sm={12} md={6} lg={3} xl={2}>
              <Restaurant restaurant={restaurant} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default RestaurantList;
