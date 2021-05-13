import { Grid } from '@material-ui/core';
import React from 'react';

import Header from '../Header';
import Profile from '../Profile';
import Feedback from '../Feedback';
import PortfolioComp from '../PortfolioComp';
import ResumeComp from '../ResumeComp';

export default function Resume({ portfolio }) {
  return (
    <Grid container>
      <Grid item xs={12} md={8} lg={3} style={{ marginRight: '10px' }}>
        <Profile />
      </Grid>
      <Grid item xs>
        <Header />
        {portfolio ? <PortfolioComp /> : <ResumeComp />}

        <Feedback />
      </Grid>
    </Grid>
  );
}
