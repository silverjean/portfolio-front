import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './comment.css';

export default function Comment({ del, name, content }) {
  return (
    <Grid
      item
      container
      direction="column"
      className="comment_body"
      sm={12}
      md={4}
      lg={3}
    >
      <Grid item className="comment_name">
        {name}
      </Grid>
      <Grid item className="comment_message">
        {content}
      </Grid>
      <Grid item container justify="flex-end">
        <IconButton onClick={del} type="submit">
          <DeleteForeverIcon className="comment_icon" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
