import React from 'react';
import { Grid, Link } from '@material-ui/core';

import orm from '../../assets/img/orm.PNG';
import pomo from '../../assets/img/pomo.PNG';
import nave from '../../assets/img/nave.PNG';
import spa from '../../assets/img/spa.PNG';

import useStyles from './styles';

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Grid container className={classes.body}>
      <Grid item xs={12}>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://nave-front-test.vercel.app/"
        >
          <figure className={classes.figure} id="nave">
            <img className={classes.img} src={nave} alt="" />
          </figure>
        </Link>
        <p className={classes.link}>
          Aplicação para um teste de FrontEnd, com a criação e edição de cards.
        </p>
      </Grid>
      <Grid item xs={12}>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://moveitjs-silverjean.vercel.app/"
        >
          <figure className={classes.figure} id="pomo">
            <img className={classes.img} src={pomo} alt="" />
          </figure>
        </Link>
        <p className={classes.link}>
          Aplicação para sprints de atividades e nos intervalos ela propoem
          algumas atividades.
        </p>
      </Grid>
      <Grid item xs={12}>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/silverjean/ORM-Seqq"
        >
          <figure className={classes.figure}>
            <img className={classes.img} src={orm} alt="" />
          </figure>
        </Link>
        <p className={classes.link}>
          Aplicação backend, com banco de dados (postgresql), testes,
          controllers...
        </p>
      </Grid>
      <Grid item xs={12}>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/silverjean/spa"
        >
          <figure className={classes.figure}>
            <img className={classes.img} src={spa} alt="" />
          </figure>
        </Link>
        <p className={classes.link}>Exemplo simples de SPA em react</p>
      </Grid>
    </Grid>
  );
}
