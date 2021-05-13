import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '14px',
    margin: '10px auto',
    backgroundColor: '#2c2c54',
    color: 'whitesmoke',
    width: '100%',
    display: 'inline-block',
    borderRadius: '3px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
  },
  r_title: {
    textAlign: 'center',
    fontWeight: 'bolder',
    marginBottom: '8px',
    position: 'relative',
    top: '-100px',
  },
  box: {
    marginBottom: '8px',
  },
  sub_title: {
    fontSize: '18px',
    marginBottom: '8px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list_p: {
    fontWeight: 'bold',
  },
  li: {
    listStyle: 'none',
    width: '75vh',
  },
  r_figure: {
    margin: '-14px -14px',
    position: 'relative',
  },

  r_figure_img: {
    borderRadius: '4px',
    width: '100%',
    opacity: '0.5',
  },

  r_column: {
    marginTop: '-30px',
  },
}));

export default useStyles;
