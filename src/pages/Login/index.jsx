import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar';
import Copyright from '../../components/Copyright';
import useStyles from '../../components/Feedback/styles';

import api from '../../services/api';
import { login } from '../../store/modules/login/actions';

export default function Login() {
  document.title = 'Bem-vindo';
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();

    setInvalidCredentials(false);

    if (!user || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira todos os dados.',
      });
      return;
    }
    try {
      const response = await api.post('/auth', {
        user,
        password,
      });
      const tokenApi = response.data.token;
      localStorage.setItem('token', tokenApi);
      if (response) {
        dispatch(
          login({
            user,
            tokenApi,
          })
        );
        history.push('/dashboard/contactList');
      }
    } catch (error) {
      setInvalidCredentials(true);
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(true);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bem-vindo
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="User"
              name="user"
              autoFocus
              helperText={invalidCredentials ? 'User e/ou senha inválidos' : ''}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
