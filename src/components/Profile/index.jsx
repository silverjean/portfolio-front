import { Typography } from '@material-ui/core';
import React from 'react';

import profile from '../../assets/img/profi.jpg';
import CustomTimeline from '../Timeline';
import useStyles from './styles';

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <div className={classes.divName}>
        <Typography className={classes.name}>Jean Silveira</Typography>
        <Typography className={classes.title}>
          Desenvolvedor Full Stack
        </Typography>
        <figure className={classes.figure}>
          <img style={{ width: '100%' }} src={profile} alt="" />
        </figure>
        <div className={classes.info}>
          <CustomTimeline />
          <br />
        </div>
      </div>
    </div>
  );
}
