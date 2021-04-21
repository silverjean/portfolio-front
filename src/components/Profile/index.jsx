import { Typography } from '@material-ui/core';
import React from 'react';

import profile from '../../assets/img/profi.jpg';
import CustomTimeline from '../Timeline';
import './style.css';

export default function Profile() {
  return (
    <div className="profile">
      <div className="p_name">
        <Typography className="name">Jean Silveira</Typography>
        <Typography className="title">Desenvolvedor Full Stack</Typography>
        <figure className="p_figure">
          <img src={profile} alt="" />
        </figure>
        <div className="p_information">
          <CustomTimeline />
          <br />
        </div>
      </div>
    </div>
  );
}
