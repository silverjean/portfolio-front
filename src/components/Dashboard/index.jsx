/* eslint-disable indent */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SearchIcon from '@material-ui/icons/Search';

import {
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core';
import { logout } from '../../store/modules/login/actions';
import ContactComp from '../ContactComp';
import CommentComp from '../CommentComp';
import logo from '../../assets/img/logojs__1_-removebg-preview.png';
import useStyles from '../Navbar/styles';
import api from '../../services/api';

export default function Dashboard({ contact }) {
  document.title = contact ? 'Lista de Contatos' : 'Lista de Comentários';
  const dispatch = useDispatch();
  const classes = useStyles();

  const [comments, setComments] = useState({
    data: null,
    error: false,
  });

  const [contacts, setContacts] = useState({
    data: null,
    error: false,
  });

  const [contactSearch, setContactSearch] = useState({
    data: null,
    error: false,
  });

  const [commentSearch, setCommentSearch] = useState({
    data: null,
    error: false,
  });

  const [search, setSearch] = useState('');

  function onLogout() {
    dispatch(logout());
    localStorage.removeItem('token');
  }
  let listComment = null;
  let listContact = null;

  useEffect(() => {
    setComments({
      data: null,
      error: false,
    });

    async function reqComment() {
      try {
        const { data } = await api.get('/comment');

        setComments({
          data,
          error: false,
        });
      } catch (error) {
        setComments({
          data: null,
          error: true,
        });
      }
    }
    reqComment();

    async function reqContact() {
      try {
        const { data } = await api.get('/contact');

        setContacts({
          data,
          error: false,
        });
      } catch (error) {
        setContacts({
          data: null,
          error: true,
        });
      }
    }
    reqContact();
  }, []);

  function handleDeleteComment(id) {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar o comentário?',
      text: 'Essa ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`comment/${id}`);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Comentário excluido com sucesso!',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => window.location.reload(), 1400);
      }
    });
  }

  if (comments.data) {
    listComment = comments.data.map((comment) => (
      <CommentComp
        key={comment.id}
        del={() => {
          handleDeleteComment(comment.id);
        }}
        name={comment.name}
        content={comment.content}
      />
    ));
  }

  function handleDeleteContact(id) {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar o contato?',
      text: 'Essa ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`contact/${id}`);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Contato excluido com sucesso!',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => window.location.reload(), 1400);
      }
    });
  }

  if (contacts.data) {
    listContact = contacts.data.map((contactItem) => (
      <ContactComp
        key={contactItem.id}
        del={() => {
          handleDeleteContact(contactItem.id);
        }}
        name={contactItem.name}
        email={contactItem.email}
        phoneNumber={contactItem.phone_number}
        message={contactItem.message}
      />
    ));
  }

  let commentSearchList = null;
  async function makeCommentSearch(item) {
    if (search === '') {
      return;
    }

    try {
      const lower = item.toLowerCase();
      const { data } = await api.get(`comment?name=${lower}`);
      setCommentSearch({
        data,
        error: false,
      });
    } catch (error) {
      setCommentSearch({
        data: null,
        error: true,
      });
    }
  }

  if (commentSearch.data) {
    commentSearchList = commentSearch.data.map((comment) => (
      <Grid item container direction="column" justify="center">
        <Grid item container>
          <Typography variant="h5">Resultado da busca:</Typography>
          <Button onClick={() => window.location.reload()}>Limpar Busca</Button>
        </Grid>
        <CommentComp
          del={() => {
            handleDeleteComment(comment.id);
          }}
          name={comment.name}
          content={comment.content}
        />
      </Grid>
    ));
  }

  let contactSearchList = null;
  async function makeContactSearch(item) {
    if (search === '') {
      return;
    }
    try {
      const lower = item.toLowerCase();
      const { data } = await api.get(`contact?name=${lower}`);
      setContactSearch({
        data,
        error: false,
      });
    } catch (error) {
      setContactSearch({
        data: null,
        error: true,
      });
    }
  }

  if (contactSearch.data) {
    contactSearchList = contactSearch.data.map((contItem) => (
      <Grid item container direction="column" justify="center">
        <Grid item container>
          <Typography variant="h5">Resultado da busca:</Typography>
          <Button onClick={() => window.location.reload()}>Limpar Busca</Button>
        </Grid>
        <ContactComp
          del={() => {
            handleDeleteContact(contItem.id);
          }}
          name={contItem.name}
          email={contItem.email}
          phoneNumber={contItem.phone_number}
          message={contItem.message}
        />
      </Grid>
    ));
  }

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12}>
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
            <Paper component="form" style={{ marginRight: '150px' }}>
              <InputBase
                placeholder="Pesquisa por nome"
                style={{ padding: '0 10px' }}
                onChange={({ target }) => setSearch(target.value)}
              />
              <IconButton
                onClick={
                  contact
                    ? () => {
                        makeContactSearch(search);
                      }
                    : () => {
                        makeCommentSearch(search);
                      }
                }
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            <Button>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: 'black',
                }}
                to={
                  contact ? '/dashboard/commentList' : '/dashboard/contactList'
                }
              >
                {contact ? 'Comentários' : 'Contatos'}
              </Link>
            </Button>
            <Button color="inherit" onClick={onLogout}>
              Sair
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
      {search ? (
        <Grid item justify="space-evenly" container>
          {contact ? contactSearchList : commentSearchList}
        </Grid>
      ) : (
        ''
      )}

      <Grid item container xs={12}>
        <Typography variant="h4">
          {contact ? 'Lista de Contatos:' : 'Lista de Comentários:'}
        </Typography>
      </Grid>
      <Grid item justify="space-evenly" container>
        {contact ? listContact : listComment}
      </Grid>
    </Grid>
  );
}
