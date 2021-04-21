import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Grid, IconButton, Typography } from '@material-ui/core';

import './contact.css';

// eslint-disable-next-line object-curly-newline
export default function Comment({ del, name, email, phoneNumber, message }) {
  return (
    <Grid
      className="contact_body"
      item
      container
      direction="column"
      xs={12}
      md={5}
      lg={5}
    >
      <Grid item className="contact_name">
        {name}
      </Grid>
      <Grid item container spacing={1} direction="row" justify="center">
        <Grid
          item
          container
          spacing={1}
          direction="row"
          justify="center"
          className="contact_email"
        >
          <Grid item>
            <Typography variant="body2">Email: </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{email}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={1}
          direction="row"
          justify="center"
          className="contact_phone"
        >
          <Grid item>
            <Typography variant="body2">Tel: </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{phoneNumber}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="contact_message">
        <Typography variant="body1">{message}</Typography>
      </Grid>
      <Grid item container justify="flex-end">
        <IconButton onClick={del} type="submit">
          <DeleteForeverIcon className="contact_icon" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
