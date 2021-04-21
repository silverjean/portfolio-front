import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SmsIcon from '@material-ui/icons/Sms';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Copyright from '../../components/Copyright';
import useStyles from '../../components/Feedback/styles';
import api from '../../services/api';

export default function Contact() {
  document.title = 'Contato | Jean Silveira';
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const contact = {
      name: name.toLowerCase(),
      email,
      phoneNumber,
      message,
    };

    if (!name || !email || !phoneNumber || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira todos os dados.',
      });
      return;
    }

    try {
      await api.post('contact', contact);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Obrigado, logo entraremos em contato.',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/');
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
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SmsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contato
          </Typography>
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
                  autoFocus
                  onChange={({ target }) => setName(target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={email}
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={({ target }) => setEmail(target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <InputMask
                  mask="(99) 9 9999-9999"
                  onChange={({ target }) => setPhoneNumber(target.value)}
                >
                  {() => (
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="phoneNumber"
                      label="Numero para contato"
                      name="phoneNumber"
                    />
                  )}
                </InputMask>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={message}
                  label="Mensagem"
                  name="message"
                  autoComplete="message"
                  multiline
                  rows="4"
                  onChange={({ target }) => setMessage(target.value)}
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
