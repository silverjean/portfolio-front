import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import logo from '../../assets/img/logojs__1_-removebg-preview.png';

export default function Header() {
  const classes = useStyles();

  const token = localStorage.getItem('token');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            <img
              src={logo}
              alt="Logo"
              edge="start"
              className={classes.logo}
              color="inherit"
            />
          </Link>

          <Button color="inherit">
            <Link to="/contact" className={classes.link}>
              Contato
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to={token ? '/dashboard/contactList' : '/login'}
              className={classes.link}
            >
              {token ? 'Dashboard' : 'Login'}
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
