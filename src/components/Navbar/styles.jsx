import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
    width: 50,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'inherit',
    color: '#227093',
    transition: '01s all',

    '&:hover': {
      color: 'white',
      background: 'none !important',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    border: 1,
  },
  iconButton: {
    padding: 10,
  },
  header: {
    marginTop: '25px',
    borderRadius: '4px',
  },
  social: {
    position: 'absolute',
    right: '30px',
  },
  socialIcon: {
    marginRight: '10px',
    transition: '0.5s all',
    '&:hover': {
      marginBottom: '3px',
    },
  },
}));

export default useStyles;
