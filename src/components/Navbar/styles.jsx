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
    color: 'inherit',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    border: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default useStyles;
