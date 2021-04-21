import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import figure from '../../assets/img/bg-resume.png';
import './resume.css';

export default function ResumeComp() {
  return (
    <Grid container className="container">
      <Grid item xs={12} className="head">
        <figure className="r_figure">
          <img src={figure} alt="" />
        </figure>
        <Typography variant="h5" className="r_title">
          Desenvolvedor Full Stack
        </Typography>
      </Grid>

      <Grid item xs={12} className="box">
        <p className="sub_title">Perfil</p>
        <Typography variant="body2">
          Sou um desenvolvedor full stack em constante evolução. Motivado e
          focado em resultados. Estou à procura de um emprego em que minhas
          habilidades possam ser utilizadas e eu possa crescer
          profissionalmente.
        </Typography>
      </Grid>
      <Grid item container spacing={5}>
        <Grid
          item
          container
          direction="column"
          xs={12}
          sm={12}
          md={5}
          className="box list"
        >
          <Grid item container direction="column">
            <Grid item justify="center" sm={12} md>
              <p className="sub_title">Histórico Academico</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <ul>
                <li>
                  <p>Furg</p>
                  <small>Engenharia Mecânica | 2015 - 2022</small>
                </li>
                <li>
                  <p>IFRS - Rio Grande</p>
                  <small>Téc. Refrigeração | 2010 - 2013</small>
                </li>
                <li>
                  <p>Growdev</p>
                  <small>Programa Start | 2020 - 2021</small>
                </li>
                <li>
                  <p>Alura</p>
                  <small>Desenvolve Boticário - Frontend | 2021 - 2021</small>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={5} className="box list">
          <Grid item container direction="column">
            <Grid item justify="center" sm={12} md>
              <p className="sub_title">Habilidade e Linguagens</p>
            </Grid>
            <Grid item sm={12} md={6}>
              <ul>
                <li>
                  <p>HTML5, CSS3, JavaScript</p>
                </li>
                <li>
                  <p>Node.js, Testes (TDD)</p>
                </li>
                <li>
                  <p>Banco de dados SQL</p>
                </li>
                <li>
                  <p>React </p>
                </li>
                <li>
                  <p>Requisições a API (CRUD)</p>
                </li>
                <li>
                  <p>Styled components</p>
                </li>
                <li>
                  <p>Noções de UX, Noções de metodologias Ágeis</p>
                </li>
                <li>
                  <p>Manipulação com DOM</p>
                </li>
                <li>
                  <p>Inglês (intermediário)</p>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className="box list">
        <p variant="body2" className="sub_title">
          Histórico Profissional
        </p>
        <ul>
          <li>
            <p>Bolsista de Iniciação Cientifica - CNPq</p>
            <small>
              Foi um grande e desafiadora oportunidade, fazendo pesquisas na
              área de ciência dos materiais. Onde eu aprendi muito a ter
              autonomia para fazer qualquer tarefa que fosse surgindo.
            </small>
          </li>
          <li>
            <p>Estágio na área de projetos - LW Serviços</p>
            <small>
              Atuei como estagiário de Engenharia Mecânica, na construção de
              componentes mecânicos. Onde eu e a equipe organizávamos e
              conduzíamos desde o projeto saindo do papel até a entrega para o
              cliente final, o que agregou bastante nos quesitos de trabalho em
              equipe e organização do tempo.
            </small>
          </li>
          <li>
            <p>Recepcionita - Hoteis Atlantico</p>
            <small>
              Realizava o atendimento direto ao público, bem como reservas e
              eventuais problemas que pudessem ocorrer com algum cliente.
            </small>
          </li>
          <li>
            <p>Estágio em Refrigeração - Unimed</p>
            <small>
              Realizava manutenção nos sistemas de refrigeração e criava planos
              de manutenção para que fosse necessário o mínimo possível de
              manutenção emergencial.
            </small>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
