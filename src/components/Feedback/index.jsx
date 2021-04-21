import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2';

import useStyles from './styles';
import Copyright from '../Copyright';
import api from '../../services/api';

export default function Feedback() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const comment = {
      name: name.toLowerCase(),
      content,
    };

    try {
      await api.post('comment', comment);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Comentário enviado com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      });
      setName('');
      setContent('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro inesperado.',
      });
    }
  }

  return (
    <>
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  value={name}
                  label="Nome"
                  onChange={({ target }) => setName(target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={content}
                  label="Comentário"
                  name="comment"
                  autoComplete="comment"
                  onChange={({ target }) => setContent(target.value)}
                  multiline
                  rows="5"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar
              <SendIcon style={{ marginLeft: 10 }} />
            </Button>
            <Grid container justify="flex-end">
              <Grid item />
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
