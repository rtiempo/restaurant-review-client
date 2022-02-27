import React from 'react';
import { Restaurant } from '..';
import { Grid } from '@mui/material';

const RestaurantList = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent='flex-start'
        alignItems='center'
      >
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
        <Grid item sm={12} md={6} lg={3} xl={2}>
          <Restaurant />
        </Grid>
      </Grid>
    </>
  );
};

export default RestaurantList;
