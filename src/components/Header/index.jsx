import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from '@material-ui/core';
import { Link as LinkReact } from 'react-router-dom';

import useStyles from '../Navbar/styles';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Button color="inherit">
            <LinkReact className={classes.link} to="/">
              Currículo
            </LinkReact>
          </Button>
          <Button color="inherit">
            <LinkReact className={classes.link} to="/portfolio">
              Portifolio
            </LinkReact>
          </Button>
          <div className={classes.social}>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              color="inherit"
              href="https://github.com/silverjean"
            >
              <GitHubIcon className={classes.socialIcon} />
            </Link>
            <Link
              rel="noopener noreferrer"
              color="inherit"
              href="https://www.linkedin.com/in/silveirajean/"
              target="_blank"
            >
              <LinkedInIcon className={classes.socialIcon} />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
