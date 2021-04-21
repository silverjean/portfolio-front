import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Grid } from '@material-ui/core';

export default function NotFound() {
  const history = useHistory();
  return (
    <Container>
      <Grid>
        <h1>OPS!</h1>
        <h3>A pagina não foi encontrada!</h3>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Voltar
        </Button>
      </Grid>
    </Container>
  );
}
