import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from '@material-ui/core';
import { Link as LinkReact } from 'react-router-dom';

import useStyles from '../Navbar/styles';
import './style.css';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="header">
        <Toolbar>
          <LinkReact color="inherit" className="link" to="/">
            <Button className="button">Currículo</Button>
          </LinkReact>
          <LinkReact color="inherit" className="link" to="/portfolio">
            <Button className="button">Portifolio</Button>
          </LinkReact>
          <div id="social">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              color="inherit"
              href="https://github.com/silverjean"
            >
              <GitHubIcon className="social" />
            </Link>
            <Link
              rel="noopener noreferrer"
              color="inherit"
              href="https://www.linkedin.com/in/silveirajean/"
              target="_blank"
            >
              <LinkedInIcon className="social" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
